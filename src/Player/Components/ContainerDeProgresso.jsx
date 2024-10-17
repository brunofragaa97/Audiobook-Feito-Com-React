const ContainerProgresso = ({ tempoTotalFaixa, tempoAtualFaixa }) => {
          //FUNÇÃO IMPORTANTE QUE CONVERTE O TEMPO DO AUDIO EM UMA STRING LEGIVEL 00:00:00
  const formatarTempo = (tempoEmSegundos) => {
    const tempo = new Date(null);
    tempo.setSeconds(tempoEmSegundos);
    return tempo.toISOString().slice(11, 19);
  }
    return (
      <div className="w-[60%] bg-gray-200 rounded-full h-4 relative">
                            {/* Barra de progresso preenchida */}
        <div className="bg-green-400 h-4 rounded-full" 
        style={{ width: `${(tempoAtualFaixa * 100) / tempoTotalFaixa}%` }}></div>
        
                      {/* Marcador arredondado maior, centralizado */}
        <span 
          className="w-8 h-8 bg-green-400 border-2 border-black rounded-full absolute top-[-7px]" 
          style={{
          left: `${(tempoAtualFaixa * 100) / tempoTotalFaixa}%`, // Ajusta a posição do marcador com base no progresso
          transform: "translateX(-50%)",}}></span>
        
                                 {/* Texto do tempo */}
        <div className="text-white absolute top-5 left-0 transform -translate-x-0">
          <p className="text-sm">{formatarTempo(tempoAtualFaixa)}</p>
        </div>
        <div className="text-white absolute top-5 right-0 transform translate-x-0">
          <p className="text-sm">{formatarTempo(tempoTotalFaixa)}</p>
        </div>
      </div>
    );
  };
  
  export default ContainerProgresso;
  