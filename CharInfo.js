// Avert your eyes, programmers!
// Shoddy amateur work ahead!

const c = {
    Wulf: "Beowulf",
    BBand: "Big Band",
    Bella: "Cerebella",
    Double: "Double",
    Liz: "Eliza",
    Fil: "Filia",
    Fortune: "Ms. Fortune",
    Fukua: "Fukua",
    Pain: "Painwheel",
    Soul: "Parasoul",
    Peak: "Peacock",
    Rob: "Robo Fortune",
    Squig: "Squigly",
    Val: "Valentine",
    Anne: "Annie",
    Umbrella: "Umbrella",
    BDahl: "Black Dahlia"
}

function newCharacter(charName, fighterFavs, fighterGoods, fighterDecents, fighterPoors) {
    this.charName = charName;
    this.fighterFavs = fighterFavs;
    this.fighterGoods = fighterGoods;
    this.fighterDecents = fighterDecents;
    this.fighterPoors = fighterPoors;
}

newCharacter.prototype.synergyWith = function(otherChar) {
    if (this.fighterFavs.includes(otherChar.charName))
    {
        return "Favourite";
    }
    else if (this.fighterGoods.includes(otherChar.charName))
    {
        return "Good";
    }
    else if (this.fighterDecents.includes(otherChar.charName))
    {
        return "Decent";
    }
    else if (this.fighterPoors.includes(otherChar.charName))
    {
        return "Poor";
    }
    else if (this.charName == otherChar.charName)
    {
        return "Itself";
    }
    else
    {
        return "Unset Synergy, contact the developer!";
    }
}


