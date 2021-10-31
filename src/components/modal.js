import React from "react";
import { createPortal } from "react-dom";

export default function Modal(props)
{
    return createPortal(
        <div className="modalcontainer">
            {props.children}
        </div>,document.getElementById('modal')
    )
}