
const fs = require('node:fs');


//1) leggere il file da pc 
let data;
try {
  data = fs.readFileSync('./input/fruit.csv', 'utf8');
  //console.log(data);
} catch (err) {
  console.error(err);
}

// //2) spezzare il file in un array di stringhe, ogni riga una stringa
const stringArray = data.split(/\r?\n/);
// console.log(stringArray);


// //3) tolgo la prima riga dell'array e la metto da parte
const propertiesString = stringArray.shift();
// console.log(stringArray);
// console.log(propertiesString);

// //4) creo un array per contenere gli elementi
const newArray = [];

//5) ciclo l'array di stringhe
for (let i = 0; i < stringArray.length; i++) {

    const valuesString = stringArray[i];
    //console.log(i, valuesString);

    //6) ogni giro creo un oggetto vuoto per contenere l'elemento
    const newElement = {};

    // console.log('giro n.', i)
    // console.log("studente vuoto", newElement);
    // console.log("nomi delle proprietà (key)", propertiesString);
    // console.log("valori delle proprietà (value)", valuesString)
    // console.log('----------------------')

    // 7) spezzo le stringhe delle proprietà e dei valori in array di stringhe
    const propertiesArray = propertiesString.split(";");
    const valuesArray = valuesString.split(";");
    // console.log(propertiesArray);
    // console.log(valuesArray);


    // 8) faccio un ciclo interno sull'array delle proprietà e metto dentro 
    // l'elemento il valore corrispondente alla proprietà 
    for (let j = 0; j < propertiesArray.length; j++) {
        const property = propertiesArray[j];
        const value  = valuesArray[j];
        newElement[property]= value;
    }

    // 9) fuori dal ciclo interno metto lo studente creato nell'array degli studenti
    newArray.push(newElement);
}

console.log(newArray);


// 10) convertire l'array creato in stringa
const jsonString = JSON.stringify(newArray)

// 11) scrivere il risultato su file
try {
  fs.writeFileSync('./output/fruit-data.json', jsonString);
} catch (err) {
  console.error(err);
}


