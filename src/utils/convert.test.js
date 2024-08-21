import { convertTitle } from "./convert";

describe('convert title', () => {
    it('convert lower case', () => {
        const input = "Hello World";
        const result = convertTitle("LOWER", input);
        expect(result).toEqual("hello world");
    })

    it('convert upper case', () => {
        const input = "Hello World";
        const result = convertTitle("UPPER", input);
        expect(result).toEqual("HELLO WORLD");
    })
})