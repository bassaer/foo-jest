import { format } from "./formatter"
import Validator from "./validator";

class Client {
    validator: Validator;
    constructor() {
        this.validator = new Validator(10);
    }
    send = (test: string) => {
        const msg = format(test);
        if (!this.validator.validate(msg)) {
            throw new Error("VALIDATION_ERROR");
        }
        return "OK";
    }
}

export default Client;
