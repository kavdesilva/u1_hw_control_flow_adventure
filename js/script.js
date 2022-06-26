let playGame = () => {
    let beginGame = confirm(`your name is buffy. you just moved to sunnydale, and in the spirit of new beginnings, you bought a fish tank.\n\nfollow the prompts to figure out your current love interest! also whether or not your fish survived. ready to play?`);
}
playGame();

let playAgain = document.getElementById('play').addEventListener('click', () => {
    window.location.reload();
  })

let howManyFish = () => {
    let howManyFishAnswer = prompt(`how many fish do you want to start?`);
    if (howManyFishAnswer < 1) {
        alert(`where's your sense of adventure? just one wouldn't hurt!`);
    }else if (howManyFishAnswer == 1){
        alert(`perfect! let's play!`);
    }else if(howManyFishAnswer > 1){
        alert(`that's too many! let's stick with one for now.`);
    }else{
        alert(`that's not a number! please try again.`)
        howManyFish ()
    }
}
howManyFish()

let nameOfFish = prompt(`what is your fish's name?`)

let seeingSomeone = () => {
    let seeingSomeoneAnswer = prompt(`great! so... seeing anyone?\nplease type 'y' for 'yes', 'n' for 'no', or 'idk' for 'it's complicated.'`);
    if (seeingSomeoneAnswer === 'y'){
        let meetCute = () => {
            let meetCuteAnswer = prompt(`where did you meet?\nplease type 'school' or 'work'`);
            if (meetCuteAnswer === 'school'){
                let beSpecific = () => {
                    let beSpecificAnswer = prompt(`really? be more specific.\n\nplease type 'class', 'party', 'library' or 'office'.`);
                    if (beSpecificAnswer === 'class'){
                        result = 'owen';
                    }else if (beSpecificAnswer === 'party'){
                        result = 'parker';
                    }else if (beSpecificAnswer === 'office'){
                        result = 'robin';
                    }else if (beSpecificAnswer === 'library'){
                        let howIsItGoingRiley = () => {
                            let howIsItGoingRileyAnswer = prompt(`sounds romantic! how's that going?\n\nplease type 'g' for 'great!' or 'u' for 'umm...'`);
                            if (howIsItGoingRileyAnswer === 'g'){
                                result = 'riley-season-four'
                            }else if (howIsItGoingRileyAnswer === 'u'){
                                result = 'riley-season-five'
                            }else{
                                alert(`sorry, i didn't get that. please try again.`)
                                howIsItGoingRiley();
                            }
                        }
                    howIsItGoingRiley();
                    }else{
                        alert(`whoops, something went wrong! please try again.`);
                        beSpecific();
                    }
                }
                beSpecific();
            }else if (meetCuteAnswer === 'work'){
                let whereDoYouWork = () => {
                    let whereDoYouWorkAnswer = prompt(`so where do you work?\nplease type 's' for 'school' or 'g' for 'graveyard'.`);
                    if (whereDoYouWorkAnswer === 's'){
                        result = 'robin';
                    }else if (whereDoYouWorkAnswer === 'g'){
                        let marriedYet = () => {
                            let marriedYetAnswer = prompt(`interesting... weird question, but are you married?\nplease type 'y' for 'yes' or 'n' for 'no'.`);
                            if (marriedYetAnswer === 'y'){
                                result = 'spike-season-four';
                            }else if (marriedYetAnswer === 'n'){
                                let howIsItGoingAngel = () => {
                                    let howIsItGoingAngelAnswer = prompt(`and how is that going?\nplease type 'g' for 'great!' or 'w' for 'well...'`);
                                    if (howIsItGoingAngelAnswer === 'g'){
                                        result = 'angel-season-two'
                                    }else if (howIsItGoingAngelAnswer === 'w'){
                                        result = 'angel-season-three';
                                    }else{
                                        alert(`sorry, i got stuck on the graveyard thing. could you try that again?`);
                                        howIsItGoingAngel();
                                    }
                                }
                                howIsItGoingAngel();
                            }else{
                                alert(`could you repeat that? please try again.`);
                                marriedYet();
                            }
                        }
                        marriedYet();
                    }else{
                        alert(`could you repeat that? please try again.`);
                        whereDoYouWork();
                    }
                }
                whereDoYouWork();
            }else{
                alert(`error! please try again.`);
                meetCute()
            }
        }
        meetCute();
    }else if(seeingSomeoneAnswer === 'n'){
        let areYouSure = () => {
            let areYouSureAnswer = prompt(`but is there a guy? type 'n' for 'i wish' or 'w' for 'well...'.`);
            if (areYouSureAnswer === 'n'){
                result = 'xander-and-willow';
            }else if (areYouSureAnswer === 'w'){
                let itsComplicated = () => {
                    let itsComplicatedAnswer = prompt(`is he a bad guy? type 'y' for 'yes' or 'n' for 'no'.`);
                    if (itsComplicatedAnswer === 'y'){
                        let isItLove = () => {
                            let isItLoveAnswer = prompt(`does he love you? type 'n' for 'no' or 'ew' for 'i don't want to talk about it.'`);
                            if (isItLoveAnswer === 'n'){
                                result = 'angelus';
                            }else if (isItLoveAnswer === 'ew'){
                                result = 'spike-season-five-six'
                            }else{
                                alert(`does not compute. try again?`);
                                isItLove();
                            }
                        }
                        isItLove();
                    }else if (itsComplicatedAnswer === 'n'){
                        let whereIsHeNow = () => {
                            let whereIsHeNowAnswer = prompt(`well where is this guy anyway? type 'la' for 'los angeles', or 'b' for 'my basement...'`);
                            if (whereIsHeNowAnswer === 'la'){
                                result = 'angel-season-three';
                            }else if (whereIsHeNowAnswer === 'b'){
                                result = 'spike-season-seven';
                            }else{
                                alert(`i'm not understanding you. please try again.`);
                                whereIsHeNow();
                            }
                        }
                        whereIsHeNow();
                    }else{
                        alert(`whoops, i didn't catch that. please try again.`)
                        itsComplicated();
                    }
                }
                itsComplicated();
            }else{
                alert(`i'm not sure what you mean... please try again.`);
                areYouSure();
            }
        }
        areYouSure();
    }else if(seeingSomeoneAnswer === 'idk'){
        let itsComplicated = () => {
            let itsComplicatedAnswer = prompt(`is he a bad guy? type 'y' for 'yes' or 'n' for 'no'.`);
            if (itsComplicatedAnswer === 'y'){
                let isItLove = () => {
                    let isItLoveAnswer = prompt(`does he love you? type 'n' for 'no' or 'ew' for 'i don't want to talk about it.'`);
                    if (isItLoveAnswer === 'n'){
                        result = 'angelus';
                    }else if (isItLoveAnswer === 'ew'){
                        result = 'spike-seasons-five-six'
                    }else{
                        alert(`does not compute. try again?`);
                        isItLove();
                    }
                }
                isItLove();
            }else if (itsComplicatedAnswer === 'n'){
                let whereIsHeNow = () => {
                    let whereIsHeNowAnswer = prompt(`well where is this guy anyway? type 'la' for 'los angeles', or 'b' for 'my basement...'`);
                    if (whereIsHeNowAnswer === 'la'){
                        result = 'angel-season-three';
                    }else if (whereIsHeNowAnswer === 'b'){
                        result = 'spike-season-seven';
                    }else{
                        alert(`i'm not understanding you. please try again.`);
                        whereIsHeNow();
                    }
                }
                whereIsHeNow();
            }else{
                alert(`whoops, i didn't catch that. please try again.`)
                itsComplicated();
            }
        }
        itsComplicated();
    }else{
        alert(`ack, try again!`);
        seeingSomeone();
    };
};
seeingSomeone();


