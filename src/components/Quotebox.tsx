import { Quote } from "../interfaces"

export function Quotebox(props: Quote) {
    
    return (
        <div className="quoteBox">
            <div className="quote">
                <div>
                    {props.content}
                </div>
                <div className="author">
                    -{props.author}
                </div>
            </div>
        </div>
        
    )
}