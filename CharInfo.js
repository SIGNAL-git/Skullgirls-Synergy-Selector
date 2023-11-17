// Avert your eyes, programmers!
// Shoddy amateur work ahead!

// Character shorthands
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
    BDahl: "Black Dahlia",
    Mary: "Marie"
}

// Character constructor
function character(charName, fighterFavs, fighterGoods, fighterDecents, fighterPoors) {
    this.charName = charName;
    this.fighterFavs = fighterFavs;
    this.fighterGoods = fighterGoods;
    this.fighterDecents = fighterDecents;
    this.fighterPoors = fighterPoors;
}

// List of characters
// I hope you brought your collapsibles
const characterList = {
    "None": 0,

    "Wulf": char1 = new character(
        c.Wulf,
        [c.BBand, c.Rob, c.Umbrella],
        [c.Bella, c.Double, c.Liz, c.Fukua, c.Soul, c.Squig, c.Anne, c.BDahl],
        [c.Fil, c.Pain, c.Peak, c.Val],
        [c.Fortune]
    ),

    "BBand": char2 = new character(
        c.BBand,
        [c.Double, c.Pain, c.Soul, c.Rob, c.Squig, c.Anne],
        [c.Wulf, c.Bella, c.Liz, c.Fil, c.Fukua, c.Peak, c.Val, c.Umbrella, c.BDahl],
        [],
        [c.Fortune]
    ),

    "Bella": char3 = new character(
        c.Bella,
        [c.BBand, c.Double, c.Rob],
        [c.Liz, c.Fil, c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Val, c.Umbrella, c.Anne, c.BDahl],
        [c.Wulf],
        [c.Fortune]
    ),

    "Double": char4 = new character(
        c.Double,
        [c.BBand, c.Liz, c.Fukua, c.Soul, c.Rob],
        [c.Wulf, c.Bella, c.Fil, c.Pain, c.Peak, c.Squig, c.Val, c.Umbrella, c.Anne, c.BDahl],
        [c.Fortune],
        []
    ),

    "Liz": char5 = new character(
        c.Liz,
        [c.BBand, c.Double, c.Fukua, c.Rob, c.Squig],
        [c.Bella, c.Fil, c.Soul, c.Peak, c.Anne],
        [c.Wulf, c.Fortune, c.Pain, c.Umbrella, c.BDahl],
        [c.Val]
    ),

    "Fil": char6 = new character(
        c.Fil,
        [c.BBand, c.Bella, c.Double, c.Liz, c.Rob],
        [c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Umbrella, c.Anne],
        [c.Wulf, c.BDahl],
        [c.Fortune, c.Val]
    ),

    "Fortune": char7 = new character(
        c.Fortune,
        [c.BBand, c.Bella, c.Double, c.Liz, c.Soul, c.Rob, c.Squig, c.Umbrella, c.Anne],
        [c.Fil, c.Fukua, c.Pain, c.Peak],
        [c.Wulf, c.Val, c.BDahl],
        []
    ),

    "Fukua": char8 = new character(
        c.Fukua,
        [c.BBand, c.Bella, c.Double, c.Pain, c.Rob, c.Umbrella, c.Anne],
        [c.Liz, c.Fil, c.Soul, c.Peak, c.Squig, c.BDahl],
        [c.Wulf, c.Val],
        [c.Fortune]
    ),

    "Pain": char9 = new character(
        c.Pain,
        [c.BBand, c.Bella, c.Double, c.Rob],
        [c.Fil, c.Fortune, c.Fukua, c.Soul, c.Peak, c.Umbrella, c.Anne, c.BDahl],
        [c.Wulf, c.Liz, c.Squig],
        [c.Val]
    ),

    "Soul": char10 = new character(
        c.Soul,
        [c.BBand, c.Bella, c.Double, c.Fukua, c.Pain, c.Rob],
        [c.Liz, c.Fil, c.Peak, c.Squig, c.Umbrella, c.Anne, c.BDahl],
        [c.Wulf, c.Fortune],
        [c.Val]
    ),

    "Peak": char11 = new character(
        c.Peak,
        [c.BBand, c.Bella, c.Double, c.Fil, c.Rob, c.Umbrella, c.Anne],
        [c.Wulf, c.Liz, c.Fukua, c.Pain, c.Soul, c.Squig, c.BDahl],
        [c.Fortune],
        [c.Val]
    ),

    "Rob": char12 = new character(
        c.Rob,
        [c.BBand, c.Double, c.Liz, c.Fil, c.Umbrella, c.Anne],
        [c.Wulf, c.Bella, c.Fortune, c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Val, c.BDahl],
        [],
        []
    ),

    "Squig": char13 = new character(
        c.Squig,
        [c.BBand, c.Rob],
        [c.Wulf, c.Bella, c.Double, c.Liz, c.Fil, c.Fukua, c.Soul, c.Peak, c.Val, c.Umbrella, c.Anne],
        [c.Fortune, c.Pain, c.BDahl],
        []
    ),

    "Val": char14 = new character(
        c.Val,
        [c.BBand, c.Bella, c.Double, c.Rob],
        [c.Liz, c.Fil, c.Fukua, c.Soul, c.Squig, c.Umbrella, c.Anne, c.BDahl],
        [c.Wulf, c.Peak],
        [c.Fortune, c.Pain]
    ),

    "Anne": char15 = new character(
        c.Anne,
        [c.BBand, c.Rob],
        [c.Wulf, c.Bella, c.Double, c.Liz, c.Fil, c.Fukua, c.Soul, c.Peak, c.Squig, c.Umbrella, c.BDahl],
        [c.Fortune, c.Pain, c.Val],
        []
    ),

    "Umbrella": char16 = new character(
        c.Umbrella,
        [c.BBand, c.Fil, c.Rob],
        [c.Bella, c.Double, c.Liz, c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Anne],
        [c.Wulf, c.Fortune, c.BDahl],
        [c.Val]
    ),

    "BDahl": char17 = new character(
        c.BDahl,
        [c.BBand, c.Bella, c.Anne],
        [c.Double, c.Liz, c.Fil, c.Fukua, c.Pain, c.Peak, c.Rob, c.Squig],
        [c.Wulf, c.Fortune, c.Soul, c.Val, c.Umbrella],
        []
    )

    /*
    "Marie": char18 = new character(
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

/**
 * Checks the status of an other character as an assist to the current one.
 * @param {character} assist Character to be compared to
 * @returns {string} Synergy status
 */
character.prototype.getSynergyWith = function(assist) {
    switch (true)
    {
        case this.fighterFavs.includes(assist.charName):
            return "Favourite";

        case this.fighterGoods.includes(assist.charName):
            return "Good";

        case this.fighterDecents.includes(assist.charName):
            return "Decent";

        case this.fighterPoors.includes(assist.charName):
            return "Poor";

        case this.charName == assist.charName:
            return "Itself";

        default:
            return "Unset Synergy, contact the developer!";
    }
}

/**
 * Returns the synergies for the associated character, given its assists
 * @param {character} assist1 
 * @param {character} assist2 
 */
character.prototype.synergyWith = function(assist1, assist2)
{
    let synergy = "";

    if (this) // Check synergies if a character is selected
    {
        if (assist1)
        {
            synergy += `<br>${this.charName} with ${assist1.charName} assist: ${this.getSynergyWith(assist1)}`;
            
        }
        if (assist2)
        {
            synergy += `<br>${this.charName} with ${assist2.charName} assist: ${this.getSynergyWith(assist2)}`;
        }

        return `<br> Synergies: ${synergy}`;
    }
    else
    {
        return ``;
    }
}

/**
 * Remove all text and image synergies
 */
const outputs = document.getElementsByClassName("output");
const images = document.getElementsByTagName("img");
function clearAll()
{
    for (let i = 0; i < outputs.length; i++)
    {
        outputs[i].style.display = "none";
    }
    for (let i = 0; i < images.length; i++)
    {
        images[i].style.visibility = "hidden";
    }
}

clearAll();

function showAllSynergies()
{
    clearAll();

    select1 = characterList[document.getElementById("Fighter1In").value];
    select2 = characterList[document.getElementById("Fighter2In").value];
    select3 = characterList[document.getElementById("Fighter3In").value];

    // Fighter outputs and fighter images
    if (select1)
    {
        document.getElementById("Fighter1").src = `Portraits/${select1.charName}.jpg`;
        document.getElementById("Fighter1").style.visibility = "visible";
        document.getElementById("Fighter1Out").innerHTML = `<br> Fighter: ${select1.charName}`;
        document.getElementById("Synergy1Out").innerHTML = select1.synergyWith(select2, select3);
        document.getElementById("Fighter1Out").style.display = "inline";
        document.getElementById("Synergy1Out").style.display = "inline";
    }
    if (select2)
    {
        document.getElementById("Fighter2").src = `Portraits/${select2.charName}.jpg`;
        document.getElementById("Fighter2").style.visibility = "visible";
        document.getElementById("Fighter2Out").innerHTML = `<br><br> Fighter: ${select2.charName}`;
        document.getElementById("Synergy2Out").innerHTML = select2.synergyWith(select1, select3);
        document.getElementById("Fighter2Out").style.display = "inline";
        document.getElementById("Synergy2Out").style.display = "inline";
    }
    if (select3)
    {
        document.getElementById("Fighter3").src = `Portraits/${select3.charName}.jpg`;
        document.getElementById("Fighter3").style.visibility = "visible";
        document.getElementById("Fighter3Out").innerHTML = `<br><br> Fighter: ${select3.charName}`;
        document.getElementById("Synergy3Out").innerHTML = select3.synergyWith(select1, select2);
        document.getElementById("Fighter3Out").style.display = "inline";
        document.getElementById("Synergy3Out").style.display = "inline";
    }

    // Arrow images
    if (select1 && select2 && (select1 != select2))
    {
        document.getElementById("Synergy1With2").style.visibility = "visible";
        document.getElementById("Synergy1With2").src = `Arrows/${select1.getSynergyWith(select2)}SW.png`;
        document.getElementById("Synergy2With1").style.visibility = "visible";
        document.getElementById("Synergy2With1").src = `Arrows/${select2.getSynergyWith(select1)}NE.png`;
    }
    if (select2 && select3 && (select2 != select3))
    {
        document.getElementById("Synergy2With3").style.visibility = "visible";
        document.getElementById("Synergy3With2").src = `Arrows/${select3.getSynergyWith(select2)}SW.png`;
        document.getElementById("Synergy3With2").style.visibility = "visible";
        document.getElementById("Synergy2With3").src = `Arrows/${select2.getSynergyWith(select3)}NE.png`;
    }
    if (select1 && select3 && (select1 != select3))
    {
        document.getElementById("Synergy1With3").style.visibility = "visible";
        document.getElementById("Synergy3With1").src = `Arrows/${select3.getSynergyWith(select1)}SW.png`;
        document.getElementById("Synergy3With1").style.visibility = "visible";
        document.getElementById("Synergy1With3").src = `Arrows/${select1.getSynergyWith(select3)}NE.png`;
    }
}