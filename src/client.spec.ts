import { mocked } from 'ts-jest/utils';

import Client from "./client";
import Validator from './validator';

jest.mock('./validator');

describe("client", () => {
    beforeEach(() => {
        mocked(Validator).mockClear();
    })
    mocked(Validator).mockImplementation((): any => {
        return {
            validate: (msg: string) => {
                return true;
            }
        }
    });
    const client = new Client();
    it("throws error", async () => {
        await expect(client.send("")).rejects.toThrowError("INVALID_TEXT_ERROR");
    });
    it("returns OK because of mock", async () => {
        await expect(client.send("aaaaaaaaaa")).resolves.toBe("OK");
    });
    it('returns OK', async () => {
        await expect(client.send("a")).resolves.toBe("OK");
    });
});
