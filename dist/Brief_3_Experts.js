"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brief_3_Experts = void 0;
function additionSimple(a, b) {
    if (a < 1 || a > 9 || b < 1 || b > 9) {
        throw new Error("Les nombres doivent être compris entre 1 et 9");
    }
    return a + b;
}
function additionUnPeuMoinsSimple(a, b) {
    if (a === 0) {
        return b;
    }
    else {
        return a;
    }
}
function chiffreEnTableauInverse(valeur) {
    let tab = [];
    let modulo;
    while (valeur > 0) {
        modulo = (valeur % 10);
        valeur = Math.floor(valeur / 10);
        tab.push(modulo);
    }
    return tab;
}
function Calculer(tableauA, tableauB) {
    let tableauResult = [];
    for (let index = 0; index < tableauA.length; index++) {
        if (tableauA[index] != 0 && tableauB[index] != 0) {
            tableauResult[index] = additionSimple(tableauA[index], tableauB[index]);
        }
        else if (tableauA[index] === 0 || tableauB[index] === 0) {
            tableauResult[index] = additionUnPeuMoinsSimple(tableauA[index], tableauB[index]);
        }
    }
    console.log(tableauResult);
    const goodOrder = tableauResult.reverse();
    let stringTableau = "";
    for (let index = 0; index < goodOrder.length; index++) {
        stringTableau = stringTableau + goodOrder[index].toString();
    }
    console.log(stringTableau);
    return parseInt(stringTableau);
}
function addition(a, b) {
    let tableauA = [];
    let tableauB = [];
    let tabDimenssion = [];
    console.log(a + " + " + b);
    if (a > 9) {
        tableauA = chiffreEnTableauInverse(a);
        console.log(tableauA);
    }
    if (b > 9) {
        tableauB = chiffreEnTableauInverse(b);
        console.log(tableauB);
    }
    if (tableauA.length === tableauB.length) {
        return Calculer(tableauA, tableauB);
    }
    else {
        tabDimenssion[0] = tableauA.length;
        tabDimenssion[1] = tableauB.length;
        let nbreCaractereMax = Math.max(...tabDimenssion);
        if (tableauA.length > tableauB.length) {
            for (let index = tableauB.length; index < tableauA.length; index++) {
                tableauB[index] = 0;
            }
        }
        else {
            for (let index = tableauA.length; index < tableauB.length; index++) {
                tableauA[index] = 0;
            }
        }
        console.log(tableauA, tableauB);
        return Calculer(tableauA, tableauB);
    }
}
const Brief_3_Experts = () => {
    console.log("Addition : ", addition(0, 0));
};
exports.Brief_3_Experts = Brief_3_Experts;
