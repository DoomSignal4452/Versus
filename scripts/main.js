// ###############################################################
// ##                          Model                            ##
// ###############################################################

const Monster = [
    { id: 01, Species: 'Dog(WIP)',      Health: 120, MagicPoints: 80,  AttackMin: 5, AttackMax: 10, CritChance: 30, DodgeRate: 10, Element: 'Neutral',  Affinity: 'Normal',     Picture: "<img src='img/picWIP.png'></img>"},
    { id: 02, Species: 'Fox(WIP)',      Health: 100, MagicPoints: 80,  AttackMin: 8, AttackMax: 15, CritChance: 40, DodgeRate: 15, Element: 'Wind',     Affinity: 'Plant',      Picture: "<img src='img/picWIP.png'></img>"},
    { id: 03, Species: 'Purryl(WIP)',   Health: 150, MagicPoints: 50,  AttackMin: 2, AttackMax: 6,  CritChance: 20, DodgeRate: 10, Element: 'Stone',    Affinity: 'Cold',       Picture: "<img src='img/picWIP.png'></img>"},
    { id: 04, Species: 'Gecko(WIP)',    Health: 90,  MagicPoints: 90,  AttackMin: 5, AttackMax: 8,  CritChance: 35, DodgeRate: 25, Element: 'Fire',     Affinity: 'Inorganic',  Picture: "<img src='img/picWIP.png'></img>"},
    { id: 05, Species: 'Dinosaur(WIP)', Health: 110, MagicPoints: 70,  AttackMin: 3, AttackMax: 6,  CritChance: 20, DodgeRate: 20, Element: 'Water',    Affinity: 'Normal',     Picture: "<img src='img/picWIP.png'></img>"},
    { id: 06, Species: 'Serpent(WIP)',  Health: 160, MagicPoints: 90,  AttackMin: 2, AttackMax: 3,  CritChance: 50, DodgeRate: 5,  Element: 'Wind',     Affinity: 'Cold',       Picture: "<img src='img/picWIP.png'></img>"},
    { id: 07, Species: 'Horse(WIP)',    Health: 100, MagicPoints: 100, AttackMin: 8, AttackMax: 10, CritChance: 5,  DodgeRate: 10, Element: 'Stone',    Affinity: 'Plant',      Picture: "<img src='img/picWIP.png'></img>"},
    { id: 08, Species: 'Meercat(WIP)',  Health: 130, MagicPoints: 50,  AttackMin: 4, AttackMax: 6,  CritChance: 60, DodgeRate: 15, Element: 'Fire',     Affinity: 'Normal',     Picture: "<img src='img/picWIP.png'></img>"},
    { id: 09, Species: 'Bird(WIP)',     Health: 140, MagicPoints: 40,  AttackMin: 1, AttackMax: 10, CritChance: 20, DodgeRate: 0,  Element: 'Water',    Affinity: 'Inorganic',  Picture: "<img src='img/picWIP.png'></img>"},

];
console.table(Monster);

let PlayerTeam = [
    {},
    {},
    {}
]

let NPCTeam = [
    {},
    {},
    {}
]

// ###############################################################
// ##                          View                             ##
// ############################################################### <div></div>

updateView();
function updateView() {
    document.getElementById('app').innerHTML = `
    <div class="page">
        <div class="gamebox">
        <div id="MonsterField" class="WhiteBox"></div>

        <div id="SelectionBox" class="WhiteBox">
            <button id="Choose0" class="pickme">${Monster[0].Species}</button>
            <button id="Choose1" class="pickme">${Monster[1].Species}</button>
            <button id="Choose2" class="pickme">${Monster[2].Species}</button>

            <button id="Choose3" class="pickme">${Monster[3].Species}</button>
            <button id="Choose4" class="pickme">${Monster[4].Species}</button>
            <button id="Choose5" class="pickme">${Monster[5].Species}</button>

            <button id="Choose6" class="pickme">${Monster[6].Species}</button>
            <button id="Choose7" class="pickme">${Monster[7].Species}</button>
            <button id="Choose8" class="pickme">${Monster[8].Species}</button>
        </div>
        
        </div>
    </div>
    `;
}


// ###############################################################
// ##                       Controller                          ##
// ###############################################################