// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
        modalbg.style.display = "block";
        
}
//===============================================================
//======================== VARIABLES ============================
//===============================================================

// close modal
const close = document.querySelectorAll(".close");



// issue #1 fermer le modal

// close modal event
close.forEach((span) => span.addEventListener("click", closeModal));


function closeModal() { // close modal form
        modalbg.style.display = "none";
        
}
// issue #2 Implémenter les entrées du formulaire

// form
const form = document.getElementById('form');

// firstname
const firstName = document.getElementById('first');
// lastname
const lastName = document.getElementById('last');
// email
const eMail = document.getElementById('email');
// date of birth
const birthDate = document.getElementById('birthdate');
// quantity
const quantity = document.getElementById('quantity');
// cities
const location1 = document.getElementById('location1');
const location2 = document.getElementById('location2');
const location3 = document.getElementById('location3');
const location4 = document.getElementById('location4');
const location5 = document.getElementById('location5');
const location6 = document.getElementById('location6');

//  issue #3 validation & message d'erreur

const validCheckbox1 = document.getElementById ('checkbox1');
const validCheckbox2 = document.getElementById ('checkbox2');
// error firstName
const errorFirst = document.getElementById ('error-first');
//error lastName
const errorLast = document.getElementById ('error-last');
const errorEmail = document.getElementById ('error-email');
const errorBirth = document.getElementById ('error-birth');
const errorQuantity = document.getElementById ('error-quantity');
const errorCity = document.getElementById ('error-city');
const errorValidation1 = document.getElementById ('error-validation1');
const errorValidation2 = document.getElementById ('error-validation2');

//  issue #4 confirmation

const confirmation = document.getElementById ('confirmation');
const confirmationCloseBtn = document.getElementsByClassName('btn-close');


// ===================================== REGEX =====================================

//  regex firstName ==> /^\S[a-za-zàáâäçèéêëìíîïñòóôöùúûüA-Z-\s]{2,}$/
// ne commence pas par un espace + composé de caractères de a à z ou de A à Z + accents autorisés + au moins 2 caractères
//  regex lastName ==>  /^\S[a-za-zàáâäçèéêëìíîïñòóôöùúûüA-Z-\s]{2,}$/
//  regex email ==>  /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/
//  regex birthDay ==>  = /^[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}$/
//  regex quantity ==>  /^[0-9]{1,}$/


//==================================================================================
//=================== ECOUTE & VERIFICATION DU FORMULAIRE au 'SUBMIT' ==============
//==================================================================================


form.addEventListener('submit', (e) => {
    e.preventDefault();

formVerify();
});

