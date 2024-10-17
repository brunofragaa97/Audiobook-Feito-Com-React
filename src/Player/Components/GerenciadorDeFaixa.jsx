const GerenciadorDeFaixa = ({ faixa, referencia, setTempoTotal, setTempoAtual }) => {
    return (
        <audio
            src={faixa}
            ref={referencia}
            onLoadedMetadata={() => setTempoTotal(referencia.current.duration)
            }
            onTimeUpdate={() => setTempoAtual(referencia.current.currentTime)}
        />
    );
};

export default GerenciadorDeFaixa;
