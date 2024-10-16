const ContainerProgresso = ({ tempoTotalFaixa, formatarTempo }) => {
    return (
      <div className="w-[60%] bg-gray-200 rounded-full h-4 relative">
        {/* Barra de progresso preenchida */}
        <div className="bg-green-400 h-4 rounded-full" style={{ width: '40%' }}></div>
        
        {/* Marcador arredondado maior, centralizado */}
        <span 
          className="w-8 h-8 bg-green-400 border-2 border-black rounded-full absolute top-[-7px] left-[40%] transform -translate-x-1/2" 
        ></span>
        
        {/* Texto do tempo */}
        <div className="text-white absolute top-5 left-0 transform -translate-x-0">
          <p className="text-sm">00:00</p>
        </div>
        <div className="text-white absolute top-5 right-0 transform translate-x-0">
          <p className="text-sm">{tempoTotalFaixa}</p>
        </div>
      </div>
    );
  };
  
  export default ContainerProgresso;
  