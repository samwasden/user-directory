import React from "react";
import '../stylesheets/Index.css';

function Index(props) {
    return (
        <div className='index'>
            <h1>{props.index + 1}/{props.length}</h1>
        </div>
    )
}

export default Index