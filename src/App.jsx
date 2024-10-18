import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Player from "./Player/Player";
import TelaUpload from "./TelaUpload/TelaUpload"

function App() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-slate-700 flex flex-col justify-center items-center">
      <div className="bg-yellow-300">
        <h1 className="text-red-700"><strong>!!!APLICAÇÃO EM CONSTRUÇÃO POR BRUNO DE FRAGA!!!</strong></h1>
      </div>
      <div className="p-8">
        <button
          className="rounded-md text-white bg-black p-4"
          onClick={() => navigate("/player")} // Redireciona ao clicar
        >
          IR PARA O PLAYER
        </button>
      </div>
      <div>
        <button
          className="rounded-md text-white bg-black p-4"
          onClick={() => navigate("/pagina-de-upload-de-faixas")} // Redireciona ao clicar
        >
          IR PARA O GERENCIAMENTO DE ARQUIVO
        </button>
      
        
      </div>
      <div className="mt-[10%] bg-yellow-300">
        <h1 className="text-red-700"><strong>AMBIENTE DE DESENVOLVIMENTO</strong></h1>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/player" element={<Player />} />
        <Route path="/pagina-de-upload-de-faixas" element={<TelaUpload />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
