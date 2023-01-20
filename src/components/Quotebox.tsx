import { useState } from "react"
import { Quote } from "../interfaces"

export function Quotebox(props: Quote) {
    
    return (
        <div className="quoteBox">
            <div>
                {props.content}
            </div>
            <div className="author">
                -{props.author}
            </div>
        </div>
    )
}