// ###############################################################
// ##                          Model                            ##
// ###############################################################

const Monster = [
    { id: 01, Species: 'Dog(WIP)',      Health: 120, MagicPoints: 80,  AttackMin: 5, AttackMax: 10, CritChance: 30, DodgeRate: 10, Element: 'Neutral',  Affinity: 'Normal',     Picture: "picWIP.png"},
    { id: 02, Species: 'Fox(WIP)',      Health: 100, MagicPoints: 80,  AttackMin: 8, AttackMax: 15, CritChance: 40, DodgeRate: 15, Element: 'Wind',     Affinity: 'Plant',      Picture: "picWIP.png"},
    { id: 03, Species: 'Purryl(WIP)',   Health: 150, MagicPoints: 50,  AttackMin: 2, AttackMax: 6,  CritChance: 20, DodgeRate: 10, Element: 'Stone',    Affinity: 'Cold',       Picture: "picWIP.png"},
    { id: 04, Species: 'Gecko(WIP)',    Health: 90,  MagicPoints: 90,  AttackMin: 5, AttackMax: 8,  CritChance: 35, DodgeRate: 25, Element: 'Fire',     Affinity: 'Inorganic',  Picture: "picWIP.png"},
    { id: 05, Species: 'Dinosaur(WIP)', Health: 110, MagicPoints: 70,  AttackMin: 3, AttackMax: 6,  CritChance: 20, DodgeRate: 20, Element: 'Water',    Affinity: 'Normal',     Picture: "picWIP.png"},
    { id: 06, Species: 'Serpent(WIP)',  Health: 160, MagicPoints: 90,  AttackMin: 2, AttackMax: 3,  CritChance: 50, DodgeRate: 5,  Element: 'Wind',     Affinity: 'Cold',       Picture: "picWIP.png"},
    { id: 07, Species: 'Horse(WIP)',    Health: 100, MagicPoints: 100, AttackMin: 8, AttackMax: 10, CritChance: 5,  DodgeRate: 10, Element: 'Stone',    Affinity: 'Plant',      Picture: "picWIP.png"},
    { id: 08, Species: 'Meercat(WIP)',  Health: 130, MagicPoints: 50,  AttackMin: 4, AttackMax: 6,  CritChance: 60, DodgeRate: 15, Element: 'Fire',     Affinity: 'Normal',     Picture: "picWIP.png"},
    { id: 09, Species: 'Bird(WIP)',     Health: 140, MagicPoints: 40,  AttackMin: 1, AttackMax: 10, CritChance: 20, DodgeRate: 0,  Element: 'Water',    Affinity: 'Inorganic',  Picture: "picWIP.png"},

];
console.table(Monster);

let currentSelection = { id: 00, Species: 'Choose a monster',  Health: 0, MagicPoints: 0,  AttackMin: 0, AttackMax: 0,  CritChance: 0, DodgeRate: 0, Element: 'none',     Affinity: 'none',     Picture: "picWIP.png"};

let PlayerTeam = [
    {},
    {},
    {}
];

let NPCTeam = [
    {},
    {},
    {}
];

let playerIsReady=false;

let playerTeamSlotSelected=0;

// ###############################################################
// ##                          View                             ##
// ############################################################### <div></div>

updateView();
function updateView() { // make button change class when clicked instad of "translate" movement on click. looks better in view.
    document.getElementById('app').innerHTML = `
    <div class="page">
        <div class="gamebox">
        <div id="MonsterField" class="WhiteBox">${pictureBox()}</div>

        <div id="SelectionBox" class="WhiteBox">
            <button id="Choose0" class="pickme" onclick="selectMonster(0)">${Monster[0].Species}</button>
            <button id="Choose1" class="pickme" onclick="selectMonster(1)">${Monster[1].Species}</button>
            <button id="Choose2" class="pickme" onclick="selectMonster(2)">${Monster[2].Species}</button>

            <button id="Choose3" class="pickme" onclick="selectMonster(3)">${Monster[3].Species}</button>
            <button id="Choose4" class="pickme" onclick="selectMonster(4)">${Monster[4].Species}</button>
            <button id="Choose5" class="pickme" onclick="selectMonster(5)">${Monster[5].Species}</button>

            <button id="Choose6" class="pickme" onclick="selectMonster(6)">${Monster[6].Species}</button>
            <button id="Choose7" class="pickme" onclick="selectMonster(7)">${Monster[7].Species}</button>
            <button id="Choose8" class="pickme" onclick="selectMonster(8)">${Monster[8].Species}</button>
        </div>
        
        </div>
    </div>
    `;
}


// ###############################################################
// ##                       Controller                          ##
// ############################################################### <div></div>

function pictureBox() {
    return `
    <div>
        <div class="monsterInfo"><img src='img/${currentSelection.Picture}' style="width:300px"></img></div>

        <div class="monsterInfo">
            <div>${currentSelection.Species}</div>
            <div>HP: ${currentSelection.Health}</div>
            <div>MP: ${currentSelection.MagicPoints}</div>
            <div>Attack: ${currentSelection.AttackMin} - ${currentSelection.AttackMax}</div>
            <div>Crit Chance: ${currentSelection.CritChance} %</div>
            <div>Dogde Chance: ${currentSelection.DodgeRate} %</div>
            <div>Element: ${currentSelection.Element}</div>
            <div>Affinity: ${currentSelection.Affinity}</div>
        </div>

        <div>

        </div>
    
    </div>
    `;
    
}

function selectMonster(s) {
    currentSelection=Monster[s];
    updateView();
}

function addToTeam() { // maybe not change slot if player has selected it?
    if (playerTeamSlotSelected==3) {return;}
    if (currentSelection.id!=0) {
        PlayerTeam[playerTeamSlotSelected]=currentSelection;
        playerTeamSlotSelected++;
    }

}