const characterList = {
    "None": 0,

    "Wulf": char1 = new newCharacter(
        c.Wulf,
        [c.BBand, c.Rob, c.Umbrella],
        [c.Bella, c.Double, c.Liz, c.Fukua, c.Soul, c.Squig, c.Anne],
        [c.Fil, c.Pain, c.Peak, c.Val],
        [c.Fortune]
    ),

    "BBand": char2 = new newCharacter(
        c.BBand,
        [c.Double, c.Pain, c.Soul, c.Rob, c.Squig, c.Anne],
        [c.Wulf, c.Bella, c.Liz, c.Fil, c.Fukua, c.Peak, c.Val, c.Umbrella],
        [],
        [c.Fortune]
    ),

    "Bella": char3 = new newCharacter(
        c.Bella,
        [c.BBand, c.Double, c.Rob],
        [c.Liz, c.Fil, c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Val, c.Umbrella, c.Anne],
        [c.Wulf],
        [c.Fortune]
    ),

    "Double": char4 = new newCharacter(
        c.Double,
        [c.BBand, c.Liz, c.Fukua, c.Soul, c.Rob],
        [c.Wulf, c.Bella, c.Fil, c.Pain, c.Peak, c.Squig, c.Val, c.Umbrella, c.Anne],
        [c.Fortune],
        []
    ),

    "Liz": char5 = new newCharacter(
        c.Liz,
        [c.BBand, c.Double, c.Fukua, c.Rob, c.Squig],
        [c.Bella, c.Fil, c.Soul, c.Peak, c.Anne],
        [c.Wulf, c.Fortune, c.Pain, c.Umbrella],
        [c.Val]
    ),

    "Fil": char6 = new newCharacter(
        c.Fil,
        [c.BBand, c.Bella, c.Double, c.Liz, c.Rob],
        [c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Umbrella, c.Anne],
        [c.Wulf],
        [c.Fortune, c.Val]
    ),

    "Fortune": char7 = new newCharacter(
        c.Fortune,
        [c.BBand, c.Bella, c.Double, c.Liz, c.Soul, c.Rob, c.Squig, c.Umbrella, c.Anne],
        [c.Fil, c.Fukua, c.Pain, c.Peak],
        [c.Wulf, c.Val],
        []
    ),

    "Fukua": char8 = new newCharacter(
        c.Fukua,
        [c.BBand, c.Bella, c.Double, c.Pain, c.Rob, c.Umbrella, c.Anne],
        [c.Liz, c.Fil, c.Soul, c.Peak, c.Squig],
        [c.Wulf, c.Val],
        [c.Fortune]
    ),

    "Pain": char9 = new newCharacter(
        c.Pain,
        [c.BBand, c.Bella, c.Double, c.Rob],
        [c.Fil, c.Fortune, c.Fukua, c.Soul, c.Peak, c.Umbrella, c.Anne],
        [c.Wulf, c.Liz, c.Squig],
        [c.Val]
    ),

    "Soul": char10 = new newCharacter(
        c.Soul,
        [c.BBand, c.Bella, c.Double, c.Fukua, c.Pain, c.Rob],
        [c.Liz, c.Fil, c.Peak, c.Squig, c.Umbrella, c.Anne],
        [c.Wulf, c.Fortune],
        [c.Val]
    ),

    "Peak": char11 = new newCharacter(
        c.Peak,
        [c.BBand, c.Bella, c.Double, c.Fil, c.Rob, c.Umbrella, c.Anne],
        [c.Wulf, c.Liz, c.Fukua, c.Pain, c.Soul, c.Squig],
        [c.Fortune],
        [c.Val]
    ),

    "Rob": char12 = new newCharacter(
        c.Rob,
        [c.BBand, c.Double, c.Liz, c.Fil, c.Umbrella, c.Anne],
        [c.Wulf, c.Bella, c.Fortune, c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Val],
        [],
        []
    ),

    "Squig": char13 = new newCharacter(
        c.Squig,
        [c.BBand, c.Rob],
        [c.Wulf, c.Bella, c.Double, c.Liz, c.Fil, c.Fukua, c.Soul, c.Peak, c.Val, c.Umbrella, c.Anne],
        [c.Fortune, c.Pain],
        []
    ),

    "Val": char14 = new newCharacter(
        c.Val,
        [c.BBand, c.Bella, c.Double, c.Rob],
        [c.Liz, c.Fil, c.Fukua, c.Soul, c.Squig, c.Umbrella, c.Anne],
        [c.Wulf, c.Peak],
        [c.Fortune, c.Pain]
    ),

    "Anne": char15 = new newCharacter(
        c.Anne,
        [c.BBand, c.Rob],
        [c.Wulf, c.Bella, c.Double, c.Liz, c.Fil, c.Fukua, c.Soul, c.Peak, c.Squig, c.Umbrella],
        [c.Fortune, c.Pain, c.Val],
        []
    ),

    "Umbrella": char16 = new newCharacter(
        c.Umbrella,
        [c.BBand, c.Fil, c.Rob],
        [c.Bella, c.Double, c.Liz, c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Anne],
        [c.Wulf, c.Fortune],
        [c.Val]
    )

    /*
    const char17 = new newCharacter(
        "Black Dahlia",
        [""],
        [""],
        [""],
        [""]
    )
    */

    /*
    const char18 = new newCharacter(
        "Marie",
        [""],
        [""],
        [""],
        [""]
    )
    */
}

let select1 = null;
let select2 = null;
let select3 = null;

