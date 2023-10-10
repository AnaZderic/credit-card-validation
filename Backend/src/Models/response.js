const ErrorsModel = require("./errors");

module.exports = class ResponseModel {
    constructor(success = true, errors = new ErrorsModel(), result = {}){
        this.success = success;
        this.errors = errors;
        this.result = result;
    }
}