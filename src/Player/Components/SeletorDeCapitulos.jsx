function SeletorDeCapitulos(props){
    return (
            <button className="flex items-center space-x-3">
                <i className="bi bi-list-task text-6x1"></i>
                <h2>{`Capitulo ${props.capituloAtual}`}</h2> 
                 
                
            </button>
    )

}

export default SeletorDeCapitulos;