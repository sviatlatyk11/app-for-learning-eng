import React from "react";

function Word({word}) {
    const Style = { fontWeight: "bold"};

    return (
        <h3><span style={Style}>Word:</span> {word}</h3>
    )
}

export default Word;