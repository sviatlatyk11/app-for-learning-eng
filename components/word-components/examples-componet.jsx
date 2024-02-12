import React from "react";

function Examples({word}) {
    const Style = { fontWeight: "bold", color: "red"  };


    return (
        <div>
        <h3><span style={Style}>Examples:</span> {word}</h3>
        <br />
        </div>

    )
}

export default Examples;