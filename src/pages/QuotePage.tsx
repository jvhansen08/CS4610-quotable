import { useState, useEffect } from "react";
import { Quotebox } from "../components/Quotebox";
import { Quote } from "../interfaces";
import { Searchbar } from "../components/Searchbar";
import { Header } from "../components/Header";

export function QuotePage() {
    const [firstTime, setTime] = useState(true);
    const [quote, setQuote] = useState<Quote>({ author: "", content: "", _id: "" });
    const [quoteList, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        getQuote()
        const searchBar = document.getElementById("searchBar") as HTMLInputElement;
        searchBar.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                const button = document.getElementById("searchButton") as HTMLInputElement;
                button.click();
            }
            const searchButton = document.getElementById("searchButton") as HTMLButtonElement;
            searchButton.addEventListener("click", () => {
                setTime(false);
                getSearchedQuote()
            });
        });
    }, []);

    async function getQuote() {
        let result = await fetch("https://usu-quotes-mimic.vercel.app/api/random")
            .then((res) => res.json());
        setQuote(result)
    }

    async function getSearchedQuote() {
        console.log("called");
        const queryHtml = document.getElementById("searchBar") as HTMLInputElement;
        const query = queryHtml.value;
        let quotes = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${query}`)
            .then((res) => res.json())
            .then((json) => {
                return json.results;
            });
        setQuotes(quotes);
        const searchBar = document.getElementById("searchBar") as HTMLInputElement;
        searchBar.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                const button = document.getElementById("searchButton") as HTMLInputElement;
                button.click();
            }
        })
    }

    return (
        <div className="firstTime">
            {firstTime &&
                <div >
                    <Header />
                    <Searchbar />
                    <div>
                        <Quotebox author={quote.author} content={quote.content} _id={""} />
                    </div>
                </div>
            }
            {!firstTime &&
                <div>
                    <Header />
                    <Searchbar />
                    <div>
                        {
                            quoteList.map((quote) => {
                                return (
                                    <div key={quote._id}>
                                        <Quotebox {...quote} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}