function formVerify() {
    // on récupère les valeurs des éléments et on suprime les espacements
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = eMail.value.trim();
    const birthDateValue = birthDate.value.trim();
    const quantityValue = quantity.value.trim();

    // Déclarations des variables à initialiser en valeur booleenne  = "true"
    let firstNameChecked;
    let lastNameChecked;
    let emailChecked;
    let birthDateChecked;
    let quantityChecked;
    let radioChecked;
    let conditionsChecked;


    if (!firstNameValue.match(/^\S[a-za-zàáâäçèéêëìíîïñòóôöùúûüA-Z-\s]{2,}$/) // condition si firstName n'est pas conforme avec le regex
        || firstNameValue === ''   // ou condition si firstNameValue est égale à une chaîne de caractère vide
        || firstNameValue == null // ou condition si firstNameValue est égale à valeur null
        || firstNameValue.length < 2) // ou condition si firstNameValue est strictement inférieur à 2 caractères.
        { // je rentre les arguments suivant
        errorFirst.innerText = 'Veuillez saisir votre Prénom avec plus de 2 caractères'; // ajout texte
        errorFirst.style.color = '#ff0000'; // ajout declaration propriété CSS color red
        errorFirst.style.fontSize = '15px'; // ajout  declaration propriété CSS fontSize de 10px
        errorFirst.style.marginTop = '8px'; //ajout marginTop de 8 px
        firstName.style.border = 'solid #ff0000 2px'; // ajout d'une border
        firstName.style.marginBottom = '10px'; // ajout d'une marginBottom
    } else { // sinon je rentre les arguments suivant avec une condition vraie
        errorFirst.style.display = 'none'; // ajout déclaration propriété CSS display none pour cacher l'élémént
        firstName.style.border = 'none'; // ajout déclaration propriété CSS border none pour enlever la bordure
        firstNameChecked = true; // valeur booleenne = true
    };

    if (!lastNameValue.match(/^\S[a-za-zàáâäçèéêëìíîïñòóôöùúûüA-Z-\s]{2,}$/)
        || lastNameValue === ''
        || lastNameValue == null
        || lastNameValue.length < 2) {
        errorLast.innerText = 'Veuillez saisir votre Nom avec plus de 2 caractères';
        errorLast.style.color = '#ff0000';
        errorLast.style.fontSize = '15px';
        errorLast.style.marginTop = '8px';
        lastName.style.border = 'solid red 2px';
        lastName.style.marginBottom = '10px';
    }  else {
    errorLast.style.display = 'none';
    lastName.style.border = 'none';
    lastNameChecked = true;
    };

    if (!/^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/.test(emailValue)) {
        errorEmail.innerText = 'Veuillez renseigner une addresse mail valide';
        errorEmail.style.color = '#ff0000';
        errorEmail.style.fontSize = '15px';
        errorEmail.style.marginTop = '8px';
        eMail.style.border = 'solid red 2px';
        eMail.style.marginBottom = '10px';
    } else {
        errorEmail.style.display = 'none';
        eMail.style.border = 'none';
        emailChecked = true;
    };

    if (!birthDateValue.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
        errorBirth.innerText = 'Veuillez saisir votre date de Naissance';
        errorBirth.style.color = '#ff0000';
        errorBirth.style.fontSize = '15px';
        errorBirth.style.marginTop = '8px';
        birthDate.style.border = 'solid red 2px';
        birthDate.style.marginBottom = '10px';

    } else {
        errorBirth.style.display = 'none';
        birthDate.style.border = 'none';
        birthDateChecked = true;
    };

    if (!quantityValue.match(/^[0-9]{1,}$/)) {
        errorQuantity.innerText = 'Un nombre est requis';
        errorQuantity.style.color = '#ff0000';
        errorQuantity.style.fontSize = '15px';
        errorQuantity.style.marginTop = '8px';
        quantity.style.border = 'solid red 2px';
        quantity.style.marginBottom = '10px';
    } else {
        errorQuantity.style.display = 'none';
        quantity.style.border = 'none';
        quantityChecked = true;
    };

    if (!location1.checked
        && !location2.checked
        && !location3.checked
        && !location4.checked
        && !location5.checked
        && !location6.checked) {
        errorCity.innerText = 'Veuillez renseigner une ville';
        errorCity.style.color = '#ff0000';
        errorCity.style.fontSize = '15px';
        errorCity.style.marginTop = '8px';
        errorCity.style.marginBottom = '10px';

    } else {
        errorCity.style.display = 'none';
        radioChecked = true;
    };

    if (!validCheckbox1.checked) {
        errorValidation1.innerText = 'Veuillez accepter les termes et les conditions';
        errorValidation1.style.color = '#ff0000';
        errorValidation1.style.fontSize = '15px';
        errorValidation1.style.marginTop = '8px';
        errorValidation1.style.marginBottom = '10px';
    } else {
        errorValidation1.style.display = 'none';
        conditionsChecked = true;
    };

// #4 confirmation validation avec initialisation des variables en valaur booleenne == "true"

    if (firstNameChecked == true            // si toutes les conditions remplissent la valeur booleenne
        && lastNameChecked == true
        && emailChecked == true
        && quantityChecked == true
        && radioChecked == true
        && conditionsChecked == true
        && birthDateChecked == true) { // alors
    // je récupère la constante form et je lui declare  la propriété CSS "style.display" = 'none' pour cacher l' élément form
        form.style.display = "none";
    // je récupère la constante confirmation et je lui déclare le propriété CSS "style.display" = 'flex' pour afficher le message de remerciement
        confirmation.style.display = "flex";


    };
};

// #4 Close confirmation

confirmationCloseBtn[0].addEventListener("click", closeModal); 




