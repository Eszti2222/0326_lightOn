import Jatekter from "./Jatekter.js";
import { LISTA } from "./adat.js";
/*
ekvivalencia:
1, középső lámpa
2, jobb szélső
3.bal szélső
4.felso sor
5. also sor
6.bal felső sarok
7. bal also sarok
8.jobb ferlso sarok
9.jobb also sarok
*/


jatekTerGeneral();

function jatekTerGeneral(){
    for (let j = 0; j < LISTA.length; j++) {
        const szElem = document.createElement("div");
        const JATEKTER = new Jatekter(szElem) //mock elem, virtuális DOM elem, szElem

        for (let index = 0; index < LISTA.length; index++) {
            window.dispatchEvent(new CustomEvent("kivalaszt", {detail: LISTA[j].indexLista[index]}));
        }
        let vart= LISTA[j].vart;
        let kapott = JATEKTER.getNeighbours()
        console.assert(vart===kapott, `várt: ${vart}, kapott:${kapott} ${LISTA[j].nev} `);
        
    }
        
    }


/*
    for (let j = 0; j < LISTA.length; j++) {
        const szElem = document.createElement("div");
        const JATEKTER = new Jatekter(szElem) //mock elem, virtuális DOM elem, szElem

        for (let index = 0; index < LISTA.length; index++) {
            window.dispatchEvent(new CustomEvent("kivalaszt", {detail: LISTA[j].indexLista[index]}));
        }
        let vart= LISTA[j].vart;
        let kapott = JATEKTER.gyozelemEllenorzes()
        console.assert(vart===kapott, `várt: ${vart}, kapott:${kapott} ${LISTA[j].nev} `);
        
    }
*/
//let aktAllapot=Jatekter.getAllapot()
let beallitAllapot=Jatekter.setAllapot()

//vart-setAllapotok
//kapott-getNeighbours


