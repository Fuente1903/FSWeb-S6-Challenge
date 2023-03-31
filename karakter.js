import React from "react";

export default function Karakter(props){
    const {name, birthYear} = props;

    return (
        <div className="karakter-card">
            <p>{name}</p>
            <p>{birthYear}</p>
        </div>
    )
}