
function pictureBox() {
    return `
    <div>
        <div class="monsterInfo"><img src='img/${model.input.teamSelect.current.Picture}' style="width:300px"></img></div>

        <div class="monsterInfo">
            <div>${model.input.teamSelect.current.Species}</div>
            <div>HP: ${model.input.teamSelect.current.Health}</div>
            <div>MP: ${model.input.teamSelect.current.MagicPoints}</div>
            <div>Attack: ${model.input.teamSelect.current.AttackMin} - ${model.input.teamSelect.current.AttackMax}</div>
            <div>Crit Chance: ${model.input.teamSelect.current.CritChance} %</div>
            <div>Dogde Chance: ${model.input.teamSelect.current.DodgeRate} %</div>
            <div>Element: ${model.input.teamSelect.current.Element}</div>
            <div>Affinity: ${model.input.teamSelect.current.Affinity}</div>
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