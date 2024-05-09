import "./list.scss"
import {listData} from "../../lib/dummydata.js";
import Card from "../card/Card.jsx";

export default function List() {
    return(
        <div className="list">
            {listData.map(item => (
                <Card key={item.id} item={item}/>
            ))}
        </div>
    )
}