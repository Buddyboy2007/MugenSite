<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MUGEN Character Roster</title>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<style>
body {
    font-family: 'Press Start 2P', cursive;
    margin: 0;
    display: flex;
    height: 100vh;
    color: #fff;
    overflow: hidden;
    position: relative;
    background: radial-gradient(circle at top, #ccefff, #3b6ea5, #0b1f3a);
}

/* ===== WATER SIDES ===== */
#waterLeft, #waterRight {
    position: fixed;
    top: 0;
    width: 60px;
    height: 100%;
    z-index: 1;
    background: linear-gradient(to bottom, rgba(173,216,230,0.5), rgba(0,105,148,0.5));
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
    animation: wave 6s infinite linear;
}
#waterLeft { left: 0; transform: rotateY(180deg); }
#waterRight { right: 0; }

@keyframes wave {
    0% { clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%); }
    50% { clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%); }
    100% { clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%); }
}

/* ===== FLOATING BUBBLES ===== */
#ambientBubbles {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}
.ambientBubble {
    position: absolute;
    bottom: -120px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #ffffff, #9ee7ff);
    opacity: 0.45;
    animation: driftUp linear infinite;
    box-shadow: inset 0 0 10px rgba(255,255,255,0.9), 0 0 12px rgba(120,200,255,0.5);
}
@keyframes driftUp {
    to { transform: translateY(-130vh) translateX(-50px) scale(1.2); opacity: 0; }
}

/* Glass panels */
#leftPanel, #rightPanel {
    position: relative;
    z-index: 2;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
    backdrop-filter: blur(8px);
    background: linear-gradient(180deg, rgba(255,255,255,0.15), rgba(0,0,0,0.3));
    border: 1px solid rgba(255,255,255,0.25);
}
#leftPanel { width: 25%; display: none; }
#rightPanel { width: 75%; border-left: 2px solid rgba(255,255,255,0.3); display: flex; flex-direction: column; }

/* Buttons */
button {
    padding: 18px;
    font-size: 1em;
    width: 100%;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,0.6);
    cursor: pointer;
    color: #003355;
    background: linear-gradient(180deg, #e8faff 0%, #8bd6ff 50%, #4fa8dc 100%);
    box-shadow: inset 0 2px 4px rgba(255,255,255,0.8), 0 6px 15px rgba(0,0,0,0.4);
    text-shadow: 0 1px #fff;
    transition: all 0.2s ease;
}
button:hover { transform: translateY(-2px) scale(1.03); }

/* Home screen */
#homeScreen {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
}
#homeButtons {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}

