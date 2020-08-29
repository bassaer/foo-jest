import Validator from "./validator";

describe('Validator', () => {
    const validator = new Validator(2);
    it('input < limt', () => {
        expect(validator.validate("a")).toBe(true);
    });
    it('input === limt', () => {
        expect(validator.validate("aa")).toBe(true);
    })
    it('input > limt', () => {
        expect(validator.validate("aaa")).toBe(false);
    });
});
