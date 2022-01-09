import Header from '../components/Header/header';
import Home from '../components/Home/Home';
import Cubo from '../components/Cube/Cube';
import Resumo from '../components/Resumo/Resumo';
import Contato from '../components/Contato/Contato';
import Midiasociais from '../components/Midiasociais/Midiasociais';
// import Projetos from '../components/Projetos/Projeto';
// import ProjetosVenda from '../components/ProjetosVenda/Projeto';
// import ProjetosVendidos from '../components/ProjetosVendidos/Projeto';

function App(){
    return(
    <>
        <Header />
        <Home />
        <Resumo />
        <Cubo />
        <Contato />
        <Midiasociais />
        {/* <Projetos/>
        <ProjetosVenda/>
        <ProjetosVendidos/> */}
    </>
    );
}

export default App;
