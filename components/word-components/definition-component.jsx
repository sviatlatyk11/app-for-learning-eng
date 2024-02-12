import React from "react";

function Definition({word}) {
    const Style = { fontWeight: "bold", color: "green"};


    return (
        <div>
        <br />
        <h3><span style={Style}>Definition:</span> {word}</h3>
        </div>
    )
}

export default Definition;