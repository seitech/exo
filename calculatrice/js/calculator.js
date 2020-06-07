export default function Calculator() {
    this.name = "calculatrice";

// création des boutons
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
                class: "calcul__element_L3",
                id: "4",
                text: "4",
                number: 3
            },
            {
                class: "calcul__element_L3",
                id: "5",
                text: "5",
                number: 3
            },
            {
                class: "calcul__element_L3",
                id: "6",
                text: "6",
                number: 3
            },
            {
                class: "calcul__del",
                id: "supp",
                text: "AC",
                number: 5
            },
            {
                class: "calcul__element_L4",
                id: "1",
                text: "1",
                number: 4
            },
            {
                class: "calcul__element_L4",
                id: "2",
                text: "2",
                number: 4
            },
            {
                class: "calcul__element_L4",
                id: "3",
                text: "3",
                number: 4
            },
            {
                class: "calcul__element_BP",
                id: ".",
                text: ".",
                number: 5
            },
            {
                class: "calcul__element_N0",
                id: "0",
                text: "0",
                number: 5
            }
        ];
        
        let button;

        for(let i=0;i<lisArr.length;i++) {
            button = this.createHTMLElement("button",lisArr[i].class,ul,lisArr[i].text);
        }
        // affichage
        
        function printscreen() {
            let screen = document.querySelector(".calcul__head");
            screen.textContent += this.textContent;
        } 
        
        
        //console.log(x);
        // recupération des boutons      

        let operators = document.querySelectorAll(".calcul__operator");
        let numbers = document.querySelectorAll(".calcul__element");
        let numbers3 = document.querySelectorAll(".calcul__element_L3");
        let numbers4 = document.querySelectorAll(".calcul__element_L4");
        let numbers5 = document.querySelectorAll(".calcul__element_N0");
        let point = document.querySelectorAll(".calcul__element_BP");
        let dels = document.querySelectorAll(".calcul__del");
        let totals = document.querySelectorAll(".calcul__total");

        // affectation du role des boutons

        for(let i=0; i<operators.length;i++) {
            operators[i].addEventListener("click", printscreen);
        }
        for(let i=0; i<numbers.length;i++) {
            numbers[i].addEventListener("click", printscreen);
        }
        for(let i=0; i<numbers3.length;i++) {
            numbers3[i].addEventListener("click", printscreen);
        }
        for(let i=0; i<numbers4.length;i++) {
            numbers4[i].addEventListener("click", printscreen);
        }
        for(let i=0; i<numbers5.length;i++) {
            numbers5[i].addEventListener("click", printscreen);
        }
        for(let i=0; i<point.length;i++) {
            point[i].addEventListener("click", printscreen);
        }
        for(let i=0; i<dels.length;i++) {
            dels[i].addEventListener("click", printscreen);
        }
        for(let i=0; i<totals.length;i++) {
            totals[i].addEventListener("click", printscreen);
        }
        
        // dels.addEvenListener("click", delscreen);
        // total.addEvenListener("click", resultat);
        // besoin de eval pour avoir le résultat.
        
    }
}
