import { Quote } from "./interfaces";

export const getFirstQuote = (): Promise<Quote> => {
    return makeApiCall("random")
        .then((it) => it);
}

export const makeApiCall = async (relativePath: String): Promise<any> => {
    const result = fetch(`https://api.quotable.io/${relativePath}`)
    return (await result).json();
}