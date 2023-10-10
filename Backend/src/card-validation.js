const ResponseModel = require("./Models/response");
const {LuhnAlgorithm} = require("./luhn-algorithm.js");
const {isExpirationDateValid} = require("./expiration-date-validation.js");
const {isCvvValid} = require("./cvv-validation.js");

let res = new ResponseModel();
let numbers = /^[0-9]+$/;
let twoDigits = [];

const cardNumberValidation = (pan) => {
    twoDigits.push(pan[0], pan[1]);
    if(pan.match(numbers) && (pan.length >= 15 && pan.length < 20)) {
        if (!LuhnAlgorithm(pan)) {
            res.errors.luhnError = "Invalid card number";
            res.success = false; 
        }
    } else {
        res.errors.cardNumberError = "Card number must have 16 - 19 digits and should only contain numbers";
        res.success = false; 
    }
}

const expiryDateValidation = (expDate) => {
    if(!isExpirationDateValid(expDate)) {
        res.errors.cardExpiredError = "Card has expired";
        res.success = false; 
    }
}

const cvvValidation = (cvv) => {
    let match = cvv.match(numbers);
    if(!match || !isCvvValid(cvv, twoDigits)) {
        res.errors.cvvError = "Invalid CVV";
        res.success = false; 
    } 
}

const cardValidation = (formData) => {
    res = new ResponseModel();
    twoDigits = [];
    cardNumberValidation(formData.cardNumber);
    expiryDateValidation(formData.expirationDate);
    cvvValidation(formData.cvv);
    return res;
}

module.exports = {cardValidation};