const targets = ["You", "Your"]

const actionAny = ["would be defeated in a duel with", "would be beaten up by", "cannot impress", "cannot turn on"];
const actionYou = ["are", "look like", "smell like", "walk like", "are humping", "want to be", "are a bad imitation of", "drive worse than", "get intimidated by"];
const actionYour = ["is", "looks like", "smells like", "walks like", "is humping", "wants to be", "is a bad imitation of", "drives worse than", "gets intimidated by"];

//for correct grammer
const validActionForYou = [actionAny, actionYou]
const validActionsForYour = [actionAny, actionYour]

const adjectives = ["an uninflated", "an uneducated", "an ugly", "an overtly agressive", "a miniature", "a fat", "a lying", "a bloody", "a comatose", "an addicted", "an erect", "a short", "a large", "a horny", "a hard", "a fermented", "a drunk","a tone-deaf", "a mis-guided", "a lost"];

const objects = ["horse", "potato", "dwarf", "penis", "fish", "big toe", "hair ball", "elephant", "worm", "tiger", "finger", "bed", "home", "sweater", "crotch", "mother", "father", "sister", "hamster", "identity crisis", "ego", "self-image", "bard", "pacifist", "oedipus complex", "corpse", "nurse"]

//get random output form any array
const getRandom = array => {
    return array[Math.floor(Math.random()*array.length)]
}

// returns string with a random insult generated from arrays
const constructInsult = () => {
    // find target (you or your...)
    let target = getRandom(targets);
    if (target === "Your"){
        target +=` ${getRandom(objects)}`
    }
    // find random action - dependent on target for correct grammer
    let action =""
    if (target === targets[0]){
        action = getRandom(getRandom(validActionForYou))
    }
    else {
        action = getRandom(getRandom(validActionsForYour))
    };

    // get random adjective
    const adjectiv = getRandom(adjectives);

    // get random object
    const object = getRandom(objects);

    return(`${target} ${action} ${adjectiv} ${object}`)

}

console.log(constructInsult())

const getInsult= () => document.getElementById("insult").innerHTML = constructInsult()