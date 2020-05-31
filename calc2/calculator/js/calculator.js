

export default function Calculator() {
    this.name = "calculatrice";

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
        let ul = this.createHTMLElement("ul","",calculator);
        let li =  this.createHTMLElement("li","",ul);
        
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
                class: "calcul__supp",
                id: "supp",
                text: "AC",
                number: 5
            }
        ];
        
        let button;
        
        for(let i=0;i<lisArr.length;i++) {
            button = this.createHTMLElement("button",lisArr[i].class,li,lisArr[i].text);
        }
        
    }

}




/*
            {
                class: "calcul__total",
                id: "=",
                text: "=",
                number: 5
            }
            
*/