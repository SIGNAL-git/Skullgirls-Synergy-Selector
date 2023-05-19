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

const char1 = new newCharacter(
    c.Wulf,
    [c.BBand, c.Rob, c.Umbrella],
    [c.Bella, c.Double, c.Liz, c.Fukua, c.Soul, c.Squig, c.Anne],
    [c.Fil, c.Pain, c.Peak, c.Val],
    []
);

const char2 = new newCharacter(
    c.BBand,
    [c.Double, c.Pain, c.Soul, c.Rob, c.Squig, c.Anne],
    [c.Wulf, c.Bella, c.Liz, c.Fil, c.Fukua, c.Peak, c.Val, c.Umbrella],
    [],
    [c.Fortune]
);

const char3 = new newCharacter(
    c.Bella,
    [c.BBand, c.Double, c.Rob],
    [c.Liz, c.Fil, c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Val, c.Umbrella, c.Anne],
    [c.Wulf],
    [c.Fortune]
);

const char4 = new newCharacter(
    c.Double,
    [c.BBand, c.Liz, c.Fukua, c.Soul, c.Rob],
    [c.Wulf, c.Bella, c.Fil, c.Pain, c.Peak, c.Squig, c.Val, c.Umbrella, c.Anne],
    [c.Fortune],
    []
);

const char5 = new newCharacter(
    c.Liz,
    [c.BBand, c.Double, c.Fukua, c.Rob, c.Squig],
    [c.Bella, c.Fil, c.Soul, c.Peak, c.Anne],
    [c.Wulf, c.Fortune, c.Pain, c.Umbrella],
    [c.Val]
);

const char6 = new newCharacter(
    c.Fil,
    [c.BBand, c.Bella, c.Double, c.Liz, c.Rob],
    [c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Umbrella, c.Anne],
    [c.Wulf],
    [c.Fortune, c.Val]
);

const char7 = new newCharacter(
    c.Fortune,
    [c.BBand, c.Bella, c.Double, c.Liz, c.Soul, c.Rob, c.Squig, c.Umbrella, c.Anne],
    [c.Fil, c.Fukua, c.Pain, c.Peak],
    [c.Wulf, c.Val],
    []
);

const char8 = new newCharacter(
    c.Fukua,
    [c.BBand, c.Bella, c.Double, c.Pain, c.Rob, c.Umbrella, c.Anne],
    [c.Liz, c.Fil, c.Soul, c.Peak, c.Squig],
    [c.Wulf, c.Val],
    [c.Fortune]
);

const char9 = new newCharacter(
    c.Pain,
    [c.BBand, c.Bella, c.Double, c.Rob],
    [c.Fil, c.Fortune, c.Fukua, c.Soul, c.Peak, c.Umbrella, c.Anne],
    [c.Wulf, c.Liz, c.Squig],
    [c.Val]
);

const char10 = new newCharacter(
    c.Soul,
    [c.BBand, c.Bella, c.Double, c.Fukua, c.Pain, c.Rob],
    [c.Liz, c.Fil, c.Peak, c.Squig, c.Umbrella, c.Anne],
    [c.Wulf, c.Fortune],
    [c.Val]
);

const char11 = new newCharacter(
    c.Peak,
    [c.BBand, c.Bella, c.Double, c.Fil, c.Rob, c.Umbrella, c.Anne],
    [c.Wulf, c.Liz, c.Fukua, c.Pain, c.Soul, c.Squig],
    [c.Fortune],
    [c.Val]
);

const char12 = new newCharacter(
    c.Rob,
    [c.BBand, c.Double, c.Liz, c.Fil, c.Umbrella, c.Anne],
    [c.Wulf, c.Bella, c.Fortune, c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Val],
    [],
    []
);

const char13 = new newCharacter(
    c.Squig,
    [c.BBand, c.Rob],
    [c.Wulf, c.Bella, c.Double, c.Liz, c.Fil, c.Fukua, c.Soul, c.Peak, c.Val, c.Umbrella, c.Anne],
    [c.Fortune, c.Pain],
    []
);

const char14 = new newCharacter(
    c.Val,
    [c.BBand, c.Bella, c.Double, c.Rob],
    [c.Liz, c.Fil, c.Fukua, c.Soul, c.Squig, c.Umbrella, c.Anne],
    [c.Wulf, c.Peak],
    [c.Fortune, c.Pain]
);

const char15 = new newCharacter(
    c.Anne,
    [c.BBand, c.Rob],
    [c.Wulf, c.Bella, c.Double, c.Liz, c.Fil, c.Fukua, c.Soul, c.Peak, c.Squig, c.Umbrella],
    [c.Fortune, c.Pain, c.Val],
    []
);

const char16 = new newCharacter(
    c.Umbrella,
    [c.BBand, c.Fil, c.Rob],
    [c.Bella, c.Double, c.Liz, c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Anne],
    [c.Wulf, c.Fortune],
    [c.Val]
);

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

const characterList = [char1, char2, char3, char4, char5, char6, char7, char8, char9, char10, char11, char12, char13, char14, char15, char16];

let select1 = undefined;
let select2 = undefined;

function showSynergy()
{
    select1 = characterList[document.getElementById("FighterIn").value - 1];
    select2 = characterList[document.getElementById("AssistIn").value - 1];

    console.log(select1);
    console.log(select2);

    if (select1 != undefined && select2 != undefined)
    {
        document.getElementById("FighterOut").innerHTML = `Fighter: ${select1.charName}`;
        document.getElementById("AssistOut").innerHTML = `Assist: ${select2.charName}`;
        document.getElementById("SynergyOut").innerHTML = `Synergy: ${select1.synergyWith(select2)}`;
    }
}