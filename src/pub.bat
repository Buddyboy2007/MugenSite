@echo off
setlocal EnableExtensions

REM ====== CONFIG ======
set "TARGET=Z:\web-mugen\html"
set "URL=https://mugen.polyhedera.com"
REM ====================

echo === Build ===
call npm run build
if errorlevel 1 exit /b 1

echo === Deploy dist -> %TARGET% ===
robocopy dist "%TARGET%" /E /MIR

REM Robocopy exit codes: 0-7 are OK, >=8 is failure
if %errorlevel% GEQ 8 exit /b %errorlevel%

echo === Stamp version.json ===
for /f %%i in ('powershell -NoProfile -Command "[int][double]::Parse((Get-Date -UFormat %%s))"') do set "EPOCH=%%i"

for /f %%g in ('git rev-parse --short HEAD 2^>NUL') do set "GIT=%%g"
if "%GIT%"=="" set "GIT=nogit"

powershell -NoProfile -Command ^
  "$p='%TARGET%\version.json';" ^
  "$o=[ordered]@{ builtAt=(Get-Date).ToString('o'); epoch=%EPOCH%; git='%GIT%'; }; " ^
  "$o | ConvertTo-Json | Set-Content -Encoding UTF8 $p"

echo === Open browser (cache-bust) ===
start "" "%URL%/?v=%EPOCH%"

echo Done.
endlocal
