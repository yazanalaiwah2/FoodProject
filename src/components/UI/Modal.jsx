import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({children, open,onClose ,className = ''}){
    const refDialog = useRef()

    useEffect(()=>{
        if(open) refDialog.current.showModal()
        // else refDialog.current?.close()
        return ()=> refDialog.current?.close()
    },[open])

    return createPortal(
        <dialog ref={refDialog} className={`modal ${className}`} onClose={onClose}>{children}</dialog>,
        document.getElementById('modal')
    )
}