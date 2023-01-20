import { Quote } from "./interfaces";

export const getFirstQuote = (): Promise<Quote> => {
    return makeApiCall("random")
        .then((it) => it);
}

// export function getQuotes(author: string): Promise<Quote>[] {
//     const result = makeApiCall(`search/quotes?query=${author}&fields=author`)
//         .then((it) => it)
//     return result.fields;
// }

export const makeApiCall = async (relativePath: String): Promise<any> => {
    const result = fetch(`https://api.quotable.io/${relativePath}`)
    return (await result).json();
}