const currentParamour = result;
switch(currentParamour){
    case 'angel-season-two':
        alert(`angel (season 2)! he never understood why people keep fish in the first place.`);
        break;
    case 'angel-season-three':
        alert(`angel (season 3)! he will NOT talk about your fish. but ${nameOfFish} remembers.`);
        break;
    case 'angelus':
        alert(`angelus! he killed willow's fish. ${nameOfFish} was nearly a goner. yikes.`);
        break;
    case 'spike-season-four':
        alert(`spike (season 4, something blue)! you, spike and ${nameOfFish} are a happy family now. giles is drinking to celebrate.`);
        break;
    case 'spike-seasons-five-six':
        alert(`spike (season 5-6)! you think he's secretly feeding your fish? ${nameOfFish} is looking a little plump lately...`);
        break;
    case 'spike-season-seven':
        alert(`spike (season 7)! he's definitely feeding ${nameOfFish}, and at this point you are both grateful for the help.`);
        break;
    case 'riley-season-four':
        alert(`riley (season 4)! he would definitely feed ${nameOfFish} if you asked.`);
        break;
    case 'riley-season-five':
        alert(`riley (season 5)! maybe don't leave ${nameOfFish} with him. just in case.`);
        break;
    case 'parker':
        alert(`parker! he forgot you had a fish.`);
        break;
    case 'owen':
        alert(`owen! he wrote a poem about your fish. he mispelled ${nameOfFish}. not very romantic...`);
        break;
    case 'robin':
        alert(`robin! he can be overbearing with his fish advice, but he means well. ${nameOfFish} doesn't seem to mind him.`);
        break;
    default:
        alert(`who needs a boyfriend when you've got your bffs! you and willow bond over your love of fish. xander loves anchovies. single life is not so bad! this period of time will probably last as long as ${nameOfFish}'s memory--enjoy it while you can!`);
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
