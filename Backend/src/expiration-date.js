const { DateEdgeFactory } = require("./Factories/factory");

const ExpirationDateCheck = (expDate) => {
    let date = DateEdgeFactory(expDate);
    let currentDate = new Date();
    if (date >= currentDate) {
        return true;
    } else false;
}

module.exports = {ExpirationDateCheck};