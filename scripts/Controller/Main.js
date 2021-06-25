
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