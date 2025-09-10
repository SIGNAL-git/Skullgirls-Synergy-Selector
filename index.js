const selectedSkullgirls = [null, null, null];

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
    Mari: "Marie"
}

// Character constructor
class character {
    constructor(charName, fighterFavs, fighterGoods, fighterDecents, fighterPoors) {
        this.charName = charName;
        this.fighterFavs = fighterFavs;
        this.fighterGoods = fighterGoods;
        this.fighterDecents = fighterDecents;
        this.fighterPoors = fighterPoors;
    }
}

// List of characters
// I hope you brought your collapsibles
const characterList = {
    "Beowulf": char1 = new character(
        c.Wulf,
        [c.BBand, c.Rob, c.Umbrella],
        [c.Bella, c.Double, c.Liz, c.Fukua, c.Soul, c.Squig, c.Anne, c.BDahl, c.Mari],
        [c.Fil, c.Pain, c.Peak, c.Val],
        [c.Fortune]
    ),

    "Big Band": char2 = new character(
        c.BBand,
        [c.Double, c.Pain, c.Soul, c.Rob, c.Squig, c.Anne],
        [c.Wulf, c.Bella, c.Liz, c.Fil, c.Fukua, c.Peak, c.Val, c.Umbrella, c.BDahl, c.Mari],
        [],
        [c.Fortune]
    ),

    "Cerebella": char3 = new character(
        c.Bella,
        [c.BBand, c.Double, c.Rob],
        [c.Liz, c.Fil, c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Val, c.Umbrella, c.Anne, c.BDahl, c.Mari],
        [c.Wulf],
        [c.Fortune]
    ),

    "Double": char4 = new character(
        c.Double,
        [c.BBand, c.Liz, c.Fukua, c.Soul, c.Rob],
        [c.Wulf, c.Bella, c.Fil, c.Pain, c.Peak, c.Squig, c.Val, c.Umbrella, c.Anne, c.BDahl, c.Mari],
        [c.Fortune],
        []
    ),

    "Eliza": char5 = new character(
        c.Liz,
        [c.BBand, c.Double, c.Fukua, c.Rob, c.Squig],
        [c.Bella, c.Fil, c.Soul, c.Peak, c.Anne, c.Mari],
        [c.Wulf, c.Fortune, c.Pain, c.Umbrella, c.BDahl],
        [c.Val]
    ),

    "Filia": char6 = new character(
        c.Fil,
        [c.BBand, c.Bella, c.Double, c.Liz, c.Rob],
        [c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Umbrella, c.Anne, c.Mari],
        [c.Wulf, c.BDahl],
        [c.Fortune, c.Val]
    ),

    "Ms. Fortune": char7 = new character(
        c.Fortune,
        [c.BBand, c.Bella, c.Double, c.Liz, c.Soul, c.Rob, c.Squig, c.Umbrella, c.Anne],
        [c.Fil, c.Fukua, c.Pain, c.Peak, c.Mari],
        [c.Wulf, c.Val, c.BDahl],
        []
    ),

    "Fukua": char8 = new character(
        c.Fukua,
        [c.BBand, c.Bella, c.Double, c.Pain, c.Rob, c.Umbrella, c.Anne],
        [c.Liz, c.Fil, c.Soul, c.Peak, c.Squig, c.BDahl, c.Mari],
        [c.Wulf, c.Val],
        [c.Fortune]
    ),

    "Painwheel": char9 = new character(
        c.Pain,
        [c.BBand, c.Bella, c.Double, c.Rob],
        [c.Fil, c.Fortune, c.Fukua, c.Soul, c.Peak, c.Umbrella, c.Anne, c.BDahl, c.Mari],
        [c.Wulf, c.Liz, c.Squig],
        [c.Val]
    ),

    "Parasoul": char10 = new character(
        c.Soul,
        [c.BBand, c.Bella, c.Double, c.Fukua, c.Pain, c.Rob],
        [c.Liz, c.Fil, c.Peak, c.Squig, c.Umbrella, c.Anne, c.BDahl, c.Mari],
        [c.Wulf, c.Fortune],
        [c.Val]
    ),

    "Peacock": char11 = new character(
        c.Peak,
        [c.BBand, c.Bella, c.Double, c.Fil, c.Rob, c.Umbrella, c.Anne],
        [c.Wulf, c.Liz, c.Fukua, c.Pain, c.Soul, c.Squig, c.BDahl, c.Mari],
        [c.Fortune],
        [c.Val]
    ),

    "Robo Fortune": char12 = new character(
        c.Rob,
        [c.BBand, c.Double, c.Liz, c.Fil, c.Umbrella, c.Anne],
        [c.Wulf, c.Bella, c.Fortune, c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Val, c.BDahl, c.Mari],
        [],
        []
    ),

    "Squigly": char13 = new character(
        c.Squig,
        [c.BBand, c.Rob],
        [c.Wulf, c.Bella, c.Double, c.Liz, c.Fil, c.Fukua, c.Soul, c.Peak, c.Val, c.Umbrella, c.Anne, c.Mari],
        [c.Fortune, c.Pain, c.BDahl],
        []
    ),

    "Valentine": char14 = new character(
        c.Val,
        [c.BBand, c.Bella, c.Double, c.Rob],
        [c.Liz, c.Fil, c.Fukua, c.Soul, c.Squig, c.Umbrella, c.Anne, c.BDahl, c.Mari],
        [c.Wulf, c.Peak],
        [c.Fortune, c.Pain]
    ),

    "Annie": char15 = new character(
        c.Anne,
        [c.BBand, c.Rob],
        [c.Wulf, c.Bella, c.Double, c.Liz, c.Fil, c.Fukua, c.Soul, c.Peak, c.Squig, c.Umbrella, c.BDahl, c.Mari],
        [c.Fortune, c.Pain, c.Val],
        []
    ),

    "Umbrella": char16 = new character(
        c.Umbrella,
        [c.BBand, c.Fil, c.Rob],
        [c.Bella, c.Double, c.Liz, c.Fukua, c.Pain, c.Soul, c.Peak, c.Squig, c.Anne, c.Mari],
        [c.Wulf, c.Fortune, c.BDahl],
        [c.Val]
    ),

    "Black Dahlia": char17 = new character(
        c.BDahl,
        [c.BBand, c.Bella, c.Anne],
        [c.Double, c.Liz, c.Fil, c.Fukua, c.Pain, c.Peak, c.Rob, c.Squig, c.Mari],
        [c.Wulf, c.Fortune, c.Soul, c.Val, c.Umbrella],
        []
    ),

    "Marie": char18 = new character(
        "Marie",
        [c.BBand],
        [c.Anne, c.Wulf, c.BDahl, c.Bella, c.Double, c.Liz, c.Fil, c.Fukua, c.Soul, c.Rob, c.Squig, c.Umbrella],
        [c.Fortune, c.Pain, c.Peak],
        [c.Val]
    )
}

