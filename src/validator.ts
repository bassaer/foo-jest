class Validator {
    constructor(private limt: number) { }
    validate = (msg: string): boolean => {
        return msg.length <= this.limt;
    }
}

export default Validator;
