import { Variavel } from "./Contexto"
import { useContext } from "react";

const ComponenteNeto=() =>{

    let url= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const contador = useContext(Variavel) + 1
    return(
        <>
            <img src= {url+contador+".png"}
              alt="Pokemon"
              width={200}
               />
        </>
        
    );
}

export default ComponenteNeto