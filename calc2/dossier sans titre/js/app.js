// import Calculator from './calculator.js';

// let calc = new Calculator();
// calc.showMessage();

// let calc2 = new Calculator();
// calc2.showMessage();

let calculator = document.querySelector(".calculator"); 
calculator.addEventListener("click",function(e){
    console.log(`bouton: ${e.target.textContent}`);
});



function addPeople(e) {
    e.preventDefault();

    // Get input value
    let input = document.getElementById("inputPeople");

    // Create li element with input value
    let li = document.createElement("li");
    li.textContent = input.value;

    let listPeople = document.querySelector(".people");
    listPeople.append(li);
}


let btnAddPeople = document.getElementById("btnAddPeople");
btnAddPeople.addEventListener("click",addPeople);