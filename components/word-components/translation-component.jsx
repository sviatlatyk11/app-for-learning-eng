import React from "react";

function Translation({word}) {
    const Style = { fontWeight: "bold",color: "orange"};

    return (
        <h3><span style={Style}>Translation:</span> {word}</h3>
    )
}

export default Translation;