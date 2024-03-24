import React from "react";
import ColorTheme from "./MyColorContext";
import FunctionContextA from "./FunctionContextA";

class ClassA extends React.Component {
    render() {
        const cores = { bkgA: "green", bkgB: "red", bkgC: "yellow", bkgD: "blue" };

        return (
            <ColorTheme.Provider value={cores}>
                <div>
                    <FunctionContextA />
                    
                    
                </div>
            </ColorTheme.Provider>
        );
    }
}

export default ClassA;
