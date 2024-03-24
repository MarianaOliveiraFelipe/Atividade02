import { useContext } from "react"
import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {
    const cores = useContext(ColorTheme);
    return (
        <div>
            <h1 style={{ backgroundColor: cores.bkgA }}>
                Contexto A
            </h1>
            <FunctionContextB />
            <FunctionContextC />
        </div>

    )
}

export default FunctionContextA
