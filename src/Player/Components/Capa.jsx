function Capa(props){
    return <img 
                className="w-80 h-80 rounded-xl " 
                src={props.capaLivro} 
                alt={props.textoAlternativo} />

}
export default Capa;