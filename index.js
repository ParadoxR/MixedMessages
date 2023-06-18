let array1 = ["Where did you come from?", "You have something in your teeth.", "Cotton Eye Joe", "Shall I compare thee to a summer's day?", "Your United States Postal Service", "*=*"]

let array2 = ["It's man's job to ask why why why.", "ACK ACK ACK", "The silo is always one problem away from disaster.", "I need a drink.", "Where are my PAAAAAANTS?", "o7"]

let array3 = ["New boot scootin.", "Did you betray me?", "This just reminds people of that.", "Howdy hey.", "raucous laughter", ":(", ":)"]

let arrays = [array1, array2, array3]


const messageGenerator = arr => {
    let randPhrase = []
    for (let i = 0; i < arr.length; i++) {
        let x = Math.floor(Math.random() * arr[i].length);
        randPhrase.push(arr[i][x]);
    }
    return randPhrase;
}

const printMessage = arr => {
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
}

printMessage(messageGenerator(arrays))

