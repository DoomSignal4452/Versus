
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
