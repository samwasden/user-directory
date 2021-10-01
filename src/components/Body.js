import React, {useState} from "react";
import Card from "./Card";
import Footer from "./Footer";
import '../stylesheets/Body.css'
import { data } from "../data";

function Body() {
    const [index, setindex] = useState(0)

    return (
        <div className='body'>
            <Card index={index}/>
            <Footer setindex={setindex} index={index} length={data.length}/>
        </div>
    )
}

export default Body