import React from "react";

function Pos({word}) {
    const Style = { fontWeight: "bold"};

    return (
          <h3><span style={Style}>Part of Speech:</span> {word}</h3>
    )
}

export default Pos;