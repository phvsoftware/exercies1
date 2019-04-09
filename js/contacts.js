/* 
Activité : gestion des contacts
*/

let tableauContacts = [];

const contactsInitiaux = [
    {nom: "Lévisse", 
    prenom: "Carole"},
    {nom: "Nelsonne", 
    prenom: "Mélodie"}
] 

// objet contact
function Contact(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
}

// ajouter les contacts initiaux
initContacts();

let choixMenu = "";
while (choixMenu != "0") {
    // menu
    console.log("Bienvenue dans le gestionnaire des contacts !");
    console.log(`Il y a ${tableauContacts.length} contacts dans le répertoire`);
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    choixMenu = prompt("Choisissez une option :");

    switch (choixMenu) {
        case "1":
            listerContacts();
            break;
        case "2":
            ajouterContact();
            break;
    }
    console.log(""); 
}
console.log("Au revoir");

function listerContacts() {
    console.log("Voici la liste de tous vos contacts :");
    tableauContacts.forEach(contact => {
        console.log(`Nom : ${contact.nom}, Prénom : ${contact.prenom}`);
    });
}

function ajouterContact() {
    let nom = prompt("Entrez le nom du nouveau contact :");
    let prenom = prompt("Entrez le prénom du nouveau contact :");
    tableauContacts.push(new Contact(nom, prenom));
    console.log("Le nouveau contact a été ajouté"); 
}

function initContacts() {

    tableauContacts = contactsInitiaux;

    // contactsInitiaux.forEach(contact => {
    //     tableauContacts.push(new Contact(contact.Nom, contact.Prenom));
    // });
}