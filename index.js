// Code your solutions in this file
const names = ['Guadalupe', 'Ollie', 'Aki']
const events = ['surprise']

function writeCards(names, events){
    let thankYous =[]
    for (let i = 0; i < names.length; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
}
    return thankYous;
}

function countDown(){
    let down = 11
    while (down > 0) {
        console.log(--down);
}
}