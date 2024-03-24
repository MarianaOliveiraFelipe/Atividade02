import React, { useContext } from "react";
import ColorTheme from "./MyColorContext"

const FunctionContextD = () => {
    
        const cores = useContext(ColorTheme);
    return (
        <div>
            <h1 style={{ backgroundColor: cores.bkgD }}>
                Contexto D
            </h1>
        </div>

    )
}

export default FunctionContextD