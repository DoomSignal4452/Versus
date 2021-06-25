function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function SelectionView() {
    document.getElementById("SelectionField").innerHTML = `
    <div id="PlayerPic" class="CharPicture">${NoChoose}</div>



<div id="PlayerStat" class="StatInfo">

    <div class="StatSheet">
        <div class="ChosenChar">${ChosenCharacter}</div>
            
        <div class="CharStat">
            HP: ${PlayerHealth}
            <br>MP: ${PlayerMagicPoints}
            <br>Attack: ${PlayerAttackMin} - ${PlayerAttackMax}
            <br>Critical Chance: ${PlayerCriticalChance}
            <br>Dodge Chance: ${PlayerDodgeRate}
        </div>
    </div>
    

</div>
<button ${disButtonReady} id="playReady" class="pickmeLarge" onclick='BattleReady()'>${PlayerCharacter}</button>
`}

function Choose(MonsterIndex) {
    disButtonReady = "";
    NoChoose=Monster[MonsterIndex].Picture;
    PlayerCharacter="Start Battle";
    ChosenCharacter=Monster[MonsterIndex].Species;
    PlayerHealth=Monster[MonsterIndex].Health;
    PlayerAttackMin=Monster[MonsterIndex].AttackMin;
    PlayerAttackMax=Monster[MonsterIndex].AttackMax;
    PlayerMaxHeatlh=Monster[MonsterIndex].Health;
    PlayerCriticalChance=Monster[MonsterIndex].CritChance;
    PlayerDodgeRate=Monster[MonsterIndex].DodgeRate;
    PlayerMagicPoints=Monster[MonsterIndex].MagicPoints;
    PlayerMagicPointsMax=Monster[MonsterIndex].MagicPoints;
    SelectionView();
}

function BattleReady() {
    NPCChoiseVal = RandomNumber(0, 8);
    console.log(NPCChoiseVal + " <-- NPC Choise Value")

    NPCChoise=Monster[NPCChoiseVal].Species;
    NPCHealth=Monster[NPCChoiseVal].Health;
    NPCAttackMin=Monster[NPCChoiseVal].AttackMin;
    NPCAttackMax=Monster[NPCChoiseVal].AttackMax;
    NPCharacterPic=Monster[NPCChoiseVal].Picture;
    NPCMaxHealth=Monster[NPCChoiseVal].Health;
    NPCCriticalChance=Monster[NPCChoiseVal].CritChance;
    NPCDodgeRate=Monster[NPCChoiseVal].DodgeRate;
    NPCMagicPoints=Monster[NPCChoiseVal].MagicPoints;
    NPCMagicPointsMax=Monster[NPCChoiseVal].MagicPoints;

    
    isReady="yes"

    console.log(NPCHealth + " <-- NPC Start Health")
    console.log(PlayerHealth + " <-- Player Start Health")
    updateView();
}

