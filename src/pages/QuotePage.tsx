import { useState, useEffect } from "react";
import { Quotebox } from "../components/Quotebox";
import { Quote } from "../interfaces";
import { Searchbar } from "../components/Searchbar";


export function QuotePage() {
    const [firstTime, setTime] = useState(true);
    const [quote, setQuote] = useState<Quote>({author: "", content: "", _id: ""});
    const [quoteList, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        getQuote()
    }, []);
  
    async function getQuote() {
        let result = await fetch("https://usu-quotes-mimic.vercel.app/api/random")
            .then((res) => res.json());
        setQuote(result)
    }

    async function getSearchedQuote() {
        const queryHtml = document.getElementById("searchBar") as HTMLInputElement;
        const query = queryHtml.value;
        if (query.trim() != "") {
            let quotes = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${query}`)
            .then((res) => res.json())
            .then((json) => json.results);
        console.log(quotes);
        setQuotes(quotes);
        }
    }
  
    return (
        <div className="firstTime">
            { firstTime &&
            <div >
                <div>
                    <span>
                        <Searchbar />
                        <button 
                                onClick={() => {
                                    setTime(false);
                                    getSearchedQuote()
                                }                        
                            }>click me
                        </button>
                    </span>
                    
                </div>
                <div>
                    <Quotebox author={quote.author} content={quote.content} _id={""} />
                </div>
            </div>
            }
            { !firstTime &&
                <div>
                    <div>
                        <Searchbar />
                    </div>
                    <div>
                        {
                            quoteList.map((quote) => {
                                return (
                                    <div key={quote._id}>
                                        <Quotebox {...quote}/>
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