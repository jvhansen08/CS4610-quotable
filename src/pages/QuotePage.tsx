import { useState, useEffect } from "react";
import { Quotebox } from "../components/Quotebox";
import { Quote } from "../interfaces";
import { getFirstQuote } from '../apiCalls'
import { Searchbar } from "../components/Searchbar";


export function QuotePage() {
    const [firstTime, setTime] = useState(true);
    const [quoteList, setQuote] = useState([{content: "", author: ""}]);

    useEffect(() => {
        getQuote()
    }, [firstTime]);
  
    async function getQuote() {
        const quote = await getFirstQuote();
        setQuote([quote])
    }

    // async function getSearchedQuote() {
    //     setTime(false);
    //     const quotes = 
    // }
  
    return (
        <div className="firstTime">
            { firstTime &&
            <div >
                <div>
                    <Searchbar />
                </div>
                <div>
                    <Quotebox author={quoteList[0].author} content={quoteList[0].content} />
                </div>
            </div>
            }
        </div>
      )
}