/* Featured */
#featured {
    margin-top: 30px;
    width: 90%;
    padding: 20px;
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(255,255,255,0.25), rgba(0,0,0,0.35));
}
.featureGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
}
.charDescription {
    margin-top: 15px;
    padding: 15px;
    background: linear-gradient(180deg,#e8faff,#7ccfff);
    border-left: 6px solid #00c6ff;
    border-radius: 12px;
    color: #003355;
}
</style>
</head>
<body>

<!-- Water sides -->
<div id="waterLeft"></div>
<div id="waterRight"></div>

<!-- Ambient bubbles -->
<div id="ambientBubbles"></div>

<!-- Background music -->
<audio id="bgm" loop>
    <source src="wii-menu.mp3" type="audio/mpeg">
</audio>

<div id="leftPanel">
    <button id="backHomeBtn">⬅ BACK TO HOME</button>
    <div id="letters"></div>
</div>

<div id="rightPanel">
    <div id="homeScreen">
        <div id="homeButtons">
            <button id="enterList">ENTER CHARACTER LIST</button>
            <button onclick="window.open('https://www.twitch.tv/lancero7777','_blank')">TWITCH – LANCERO</button>
            <button onclick="window.open('https://discord.gg/YubRRyQhVg','_blank')">DISCORD</button>
            <button onclick="window.open('https://en.wikipedia.org/wiki/Mugen_(game_engine)','_blank')">MUGEN WIKI</button>
        </div>
        <div id="featured">
            <h2>★ Featured Fighters ★</h2>
            <div class="featureGrid" id="featuredGrid"></div>
        </div>
    </div>
    <div id="characterInfo"></div>
</div>

<script>
/* ===== MUSIC ===== */
const bgm = document.getElementById("bgm");
document.body.addEventListener("click", () => {
    if (bgm.paused) { bgm.volume = 0.7; bgm.play().catch(()=>{}); }
}, { once: true });

/* ===== AMBIENT BUBBLES ===== */
const bubbleLayer = document.getElementById("ambientBubbles");
function spawnBubble() {
    const b = document.createElement("div");
    b.className = "ambientBubble";
    const size = 20 + Math.random() * 60;
    b.style.width = b.style.height = size + "px";
    b.style.left = Math.random() * 100 + "vw";
    b.style.animationDuration = 8 + Math.random() * 10 + "s";
    bubbleLayer.appendChild(b);
    setTimeout(() => b.remove(), 18000);
}
setInterval(spawnBubble, 500);

/* ===== FEATURED FIGHTERS ===== */
const featuredCharacters = [
    "MvC2Hulk","MvC2_Thor","Thor_AvX","Spiderman","Symbiote_Spiderman",
    "Ryo-KOF98","KenMasters","GokuSSJ4_EB","Ultra Instinct Goku",
    "BrolyZ2","Shadow","Another God Akuma","SuperMario","Bowser","Sans","Papyrus"
];
function randomPick(arr,count){return [...arr].sort(()=>0.5-Math.random()).slice(0,count);}
randomPick(featuredCharacters,8).forEach(c=>{
    const b=document.createElement("button");
    b.textContent=c;
    b.onclick=()=>window.open(`https://www.mugendb.com/search?q=${encodeURIComponent(c)}`,"_blank");
    document.getElementById("featuredGrid").appendChild(b);
});

/* ===== CHARACTER LIST ===== */
const characters = [
"119way-mario","AI-ShadowMHII","AI-SonicMHII","AI-bison","AI-eric",
"Adel-BOSS","Aoko_AACC","Anakin","Another God Akuma","Arthas",
"Armor_VegetaZ2","AVGN","Bardock_BT","Balrog","baki","Betty Nor",
"Beerus","Black_Apocalypse","BlackZ2i - Anime Version","Bowser",
"BrolyNew","BrolyZ2","Bulla","Chuck Norris","chicken","Charmx","chris",
"Chun_LI_JJ","Chunli","Classic_Sonic","CFJ_Liu_Kang","cvshaohmaru_ex",
"cvszangief_ex","cvsyoko","CyberRyu","DaigoKen","Definitive Rei AI Alt",
"Definition","Destinydio","Devil Jin","Devil_Jin","Devil_Mario_Prime",
"Dhalsim","Dragon-Ken","D-Donald","dracula","Evil Ryu","EvilRyu",
"Emperor_Frieza","Etika","fei-long","Flamme","Frisk","Future_Gohan",
"Giygas","Goku Black SSR","Goku Legend SSJ","GokuSSJ4_EB","Goku Ultra Instinto Dominado",
"Gokuub22V3","GohanBeastZ2","Gohan Blanco","God_Goku","Guile","guile xi",
"Guy","guy_pots","Haohmaru-KOF98","Hel01","Honda_unotag","HyperGoDRyu",
"I_Wanna_Be_The_Ryu","Iori","Iori-KOF98","Iori Yagami CTN Lv2-KOFM",
"IORI-HOMER","ITF_Kim","jacksepticeye","JAGI","J_Mary","J_shermie",
"Jagi_r","Jerma985","Jimmyhere","Joe-KOF98","Joe Swanson","Johnny Cage MKT",
"Jin_Kazama","Jin_Kisaragi_XI","KaiSenseiRyu","KaiSensei_Ken","KAGE 2.0",
"KenMasters","KENSHIROU_AI-Patch","KENSHIRONEW","kenshiro-KOFM","Kenshiro_C2",
"Kenoh","Kenoh[FleshdoomDBL&Lordmike]","kfm720","kfmZ","KOF_Tung_Fu_Rue",
"KoopaClownCar_IWBTG","Kung Fu Girl","koryu","Kyoko","Legendary Bogard 1.0",
"LORD Igniz-Boss","Lyzer","Man of the Benevolent star","Markiplier","MasterKen",
"MasterRyu","MikeTyson_IWBTG","miketyson","MIKU_APPEND","Miku Hatsune",
"MIKU_Natural","MoarKrabs","Monika_B","Morshu","MVC Miku","MVC1PatrickStar",
"MvC2Hulk","MvC2_Juri Han","MvC2_Thor","N-Ralf","Nakoruru_Kofe",
"Nitro Supreme Hatsune Miku","NormalKen","NormalRyu","NappaTA","New Madness Mario",
"Nightmare","norris","ObamaBossFight","OL_Yamcha","OWRemakeV2","omega weegee remake",
"oni-akuma-kofa","P-Cell_KN.Edit","Paladin","Papyrus","PeachMYTHOS","Peter",
"PiccoloZ2","POWERSTARMario","Pyron_cvs","Qi-Hao-Long","Raditz","Raditz_KN.Edit",
"RagnaDSG","RacingMiku2014_EV","Reggie-Skatore","Rei_AI-Patch","RED","Rocky",
"Ryougi","Rozwel Gustab AI","Sagat","SagatMG","Sans","Sans edit","scorpionJUAN",
"SFZ_Ehnyd","sf3_alex","sfz3adon","SHIN RYU","Shin","Shin_AI-Patch","ShinSmoke Ryu",
"Shadow","Shadow JUS Updated","Sakuya","Songoku_US","Songohan_CS","Strider Hiryu",
"Super Bad Mario","Super Better Luigi","Super Better Mario","Super Better Yoshi",
"Super Goku Boss Ultimate","Super Gogeta4","Super Vegetto4","Supa Cirno","SSJ 2 GokuZ2",
"SSJ3_GokuZ2i","SSJ4Blory_KN.edit","SSJBlue_VegettoZ2","SSJ_Goku_LegendaryZ2",
"SSG_GokuZ2","SSGSS_GokuZ2","Symbiote_Spiderman","TenShinHanZ2","Thaldrix",
"ThoutherMario","the-kung-fu-man","Terry-KOF98","TJ Combo","Tohno Akiha","Thor_AvX",
"Toriel","TurboModeGouki","UC.Falcon","Ultimate_Ken","Ultimate_Ryu","Ultimate_Bad_Time_Sans_R",
"UI_GokuZ2","Undyne","VegettoBlue","VegettoBlue_KN","VegettoZ2","Vegeta All Forms",
"Vegeta Super Transform 1.6","VGA_bowser","Violent Ken SF3","Wario","Washizuka3",
"Warrior_C","Xeno GogetaSSJ4","XRyu","YamchaZ2i","Yang","Yuki","Yujiro","Zhou Lee",
"Zorf-slc"
];
characters.sort();

// Letters panel
const lettersDiv = document.getElementById("letters");
const info = document.getElementById("characterInfo");
const home = document.getElementById("homeScreen");
const left = document.getElementById("leftPanel");
const letters = {};
characters.forEach(c => {
    const l = c[0].toUpperCase();
    if(!letters[l]) letters[l] = [];
    letters[l].push(c);
});
Object.keys(letters).forEach(l => {
    const b = document.createElement("button");
    b.textContent = `${l} (${letters[l].length})`;
    b.onclick = () => showLetter(l);
    lettersDiv.appendChild(b);
});
function showLetter(letter) {
    info.innerHTML = '';
    letters[letter].forEach(c => {
        const d = document.createElement("div");
        d.className = "charDescription";
        d.innerHTML = `<h3>${c}</h3><p>Search this fighter on MugenDB</p>`;
        d.querySelector("h3").onclick = () => window.open(`https://www.mugendb.com/search?q=${encodeURIComponent(c)}`,"_blank");
        info.appendChild(d);
    });
}

// Enter / back buttons
document.getElementById("enterList").onclick = () => { home.style.display = "none"; left.style.display = "block"; };
document.getElementById("backHomeBtn").onclick = () => { left.style.display = "none"; home.style.display = "flex"; info.innerHTML = ''; };
</script>

</body>
</html>
