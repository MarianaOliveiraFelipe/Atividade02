import { Variavel } from "./Contexto"
import ComponenteFilho from "./ComponenteFilho";

const ComponenteAvo=() =>{

    let url= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const contador = 1

    return(
        <>

            <img src= {url+contador+".png"}
                alt="Pokemon"
                width={200}
            />

            <Variavel.Provider value={contador}>
                <ComponenteFilho />
            </Variavel.Provider>

            
        </>
        
    );
}

export default ComponenteAvo