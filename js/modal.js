// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// console.log(modalBtn);

// launch modal form
function launchModal() {
        modalbg.style.display = "block";
        // console.log('block');
}
//===============================================================
//======================== VARIABLES ============================
//===============================================================

// close modal
const close = document.querySelectorAll(".close");
// console.log(close);


// issue #1 fermer le modal

// close modal event
close.forEach((span) => span.addEventListener("click", closeModal));
// console.log(close);

function closeModal() { // close modal form
        modalbg.style.display = "none";
        // console.log('none');
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
const errorValidation = document.getElementById ('error-validation');

//  issue #4 confirmation

const confirmation = document.getElementById ('confirmation');
const confirmationCloseBtn = document.getElementsByClassName('btn-close');


// ====================================== REGEX ====================================

//  regex firstName ==> /^\S[a-za-zàáâäçèéêëìíîïñòóôöùúûüA-Z-\s]{2,}$/
// ne commence pas par un espace + composé de caractères de a à z ou de A à Z + accents autorisés + au moins 2 caractères
//  regex lastName ==>  /^\S[a-za-zàáâäçèéêëìíîïñòóôöùúûüA-Z-\s]{2,}$/
//  regex email ==>  /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/
//  regex birthDay ==>  = /^[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}$/
//  regex quantity ==>  /^[0-9]{1,}$/






