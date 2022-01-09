import "./css/style-image.css"
import "./css/style-home.css";
function Home(){
    return(
        <main id="Home">
            <div className="divwelcome">
            <div>
                <a className="welcome">Seja bem-vindo ao meu portfólio</a>
            </div>
            <div>
                <table className="tableHome">
                <h4 className="person">I/J</h4>
                <tr>
                <img className="img_me" src="./images/bismaplspl.jpg"></img>
                </tr>
                </table>
            </div>
            </div>
        </main>
    );
}

export default Home;