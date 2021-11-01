import React from "react";
import { createPortal } from "react-dom";

export default function Modal(props)
{
    return createPortal(
        <>
            {props.children}
        </>
        ,document.getElementById('modal')
    )
}