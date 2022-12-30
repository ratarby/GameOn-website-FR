// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
    modalbg.style.display = "block";
    confirmation.style.display = "none"
    form.style.display = 'block';
    
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

const validCheckbox1 = document.getElementById('checkbox1');
const validCheckbox2 = document.getElementById('checkbox2');
// error firstName
const errorFirst = document.getElementById('error-first');
//error lastName
const errorLast = document.getElementById('error-last');
const errorEmail = document.getElementById('error-email');
const errorBirth = document.getElementById('error-birth');
const errorQuantity = document.getElementById('error-quantity');
const errorCity = document.getElementById('error-city');
const errorValidation1 = document.getElementById('error-validation1');
const errorValidation2 = document.getElementById('error-validation2');

//  issue #4 confirmation

const confirmation = document.getElementById('confirmation');
const confirmationCloseBtn = document.getElementsByClassName('btn-close');





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
    let firstNameChecked = false;
    let lastNameChecked = false;
    let emailChecked = false;
    let birthDateChecked = false;
    let quantityChecked = false;
    let radioChecked = false;
    let conditionsChecked = false;

    // regex --> ne commence pas par un espace + composé de caractères de a à z ou de A à Z + accents autorisés + au moins 2 caractères
    if (!firstNameValue.match(/^\S[a-za-zàáâäçèéêëìíîïñòóôöùúûüA-Z-\s]{2,}$/) // condition si firstName n'est pas conforme avec le regex
        || firstNameValue === ''   // ou condition si firstNameValue est égale à une chaîne de caractère vide
        || firstNameValue == null // ou condition si firstNameValue est égale à valeur null
        || firstNameValue.length < 2) // ou condition si firstNameValue est strictement inférieur à 2 caractères.
    { // je rentre les arguments suivant
        errorFirst.innerText = 'Veuillez saisir votre Prénom avec plus de 2 caractères';// ajout texte
        
        firstName.classList.add('border-red');
    } else { // sinon je rentre les arguments suivant avec une condition vraie
        errorFirst.style.display = 'none';
        firstName.classList.remove('border-red');
        firstNameChecked = true; // valeur booleenne = true
    };
    // regex --> ne commence pas par un espace + composé de caractères de a à z ou de A à Z + accents autorisés + au moins 2 caractères
    if (!lastNameValue.match(/^\S[a-za-zàáâäçèéêëìíîïñòóôöùúûüA-Z-\s]{2,}$/)
        || lastNameValue === ''
        || lastNameValue == null
        || lastNameValue.length < 2) {
        errorLast.innerText = 'Veuillez saisir votre Nom avec plus de 2 caractères';
        document.getElementsByClassName('.error');
        lastName.classList.add('border-red');;
    } else {
        errorLast.style.display = 'none';
        lastName.classList.remove('border-red');
        lastNameChecked = true;
    };
    // le regex testera l'email saisie par l'utilisateur
    if (!/^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/.test(emailValue)) {
        errorEmail.innerText = 'Veuillez renseigner une addresse mail valide';
        document.getElementsByClassName('.error');
        eMail.classList.add('border-red');
    } else {
        errorEmail.style.display = 'none';
        eMail.classList.remove('border-red')
        emailChecked = true;
    };
    // le regex va vérifier que l'utilisateur entre bien une daez fr nai
    if (!birthDateValue.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
        errorBirth.innerText = 'Veuillez saisir votre date de Naissance';
        document.getElementsByClassName('.error');
        birthDate.classList.add('border-red');
    } else {
        errorBirth.style.display = 'none';
        birthDate.classList.remove('border-red');
        birthDateChecked = true;
    };
    // le regex va vérifier que l'utilisateur entre bien un nondre
    if (!quantityValue.match(/^[0-9]{1,}$/)) {
        errorQuantity.innerText = 'Un nombre est requis';
        document.getElementsByClassName('.error');
        quantity.classList.add('border-red');
    } else {
        errorQuantity.style.display = 'none';
        quantity.classList.remove('border-red');
        quantityChecked = true;
    };

    if (!location1.checked
        && !location2.checked
        && !location3.checked
        && !location4.checked
        && !location5.checked
        && !location6.checked) {
        errorCity.innerText = 'Veuillez renseigner une ville';
        errorCity.style.marginBottom = '10px';

    } else {
        errorCity.style.display = 'none';
        radioChecked = true;
    };

    if (!validCheckbox1.checked) {
        errorValidation1.innerText = 'Veuillez accepter les termes et les conditions';
        errorValidation1.style.marginBottom = '10px';
    } else {
        errorValidation1.style.display = 'none';
        conditionsChecked = true;
    };

    // #4 confirmation validation avec initialisation des variables en valaur booleenne == "true"

    if (firstNameChecked             // si toutes les conditions remplissent la valeur booleenne
        && lastNameChecked
        && emailChecked
        && quantityChecked
        && radioChecked
        && conditionsChecked
        && birthDateChecked) { // alors
        // je récupère la constante form et je lui declare  la propriété CSS "style.display" = 'none' pour cacher l' élément form
        form.style.display = "none";
        // je récupère la constante confirmation et je lui déclare le propriété CSS "style.display" = 'flex' pour afficher le message de remerciement
        confirmation.style.display = "flex";
    };
}

// #4 Close confirmation
confirmationCloseBtn[0].addEventListener("click", () => {
    // reset du formulaire
    document.getElementById('form').reset();
    // ferme le modal 
    closeModal();
    // rafraichi la page
    window.location.reload()
});





