import { convertTitle } from "./convert";

describe('convert title', () => {
    it('convert lower case', () => {
        const input = "Hello World";
        const result = convertTitle(input, "LOWER");
        expect(result).toEqual("hello world");
    })

    it('convert upper case', () => {
        const input = "Hello World";
        const result = convertTitle(input, "UPPER");
        expect(result).toEqual("HELLO WORLD");
    })
})