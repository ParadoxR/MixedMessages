let array1 = ["phrase1", "phrase2", "phrase3"]

let array2 = ["monkey1", "monkey2", "monkey3"]

let array3 = ["horse1", "horse2", "horse3"]

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

