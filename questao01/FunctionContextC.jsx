import React, { useContext } from "react";
import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD"

const FunctionContextC = () => {
    const cores = useContext(ColorTheme);
    return (
        <div>
            <h1 style={{ backgroundColor: cores.bkgC }}>
                Contexto C
            </h1>
            <FunctionContextD />
        </div>

    )
}

export default FunctionContextC

