function ResetBattle() {
    disButtonReady = "disabled";
    isReady = "no";
    PlayerCharacter= "Choose Character";
    NoChoose="<img src='tmp-pic/Choose.jpg'></img>";
    ChosenCharacter="None Selected";
    thisIsTheWinner = "";
    PlayerHealth = 0;
    PlayerAttackMin=0;
    PlayerAttackMax=0;
    PlayerCriticalChance=0;
    PlayerDodgeRate=0;
    PlayerMagicPoints=0;



    updateView();
}

// Player Power Calc:

function PlayerAttackCalc() {
    PlayerBaseAttack=RandomNumber(PlayerAttackMin, PlayerAttackMax);
    console.log(PlayerBaseAttack + " <-- player basic attack score");

    PlayerCritical = RandomNumber(0, 100);
    console.log(PlayerCriticalChance + " <-- player attack critical chance");
    console.log(PlayerCritical + " <-- player attack critical value");

    if (PlayerCritical<=PlayerCriticalChance) {
        PlayerBaseAttack=(PlayerBaseAttack*2);
        console.log("PLAYER HAS MADE A CRITICAL HIT!!");
    }
    console.log(PlayerBaseAttack + " <-- player final attack score");
}

function NPCAttackCalc() {
    NPCBaseAttack=RandomNumber(NPCAttackMin, NPCAttackMax);
    console.log(NPCBaseAttack + " <-- NPC basic attack score");

    NPCCritical = RandomNumber(0, 100);
    console.log(NPCCriticalChance + " <-- NPC attack critical chance");
    console.log(NPCCritical + " <-- NPC attack critical value");

    if (NPCCritical<=NPCCriticalChance) {
        NPCBaseAttack=(NPCBaseAttack*2);
        console.log("NPC HAS MADE A CRITICAL HIT!!");
    }
    console.log(NPCBaseAttack + " <-- NPC final attack score");
}

function DoesTheNPCHitCalc() {
    NPCAccuracyValue = RandomNumber(0, 100);
    console.log(NPCAccuracyValue + " <-- NPC attack accuracy value");
    console.log(PlayerDodgeRate + " <-- Player dodge rate");

    if (NPCAccuracyValue<=PlayerDodgeRate) {
        console.log("NPC misses!!!!");
        return false;
    } else {return true;}
}

function DoesThePlayerHitCalc() {
    PlayerAccuracyValue = RandomNumber(0, 100);
    console.log(PlayerAccuracyValue + " <-- Player attack accuracy value");
    console.log(NPCDodgeRate + " <-- NPC dodge rate");

    if (PlayerAccuracyValue<=NPCDodgeRate) {
        console.log("Player misses!!!!");
        return false;
    } else {return true;}
}

function PlayerMagicAttackCalc() {
    if (PlayerMagicPoints<=0) {
        disButtonMagicAttk="disabled"
    } else {

    }
}

function InitiateAttack(AttackType) {
    if (PlayerHealth ==0 || NPCHealth ==0) {disButtonAttk = "disabled";}
    
    else {
        console.log("########## Start Of Turn ##########");

        if (DoesThePlayerHitCalc()==true) {
            if (AttackType=="basic") {
                PlayerAttackCalc();
                NPCHealth -=PlayerBaseAttack;
                console.log("Player hits NPC for " + PlayerBaseAttack + "HP");
            } else if (AttackType=="magic") {
                console.log("Magic attak pending.")
            }

        }

        if (NPCHealth<=0) {
            NPCHealth=0;
            thisIsTheWinner="You Win!";
        }

        if (DoesTheNPCHitCalc()==true) {
            NPCAttackCalc();
            PlayerHealth -=NPCBaseAttack;
            console.log("NPC hits Player for " + NPCBaseAttack + "HP");
        }

        if (PlayerHealth<=0) {
            PlayerHealth=0;
            thisIsTheWinner="You Lost!";
        }

    }

    console.log("########## END OF TURN ##########");
    updateView();
}