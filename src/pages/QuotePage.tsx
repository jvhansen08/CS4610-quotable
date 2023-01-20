import { Quotebox } from "../components/Quotebox";
import { Quote } from "../interfaces";


export function QuotePage(props: Quote) {
    return (
        <div>
            <Quotebox content={props.content} author={props.author} />
        </div>
    )
}