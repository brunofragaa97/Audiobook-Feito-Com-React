const GerenciadorDeFaixa = ({ faixa, referencia, setTempoTotal }) => {
    return (
        <audio
            src={faixa}
            ref={referencia}
            onLoadedMetadata={() => setTempoTotal(referencia.current.duration)}
        />
    );
};

export default GerenciadorDeFaixa;
