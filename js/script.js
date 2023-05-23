// the container whre data is storing 
let countEl = document.getElementById('count-el');
let count = 0;
let saveEl = document.getElementById('save-el');

// console.log(saveEl);

// IncrementBtn 
function increment() {
    count += 1;
    countEl.innerText = count;
    // console.log("Button CLicked")
}

// <!-- Decrement Button For Practice its Working  -->
// function decrement(){
//     count = count - 1;
//     countEl.innerText = count;
// }

// For Previous Entries



// Save Button 
function save() {
    let countStr = count +  " - " + " ";
    saveEl.textContent  += countStr;
    // By this line of code counter become zero on clicking save Button 
    countEl.textContent = 0;
    count = 0;
    
    console.log(count)
}