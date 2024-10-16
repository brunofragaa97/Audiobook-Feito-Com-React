const BotoesControle = (props) => {
  return (
    <div className="space-x-11">
      <button className="4x1">
        <i className="bi bi-skip-backward-circle text-6xl"></i>
      </button>
      <button className="4x1">
        <i className="bi bi-arrow-counterclockwise text-6xl"></i>
      </button>

      {/* BOTÃO DE PLAY/PAUSE */}
      <button
        className="4x1"
        onClick={() => {
          props.tocar ? props.pauseNaFaixa() : props.playNaFaixa(); // Alterna entre play e pause
        }}
      >
        <i
          className={`bi bi-${
            props.tocar ? "pause" : "play"
          } play-circle-fill text-6xl`}
        ></i>
      </button>

      <button className="4x1">
        <i className="bi bi-arrow-clockwise text-6xl"></i>
      </button>
      <button className="4x1"
         onClick={() => {
        props.passarFaixa() // Alterna entre play e pause
      }}
      >
        <i className="bi bi-skip-forward-circle text-6xl"></i>
      </button>
    </div>
  );
};

export default BotoesControle;