function showSynergy()
{
    select1 = characterList[document.getElementById("Fighter1In").value];
    select2 = characterList[document.getElementById("Fighter2In").value];
    select3 = characterList[document.getElementById("Fighter3In").value];


    document.getElementById("Fighter1").src = `Portraits/${select1.charName}.jpg`;
    document.getElementById("Fighter2").src = `Portraits/${select2.charName}.jpg`;
    document.getElementById("Fighter3").src = `Portraits/${select3.charName}.jpg`;

    document.getElementById("Fighter1Out").innerHTML = `Fighter: ${select1.charName}`;
    document.getElementById("Fighter2Out").innerHTML = `Fighter: ${select2.charName}`;
    document.getElementById("Fighter3Out").innerHTML = `Fighter: ${select3.charName}`;

    let synergy1 = "";
    let synergy2 = "";
    let synergy3 = "";

    if (select1)
    {
        if (select2)
        {
            synergy1 += `<br>${select1.charName} with ${select2.charName} assist: ${select1.synergyWith(select2)}`;
            document.getElementById("Synergy1With2").src = `Arrows/${select1.synergyWith(select2)}SW.png`;
        }
        if (select3)
        {
            synergy1 += `<br>${select1.charName} with ${select3.charName} assist: ${select1.synergyWith(select3)}`;
            document.getElementById("Synergy1With3").src = `Arrows/${select1.synergyWith(select3)}NE.png`;
        }
        document.getElementById("Synergy1Out").innerHTML = `Synergies: ${synergy1}`;
    }
    else
    {
        document.getElementById("Fighter1Out").innerHTML = ``;
        document.getElementById("Synergy1Out").innerHTML = ``;
        document.getElementById("Fighter1").src = `Arrows/ItselfNE.png`;
        document.getElementById("Synergy1With2").src = `Arrows/ItselfSW.png`;
        document.getElementById("Synergy2With1").src = `Arrows/ItselfNE.png`;
        document.getElementById("Synergy1With3").src = `Arrows/ItselfNE.png`;
        document.getElementById("Synergy3With1").src = `Arrows/ItselfSW.png`;
    }

    if (select2)
    {
        if (select1)
        {
            synergy2 += `<br>${select2.charName} with ${select1.charName} assist: ${select2.synergyWith(select1)}`;
            document.getElementById("Synergy2With1").src = `Arrows/${select2.synergyWith(select1)}NE.png`;
        }
        if (select3)
        {
            synergy2 += `<br>${select2.charName} with ${select3.charName} assist: ${select2.synergyWith(select3)}`;
            document.getElementById("Synergy2With3").src = `Arrows/${select2.synergyWith(select3)}NE.png`;
        }
        document.getElementById("Synergy2Out").innerHTML = `Synergies: ${synergy2}`;
    }
    else
    {
        document.getElementById("Fighter2Out").innerHTML = ``;
        document.getElementById("Synergy2Out").innerHTML = ``;
        document.getElementById("Fighter2").src = `Arrows/ItselfNE.png`;
        document.getElementById("Synergy2With1").src = `Arrows/ItselfNE.png`;
        document.getElementById("Synergy2With3").src = `Arrows/ItselfNE.png`;
        document.getElementById("Synergy1With2").src = `Arrows/ItselfSW.png`;
        document.getElementById("Synergy3With2").src = `Arrows/ItselfSW.png`;
    }

    if (select3)
    {
        if (select1)
        {
            synergy3 += `<br>${select3.charName} with ${select1.charName} assist: ${select3.synergyWith(select1)}`;
            document.getElementById("Synergy3With1").src = `Arrows/${select3.synergyWith(select1)}SW.png`;
        }
        if (select2)
        {
            synergy3 += `<br>${select3.charName} with ${select2.charName} assist: ${select3.synergyWith(select2)}`;
            document.getElementById("Synergy3With2").src = `Arrows/${select3.synergyWith(select2)}SW.png`;
        }
        document.getElementById("Synergy3Out").innerHTML = `Synergies: ${synergy3}`;
    }
    else
    {
        document.getElementById("Fighter3Out").innerHTML = ``;
        document.getElementById("Synergy3Out").innerHTML = ``;
        document.getElementById("Fighter3").src = `Arrows/ItselfNE.png`;
        document.getElementById("Synergy3With1").src = `Arrows/ItselfSW.png`;
        document.getElementById("Synergy3With2").src = `Arrows/ItselfSW.png`;
        document.getElementById("Synergy1With3").src = `Arrows/ItselfNE.png`;
        document.getElementById("Synergy2With3").src = `Arrows/ItselfNE.png`;
    }

}