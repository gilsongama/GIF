import React, {useState} from 'react'


function MostraGif() {
    const [mostraIMG, statusIMG] = useState(false)

    const mostra = () =>{
        statusIMG(true)
    }

    const oculta = () =>{
        statusIMG(false)
    }
    return(
    <>
        <div className="button">
            <button onClick={mostra}>Clique e veja!!</button> <br></br>
        </div>
    
        
        <div className="image">
            {mostraIMG && <img src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif" onClick={oculta} />}
        </div>
    </>
    )   
}

export default MostraGif

