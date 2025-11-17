const fs = require('node:fs');


//1) leggere il file da pc 
let jsonString;
try {
    jsonString = fs.readFileSync('./input/students-data.json', 'utf8');
} catch (err) {
    console.error(err);
}

//2) trasformo il json in un array JS 
const array = JSON.parse(jsonString);

//3) creo la stringa del CSV 
let csvString = '';

//4) prendo il primo oggetto dell'array;
const first = array[0];

//5) prendo i nomi delle proprietà dell'array
const keyArray = Object.keys(first);

//6)ciclo i nomi delle proprietà
for (let i = 0; i < keyArray.length; i++) {
    const key = keyArray[i];
    //7) ogni giro attacco la propriètà alla stringa
    csvString = csvString + key;
    //8) se sono all'ultima proprietà metto a capo altimenti separo con punto e vrgola
    if (i === keyArray.length - 1) {
        csvString = csvString + '\n';
    } else {
        csvString = csvString + ';';
    }

}

//9) ora ciclo tutto l'array
for (let i = 0; i < array.length; i++) {
    const element = array[i];

    //10) prendo tutti i valori del mio oggetto 
    const values = Object.values(element);
    console.log(values)
    //11) ciclo values e uso la stessa logica delle keys

    for (let j = 0; j < values.length; j++) {
        const value = values[j];
        
        csvString = csvString + value;

        if (j === values.length - 1) {
            csvString = csvString + '\n';
        } else {
            csvString = csvString + ';';
        }

    }

}

try {
  fs.writeFileSync('./output/student-data.csv', csvString);
} catch (err) {
  console.error(err);
}
