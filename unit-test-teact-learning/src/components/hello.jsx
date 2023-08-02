import React from "react";

export default function Hello(props) {
    if (props.name) {
        return <h2>Hello, {props.name}!</h2>;
    } else {
        return <span>Hey, stranger</span>;
    }
}