# Vue Ikemen UI

This is a tiny Vue 3 + Vite UI to list characters from your Ikemen Bridge.

## Run

1) Install
```bash
npm install
```

2) Set API base (optional)
Create `.env.local`:
```env
VITE_API_BASE=http://127.0.0.1:5057
```

3) Start
```bash
npm run dev
```

Open: http://127.0.0.1:8080

## Expected payload

`GET /api/characters` returns an array like:

```json
{
  "filename": "D:\\Emu\\ikemen\\chars\\Ultimate_Ken\\Ultimate_Ken.DEF",
  "name": "Ultimate_Ken",
  "displayName": "Ultimate Ken",
  "author": "ELECTR0"
}
```
