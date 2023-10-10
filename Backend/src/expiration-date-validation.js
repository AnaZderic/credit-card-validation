const { DateEdgeFactory } = require("./Factories/factory");

const isExpirationDateValid = (expDate) => {
    let date = DateEdgeFactory(expDate);
    let currentDate = new Date();
    if (date >= currentDate) {
        return true;
    } else false;
}

module.exports = {isExpirationDateValid};