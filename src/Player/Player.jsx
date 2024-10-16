import { useState, useRef, useEffect } from "react";
//import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Capa from "./Components/Capa";
import TituloLivro from "./Components/TituloLivro";
import SeletorDeCapitulos from "./Components/SeletorDeCapitulos";
import BotoesControle from "./Components/BotoesDeControle";
import livro from "../assets/livros/livro.js";
import GerenciadorDeFaixa from "./Components/GerenciadorDeFaixa.jsx";
import ContainerProgresso from "./Components/ContainerDeProgresso.jsx";


                            //HOOKS DE MUDANÇA DE ESTADO
function Player() {
  // Estados para controle de play/pause e faixa atual
  const [tocar, setTocar] = useState(false);
  const [faixaAtual, setFaixaAtual] = useState(0);
  const [tempoTotalFaixa, setTempoTotal] = useState(0);
  const [tempoAtualFaixa, setTempoAtual] = useState(0);
  const refTagAudio = useRef(null);

  useEffect (() => {
    if(tocar){
      playNaFaixa();
    }
  }, [
    faixaAtual
  ])
                                      //FIM HOOKS

  const passarFaixa = () => {
   if(faixaAtual === 0){
    setFaixaAtual(+1);
   }else{
    setFaixaAtual(0);
   }
  }
  // Função para dar play
  function playNaFaixa() {
    setTocar(true);
    refTagAudio.current.play();
  };

  // Função para dar pause
  function pauseNaFaixa() {
    setTocar(false);
    refTagAudio.current.pause();
  };

  // Informações do livro, incluindo capítulos
  const informacoesLivro = {
    nomeLivro: "Memórias Póstumas de Brás Cubas",
    autorLivro: "Machado de Assis",
    totalCapitulos: livro.length, // Total de capítulos baseado no array Livro
    capitulo: livro, // Passa o array de capítulos corretamente
    capaLivro:
      "https://m.media-amazon.com/images/I/815u+SBDpJL._AC_UF1000,1000_QL80_.jpg",
    textoAlternativo: "Capa do livro Memórias Póstumas de Brás Cubas",
  };

  return (
    <div className="bg-gradient-to-b from-green-700 to-black h-screen flex-col flex items-center">
      <TituloLivro nomeLivro={informacoesLivro.nomeLivro} />
      <Capa capaLivro={informacoesLivro.capaLivro} />
      <div className="text-white p-4">
        <SeletorDeCapitulos capituloAtual={faixaAtual + 1} />
      </div>
      <GerenciadorDeFaixa
        faixa={informacoesLivro.capitulo[faixaAtual]} // Faixa atual com base no array de capítulos
        referencia={refTagAudio} // Referência ao áudio
        setTempoTotal={setTempoTotal}
        setTempoAtual={setTempoAtual}
      />
      
      <ContainerProgresso 
        tempoTotalFaixa={tempoTotalFaixa} 
        tempoAtualFaixa={tempoAtualFaixa}/>
      
      <div className="flex text-white text-center p-8">
        <BotoesControle
          tocar={tocar}
          playNaFaixa={playNaFaixa}
          pauseNaFaixa={pauseNaFaixa}
          passarFaixa={passarFaixa}
        />{" "}
        {/* Passa as funções separadas */}
      </div>
    </div>
  );
}

export default Player;
