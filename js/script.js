let beginGame = confirm(`your name is buffy. you just moved to sunnydale, and in the spirit of new beginnings, you bought a fish tank.\nfollow the prompts to figure out your current love interest! also whether or not your fish survived. ready to play?`);


let howManyFish = prompt(`how many fish do you want to start?`);
if (howManyFish < 1) {
    alert(`where's your sense of adventure? just one wouldn't hurt!`);
}else if (howManyFish == 1){
    alert(`perfect! let's play!`);
}else {
    alert(`that's too many! let's stick with one for now.`);
}

let nameOfFish = prompt(`what is your fish's name?`)


let seeingSomeone = prompt(`great! so... seeing anyone?\nplease type 'y' for 'yes', 'n' for 'no', or 'idk' for 'it's complicated.'`);
if (seeingSomeone === 'y'){
    let meetCute = prompt(`where did you meet?\nplease type 'school' or 'work'`);
    meetCute();

    // currently the code breaks after this line, i.e. no matter what you type for meetCute(), the alerts stop. i've tried un-nesting all of the 'if/else' statements while keeping all the functions declared in the right order, but that didn't really work either.. see below for pseudo-code that inspired this hornet's nest. -kvd

    if (meetCute === 'school'){
        let beSpecific = prompt(`really? be more specific. please type 'class', 'party', 'library' or 'office'.`);
        beSpecific();
        if (beSpecific === 'class'){
            result = 'owen';
            currentParamour();
        }else if (beSpecific === 'party'){
            result = 'parker';
            currentParamour();
        }else if (beSpecific === 'office'){
            result = 'robin';
            currentParamour();
        }else if (beSpecific === 'library'){
            let howIsItGoingRiley = prompt(`sounds romantic! how's that going?\nplease type 'g' for 'great!' or 'u' for 'umm...'`);
            howIsItGoingRiley();
            if (howIsItGoingRiley === 'great!'){
                result = 'riley-season-four'
                currentParamour();
            }else if (howIsItGoingRiley === 'u'){
                result = 'riley-season-five'
                currentParamour();
            }else{
                alert(`sorry, i didn't get that. please try again.`)
                howIsItGoingRiley();
            }
        }else{
            alert(`whoops, something went wrong! please try again.`);
            beSpecific();
        }
    }else if (meetCute === 'work'){
        let whereDoYouWork = prompt(`so where do you work?\nplease type 's' for 'school' or 'g' for 'graveyard'.`);
        whereDoYouWork();
        if (whereDoYouWork === 'school'){
            result = 'robin';
            currentParamour();
        }else if (whereDoYouWork === 'graveyard'){
            let marriedYet = prompt(`interesting... weird question, but are you married?\nplease type 'y' for 'yes' or 'n' for 'no'.`);
            marriedYet();
            if (marriedYet === 'y'){
                result = 'spike-season-four';
                currentParamour();
            }else if (marriedYet === 'n'){
                let howIsItGoingAngel = prompt(`and how is that going?\nplease type 'g' for 'great!' or 'w' for 'well...'`);
                howIsItGoingAngel();
                if (howIsItGoingAngel === 'g'){
                    result = 'angel-season-two'
                    currentParamour();
                }else if (howIsItGoingAngel === 'u'){
                    result = 'angel-season-three'
                    currentParamour();
                }else{
                    alert(`sorry, i got stuck on the graveyard thing. could you try that again?`);
                    howIsItGoingAngel();
                }
            }else{
                alert(`could you repeat that? please try again.`);
                marriedYet();
            }
        }else{
            alert(`could you repeat that? please try again.`);
            whereDoYouWork();
        }
    }else{
        alert(`error! please try again.`);
        meetCute();
    }
}else if(seeingSomeone === 'n'){
    let areYouSure = prompt(`but is there a guy? type 'n' for 'i wish' or 'w' for 'well...'.`);
    areYouSure();
    if (areYouSure === 'n'){
        result = 'xander-and-willow';
        currentParamour();
    }else if (areYouSure === 'w'){
        let itsComplicated = prompt(`is he a bad guy? type 'y' for 'yes' or 'n' for 'no'.`);
        itsComplicated()
        if (itsComplicated === 'y'){
            let isItLove = prompt(`does he love you? type 'n' for 'no' or 'ew' for 'i don't want to talk about it.'`);
            isItLove();
            if (isItLove === 'n'){
                result = 'angelus';
                currentParamour();
            }else if (isItLove === 'ew'){
                result = 'spike-season-five-six'
            }else{
                alert(`does not compute. try again?`);
                isItLove();
            }
        }else if (itsComplicated === 'n'){
            let whereIsHeNow = prompt(`well where is this guy anyway? type 'la' for 'los angeles', or 'b' for 'my basement...'`);
            whereIsHeNow();
            if (whereIsHeNow === 'la'){
                result = 'angel-season-three';
                currentParamour();
            }else if (whereIsHeNow === 'b'){
                result = 'spike-season-seven';
                currentParamour();
            }else{
                alert(`i'm not understanding you. please try again.`);
                whereIsHeNow();
            }
        }else{
            alert(`whoops, i didn't catch that. please try again.`)
        }
    }else{
        alert(`i'm not sure what you mean... please try again.`);
    }
}else if(seeingSomeone === 'idk'){
    itsComplicated();
}else{
    alert(`ack, try again!`);
    seeingSomeone();
};


