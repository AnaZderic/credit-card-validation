const cvvValid = (cvv, twoDigits) => {
    if(twoDigits[0] == 3 && (twoDigits[1] == 4 || twoDigits[1] == 7)) {

        if(cvv.length == 4) {
           return true
        } else {
            return false;
        }

    } else if(twoDigits[0] == 4 || twoDigits[0] == 5 || twoDigits[0] == 6) {

        if(cvv.length == 3) {
            return true; 
        } else {
            return false;
        }

    } else {
        return false; 
    }
}

module.exports = {cvvValid};