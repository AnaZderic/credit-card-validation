const ResponseModel = require("./Models/response");
const {LuhnAlgorithm} = require("./luhn-algorithm.js");
const {ExpirationDateCheck} = require("./expiration-date.js");
const {cvvValid} = require("./cvv.js");

let res = new ResponseModel();
let numbers = /^[0-9]+$/;
let twoDigits = [];

const checkCardNumber = (pan) => {
    twoDigits.push(pan[0], pan[1]);
    if(pan.match(numbers) && (pan.length > 15 && pan.length < 20)) {
        if (!LuhnAlgorithm(pan)) {
            res.errors.luhnError = "Invalid card number";
            res.success = false; 
        }
    } else {
        res.errors.cardNumberError = "Card number must have 16 - 19 digits and should only contain numbers";
        res.success = false; 
    }
}

const checkExpiryDate = (expDate) => {
    if(!ExpirationDateCheck(expDate)) {
        res.errors.cardExpiredError = "Card has expired";
        res.success = false; 
    }
}

const checkCvvBase = (cvv) => {
    let match = cvv.match(numbers);
    if(!match || !cvvValid(cvv, twoDigits)) {
        res.errors.cvvError = "Invalid CVV";
        res.success = false; 
    } 
}

const baseCheck = (formData) => {
    res = new ResponseModel();
    twoDigits = [];
    checkCardNumber(formData.cardNumber);
    checkExpiryDate(formData.expirationDate);
    checkCvvBase(formData.cvv);
    return res;
}

module.exports = { baseCheck };