beginGame();
howManyFish();
nameOfFish();
seeingSomeone();


const currentParamour = result;
switch(currentParamour){
    case 'angel-season-two':
        alert(`never understood why people keep fish in the first place.`);
        break;
    case 'angel-season-three':
        alert(`will NOT talk about your fish. ${nameOfFish} remembers.`);
        break;
    case 'angelus':
        alert(`he killed ${nameOfFish}. yikes.`);
        break;
    case 'spike-season-four':
        alert(`you, spike and ${nameOfFish} are a happy family now. giles is drinking to celebrate.`);
        break;
    case 'spike-seasons-five-six':
        alert(`you think he's secretly feeding your fish? ${nameOfFish} is looking a little plump lately...`);
        break;
    case 'spike-season-seven':
        alert(`he's definitely feeding ${nameOfFish}, and at this point you are both grateful for the help.`);
        break;
    case 'riley-season-four':
        alert(`he would definitely feed ${nameOfFish} if you asked.`);
        break;
    case 'riley-season-five':
        alert(`maybe don't leave ${nameOfFish} with him. just in case.`);
        break;
    case 'parker':
        alert(`he forgot you had a fish.`);
        break;
    case 'owen':
        alert(`he wrote a poem about your fish. he mispelled ${nameOfFish}. not very romantic...`);
        break;
    case 'robin':
        alert(`he can be overbearing with his fish advice, but he means well. ${nameOfFish} doesn't seem to mind him.`);
        break;
    default:
        alert(`you and willow bond over your love of fish. xander loves anchovies. single life is not so bad! this period of time will probably last as long as ${nameOfFish}'s memory--enjoy it while you can!`);
        break;
}


// pseudo-code below
//
//
// seeing someone?
//     yes 
//         where did you meet?
//             school 
//                 be more specific
//                     class - parker 
//                     party - owen 
//                     library 
//                         how's it going?
//                             great - riley season four 
//                             uhh... - riley season five 
//                     office - robin
//             work 
//                 where's that?
//                     school, actually - robin 
//                     graveyard
//                         are you married?
//                             yes - spike season four 
//                             no 
//                                 well how's it going?
//                                     great - angel season two 
//                                     he's been through hell and back - angel season three 
//     no 
//         but is there a guy?
//             i wish - xander & willow 
//             well...
//                 is he a bad guy?
//                     yes
//                         does he love you?
//                             no - angelus 
//                             i dont want to talk about it - spike season five/six 
//                     no
//                         where is he now?
//                             LA - angel season three 
//                             my basement - spike season seven 
//     its complicated
//         is he a bad guy?
//             yes
//                 does he love you?
//                     no - angelus 
//                     i dont want to talk about it - spike season five/six 
//             no
//                 where is he now?
//                     LA - angel season three 
//                     my basement - spike season seven 
//
