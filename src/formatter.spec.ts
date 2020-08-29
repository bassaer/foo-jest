import { format } from './formatter';

describe("formater", () => {
    it('format', () => {
        expect(format("a")).toBe("[a]");
    });
});
