/*
Modifique o exercício 02 criando uma variável de estado “contador” e um
botão que ao clicar modifica a variável contador somando 1 em seu valor.
Essa variável é então compartilhada via Context.
*/
import { Variavel } from "./Contexto";
import { useState } from "react";
import ComponenteFilho from "./ComponenteFilhoEstado";

const ComponenteAvoEstado=() =>{

    let url= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [contador, setContador] = useState(1)

    const incrementarContador = () =>{
        setContador(contador => contador + 1);
    }

    return(
        <>

        <img src= {url+contador+".png"}
              alt="Pokemon"
              width={200}
            />
        
            <Variavel.Provider value={contador}>
                <ComponenteFilho />
            </Variavel.Provider>

        <button onClick={() => {incrementarContador()}}>
            Incrementar Contador
        </button>


            
        </>
        
    );
}

export default ComponenteAvoEstado