function loadSkullgirls()
{
    const characterArray = Object.values(characterList);
    const characterDiv = document.getElementById("characters");
    characterArray.forEach(character => {
        const element = document.createElement("img");
        element.setAttribute('src', "Portraits\\" + character.charName + ".jpg");
        element.setAttribute('onclick', `assignSkullgirl("${character.charName}")`);
        element.setAttribute('class', "clickable");
        characterDiv.appendChild(element);
    });
}

/**
 * Adds a skullgirl to the selection list if it hasn't been selected yet
 * Replaces last skullgirl on the list if list is full
 * @param {character} newSkullgirlName 
 */
function assignSkullgirl(newSkullgirlName)
{
    let newSkullgirl = characterList[newSkullgirlName];
    console.log(newSkullgirl);
    if (!isAlreadyAdded(newSkullgirl))
    {
        console.log("Searching");
        for (let i = 0; i < selectedSkullgirls.length; i++)
        {
            if (selectedSkullgirls[i] == null)
            {
                console.log("Added");
                selectedSkullgirls[i] = newSkullgirl;
                break;
            }
            if (i == selectedSkullgirls.length-1)
            {
                console.log("Replaced last");
                selectedSkullgirls[i] = newSkullgirl;
                break;
            }
        }
    }
    updateDisplay();
}

