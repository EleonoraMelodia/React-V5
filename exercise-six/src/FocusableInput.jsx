import { useEffect, useRef } from "react";

export function FocusableInput() {
    useEffect(() => {
inputRef.current?.focus()
    }, [])
const inputRef = useRef(null)

    return (
    <input className="form-control bg-primary text-white" type="text"  ref={inputRef}  />)



}