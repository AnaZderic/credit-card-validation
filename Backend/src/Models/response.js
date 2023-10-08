class ResponseModel {
    constructor(success = false, errors = [], result = {}){
        this.success = success;
        this.errors = errors;
        this.result = result;
    }
}