
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
var characters = [
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
    "I_Wanna_Be_The_Ryu","Iori","Iori-KOF98","Iori Yagami CTN Lv2-KOFM","IORI-HOMER",
    "ITF_Kim","jacksepticeye","JAGI","J_Mary","J_shermie","Jagi_r","Jerma985","Jimmyhere",
    "Joe-KOF98","Joe Swanson","Johnny Cage MKT","Jin_Kazama","Jin_Kisaragi_XI","KaiSenseiRyu",
    "KaiSensei_Ken","KAGE 2.0","KenMasters","KENSHIROU_AI-Patch","KENSHIRONEW","kenshiro-KOFM",
    "Kenshiro_C2","Kenoh","Kenoh[FleshdoomDBL&Lordmike]","kfm720","kfmZ","KOF_Tung_Fu_Rue",
    "KoopaClownCar_IWBTG","Kung Fu Girl","koryu","Kyoko","Legendary Bogard 1.0",
    "LORD Igniz-Boss","Lyzer","Man of the Benevolent star","Markiplier","MasterKen","MasterRyu",
    "MikeTyson_IWBTG","miketyson","MIKU_APPEND","Miku Hatsune","MIKU_Natural","MoarKrabs","Monika_B",
    "Morshu","MVC Miku","MVC1PatrickStar","MvC2Hulk","MvC2_Juri Han","MvC2_Thor","N-Ralf",
    "Nakoruru_Kofe","Nitro Supreme Hatsune Miku","NormalKen","NormalRyu","NappaTA","New Madness Mario",
    "Nightmare","norris","ObamaBossFight","OL_Yamcha","OWRemakeV2","omega weegee remake","oni-akuma-kofa",
    "P-Cell_KN.Edit","Paladin","Papyrus","PeachMYTHOS","Peter","PiccoloZ2","POWERSTARMario","Pyron_cvs",
    "Qi-Hao-Long","Raditz","Raditz_KN.Edit","RagnaDSG","RacingMiku2014_EV","Reggie-Skatore","Rei_AI-Patch",
    "RED","Rocky","Ryougi","Rozwel Gustab AI","Sagat","SagatMG","Sans","Sans edit","scorpionJUAN",
    "SFZ_Ehnyd","sf3_alex","sfz3adon","SHIN RYU","Shin","Shin_AI-Patch","ShinSmoke Ryu","Shadow",
    "Shadow JUS Updated","Sakuya","Songoku_US","Songohan_CS","Strider Hiryu","Super Bad Mario",
    "Super Better Luigi","Super Better Mario","Super Better Yoshi","Super Goku Boss Ultimate",
    "Super Gogeta4","Super Vegetto4","Supa Cirno","SSJ 2 GokuZ2","SSJ3_GokuZ2i","SSJ4Blory_KN.edit",
    "SSJBlue_VegettoZ2","SSJ_Goku_LegendaryZ2","SSG_GokuZ2","SSGSS_GokuZ2","Symbiote_Spiderman",
    "TenShinHanZ2","Thaldrix","ThoutherMario","the-kung-fu-man","Terry-KOF98","TJ Combo","Tohno Akiha",
    "Thor_AvX","Toriel","TurboModeGouki","UC.Falcon","Ultimate_Ken","Ultimate_Ryu",
    "Ultimate_Bad_Time_Sans_R","UI_GokuZ2","Undyne","VegettoBlue","VegettoBlue_KN","VegettoZ2",
    "Vegeta All Forms","Vegeta Super Transform 1.6","VGA_bowser","Violent Ken SF3","Wario","Washizuka3",
    "Warrior_C","Xeno GogetaSSJ4","XRyu","YamchaZ2i","Yang","Yuki","Yujiro","Zhou Lee","Zorf-slc"
];


characters.sort();

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
document.getElementById("backHomeBtn").onclick = () => { left.style.display = "none"; home.style.display = "flex"; info.innerHTML = ''; }

/* ===== HORIZONTAL SCROLLING TEXT ===== */
const scrollBottomDiv = document.getElementById("scrollBottom");
const scrollWords = ["MUGENWiki", ...featuredCharacters.sort(() => 0.5 - Math.random()).slice(0, 10)];

function generateHorizontalScroll(container, words) {
    container.innerHTML = '';
    words.forEach(word => {
        const span = document.createElement("span");
        span.className = "scrollingWord";
        span.textContent = word;
        span.style.color = "#4169e1"; // Blue color
        container.appendChild(span);
    });
}

generateHorizontalScroll(scrollBottomDiv, scrollWords);
setInterval(() => {
    generateHorizontalScroll(scrollBottomDiv, scrollWords.sort(() => 0.5 - Math.random()));
}, 20000);


generateHorizontalScroll(scrollBottomDiv, scrollWords);
setInterval(() => {
    generateHorizontalScroll(scrollBottomDiv, scrollWords.sort(() => 0.5 - Math.random()));
}, 20000);