export default function Calculator() {
    this.name = "calculatrice";

// création de bouton
    this.createHTMLElement = function(tag,classes,parentElement,text) {
        let el = document.createElement(tag);
        if(classes) {
            el.classList.add(classes);
        }
        
        if(text) {
            el.textContent = text;
        }

        parentElement.append(el);
        return el; 
    }
    this.init = function() {
        let calculator = this.createHTMLElement("div","calcul",document.body);
        let screen = this.createHTMLElement("header","calcul__head",calculator);
        let ul = this.createHTMLElement("div","",calculator);
        
        let lisArr = [
            {
                class: "calcul__operator",
                id: "+",
                text: "+",
                number: 1
            },
            {
                class: "calcul__operator",
                id: "-",
                text: "-",
                number: 1
            },
            {
                class: "calcul__operator",
                id: "*",
                text: "x",
                number: 1
            },
            {
                class: "calcul__operator",
                id: "/",
                text: "/",
                number: 1
            },
            {
                class: "calcul__element",
                id: "7",
                text: "7",
                number: 2
            },
            {
                class: "calcul__element",
                id: "8",
                text: "8",
                number: 2
            },
            {
                class: "calcul__element",
                id: "9",
                text: "9",
                number: 2
            },
            {
                class: "calcul__total",
                id: "=",
                text: "=",
                number: 2
            },
           
            {
                class: "calcul__element",
                id: "4",
                text: "4",
                number: 3
            },
            {
                class: "calcul__element",
                id: "5",
                text: "5",
                number: 3
            },
            {
                class: "calcul__element",
                id: "6",
                text: "6",
                number: 3
            },
            {
                class: "calcul__element",
                id: "1",
                text: "1",
                number: 4
            },
            {
                class: "calcul__element",
                id: "2",
                text: "2",
                number: 4
            },
            {
                class: "calcul__element",
                id: "3",
                text: "3",
                number: 4
            },
            {
                class: "calcul__element",
                id: "0",
                text: "0",
                number: 5
            },
            {
                class: "calcul__element",
                id: ".",
                text: ".",
                number: 5
            },
            {
                class: "calcul__clear",
                id: "supp",
                text: "AC",
                number: 5
            }
        ];
        
        let button;

        for(let i=0;i<lisArr.length;i++) {
            button = this.createHTMLElement("button",lisArr[i].class,ul,lisArr[i].text);
        }
        // affichage

        function printscreen() {
            console.log(this.textContent);
            let screen = document.querySelector(".calcul__head");
            screen.textContent += this.textContent;
        }
        
        let operators = document.querySelectorAll(".calcul__operator");
        let numbers = document.querySelectorAll(".calcul__element");
        for(let i=0; i<operators.length;i++) {
            operators[i].addEventListener("click", printscreen);
        }
        for(let i=0; i<numbers.length;i++) {
            numbers[i].addEventListener("click", printscreen);
        }
        // effacement de l'afficheur
        let clears = document.querySelector(".calcul__clear");
        
        // calcul de l'opération entrée
        let total = document.querySelector(".calcul__total");
        
    }
}
