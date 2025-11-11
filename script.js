
const fs = require('node:fs');


//1) leggere il file da pc 
let data;
try {
  data = fs.readFileSync('./input/fruit.csv', 'utf8');
//   console.log(data);
} catch (err) {
  console.error(err);
}

//2) spezzare il file in un array di stringhe
const stringArray = data.split(/\r?\n/);


//3) tolgo la prima riga dell'array e la metto da parte
const propertiesString = stringArray.shift();
// console.log(stringArray);
// console.log(propertiesString);

//4) creo un array per contenere gli studenti
const studentsArray = [];

//5) ciclo l'array di stringhe
for (let i = 0; i < stringArray.length; i++) {

    const valuesString = stringArray[i];

    //6) ogni giro creo un oggetto vuoto per contenere lo studente
    const student = {};

    // console.log('giro n.', i)
    // console.log("studente vuoto", student);
    // console.log("nomi delle proprietà (key)", <propertiesString);
    // console.log("valori delle proprietà (value)", valuesString)
    // console.log('----------------------')

    // 7) spezzo le stringhe delle proprietà e dei valori in array di stringhe
    const propertiesArray = propertiesString.split(";");
    const valuesArray = valuesString.split(";");
    // console.log(propertiesArray);
    // console.log(valuesArray);


    // 8) faccio un ciclo interno sull'array delle proprietà e metto dentro 
    // lo studente il valore corrispondente alla proprietà 
    for (let j = 0; j < propertiesArray.length; j++) {
        const property = propertiesArray[j];
        const value  = valuesArray[j];
        student[property]= value;
        
    }

    // 9) fuori dal ciclo interno metto lo studente creato nell'array degli studenti
    studentsArray.push(student);



}

console.log(studentsArray);

const jsonArray = JSON.stringify(studentsArray)

try {
  fs.writeFileSync('./output/fruit-data.json', jsonArray);

} catch (err) {
  console.error(err);
}