function removeSkullgirl(id)
{
    console.log(selectedSkullgirls[id]);
    selectedSkullgirls[id] = null; // Remove skullgirl
    for (let i = 0; i < selectedSkullgirls.length; i++)
    {
        if (selectedSkullgirls[i] == null && i != 2)
        {
            console.log("Moved Skullgirl");
            console.log("Replacing " + selectedSkullgirls[i] + " with " + selectedSkullgirls[i+1]);
            selectedSkullgirls[i] = selectedSkullgirls[i+1];
            selectedSkullgirls[i+1] = null;
        }
    }
    updateDisplay();
}

function updateDisplay()
{
    console.log(selectedSkullgirls);
    updateSelected();
    updateRelations();
}

function updateSelected()
{
    for (let i = 0; i < selectedSkullgirls.length; i++)
    {
        if (selectedSkullgirls[i] != null)
        {
            document.getElementById('skullgirl'+i).src = "Portraits\\" + selectedSkullgirls[i].charName + ".jpg";
            document.getElementById('skullgirl'+i).hidden = false;
            if (i == 2)
            {
                document.getElementById('skullgirl'+3).src = "Portraits\\" + selectedSkullgirls[0].charName + ".jpg";
                document.getElementById('skullgirl'+3).hidden = false;
            }
        }
        else
        {
            document.getElementById('skullgirl'+i).hidden = true;
            if (i == 2)
            {
                document.getElementById('skullgirl'+3).hidden = true;
            }
        }
    }
}

function updateRelations()
{
    updateArrow(document.getElementById("relationship0a"), selectedSkullgirls[0], selectedSkullgirls[1]);
    updateArrow(document.getElementById("relationship0b"), selectedSkullgirls[1], selectedSkullgirls[0]);

    updateArrow(document.getElementById("relationship1a"), selectedSkullgirls[1], selectedSkullgirls[2]);
    updateArrow(document.getElementById("relationship1b"), selectedSkullgirls[2], selectedSkullgirls[1]);

    updateArrow(document.getElementById("relationship2a"), selectedSkullgirls[2], selectedSkullgirls[0]);
    updateArrow(document.getElementById("relationship2b"), selectedSkullgirls[0], selectedSkullgirls[2]);
}

function updateArrow(elementId, main, support)
{
    console.log("Updating arrow");
    if (main == null || support == null)
    {
        elementId.hidden = true;
        console.log("Missing skullgirl; hid relationship");
    }
    else
    {
        elementId.setAttribute('src', `Arrows\\Arrow${getRelationshipTo(main, support)}.png`);
        elementId.hidden = false;
        console.log(`Relationship between ${main.charName} and ${support.charName}:
            ${getRelationshipTo(main, support)}`);
    }
}

/**
 * Checks if a given skullgirl has already been selected
 * @param {character} newSkullgirl 
 * @returns true if skullgirl is in selection list, false otherwise
 */
function isAlreadyAdded(newSkullgirl)
{
    for (let i = 0; i < selectedSkullgirls.length; i++)
    {
        if (selectedSkullgirls[i] == newSkullgirl) // Skullgirl exists in array
        {
            console.log("Skullgirl already exists");
            return true;
        }
    }
    console.log("Skullgirl does not exist");
    return false;
}

/**
 * /**
 * Return the relationship between two skullgirls
 * @param {*} main 
 * @param {*} support
 * @returns
 */
function getRelationshipTo(main, support)
{
    if (main.fighterFavs.includes(support.charName) == true)
    {
        return "Favorite";
    }
    else if (main.fighterGoods.includes(support.charName) == true)
    {
        return "Good";
    }
    else if (main.fighterDecents.includes(support.charName) == true)
    {
        return "Decent";
    }
    else if (main.fighterPoors.includes(support.charName) == true)
    {
        return "Poor";
    }
}

function createRelationshipArrow(main, support)
{
    
}