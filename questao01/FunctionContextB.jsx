
import { useContext } from "react"
import ColorTheme from "./MyColorContext"

const FunctionContextB = () => {

    const cores = useContext(ColorTheme);
    return (
        <div>
            <h1 style={{ backgroundColor: cores.bkgB }}>
                Contexto B
            </h1>
        </div>

    )
}

export default FunctionContextB