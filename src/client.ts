import { format } from "./formatter"
import Validator from "./validator";

class Client {
    validator: Validator;
    constructor() {
        this.validator = new Validator(10);
    }
    send = (text: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            if (!text) {
                throw new Error("INVALID_TEXT_ERROR");
            }
            const msg = format(text);
            if (!this.validator.validate(msg)) {
                reject("VALIDATION_ERROR");
            }
            resolve("OK");
        })

    }
}

export default Client;
