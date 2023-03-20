let notes = {
    francais : 20,
    allemand : 12,
    mathematiques : 5,
    svt : 16
}

let total = 0;
let nbMatiere = 0;

Object.keys(notes).forEach((matieres) => {
    let note = notes[matieres]
    total += note;
    nbMatiere++
    console.log(notes[matieres]);
})

let moyenne = total / nbMatiere;

alert("Votre moyenne est : " + moyenne)

console.log(notes[matieres]);