import "./css/style-image.css"
import "./css/style-home.css";
function Home(){
    return(
        <main className="main_home">
            <div className="divwelcome">
            <div>
                <a className="welcome">Seja bem-vindo ao meu portfólio</a>
            </div>
            <div>
                <a className="person">I/J</a>
                <a className="img_me"></a>
            </div>
            </div>
        </main>
    );
}

export default Home;