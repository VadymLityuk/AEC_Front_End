var students = [];
var notes = [];
var i;
var resulta = 0;

for (i=0; i<5 ;i++){
    students[i] = prompt("Entrez nom d'etudiant : ");
    notes[i]= Number(prompt("Entrez la note d'etudiant :"));
    resulta+= notes[i];
}
var mediumnote = resulta/5;

for ( i=0; i<5; i++) {

    if (notes[i] > mediumnote) {
        document.write(students[i] + "=" + notes[i]);
    }
}

