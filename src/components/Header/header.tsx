import toggleClass from "./ts/navbar_bgapp";
import settingClass from "./ts/settings";
import "./css/style-bg.css"
import "./css/style-initial.css"
import "./css/style-li-bar.css"
import "./css/style-settings.css"

function Header(){
    return(
        <header className="page-header">
        <div className="active">
            <div className="navbar_links">
                <div className="navbar_links1">
                    <div className="rit" onClick={() => toggleClass()}/>
                </div>
                <ul className="bg_noaccept open">
                    <li><a href="/" className="i">Inicio</a></li>
                    <li><a href="/" className="i">Resumo</a></li>
                    <li><a href="/" className="i">Projetos</a></li>
                    <li><a href="/" className="i">Contato</a></li>
                    <li><a href="/" className="i">Mídias Sociais</a></li>
                    <li><a href="/" className="i">Página de Vídeos</a></li>
                </ul>
            </div>
        </div>
        <script src="/js/navbar_bgapp.js"></script>
        <div className="navbar">
            <div className="ism_bar">
                <a title="Home" href="/" className="img-responsive navbar__logo ism-nav-brand"> </a>
            </div>
            <div className="active">
                <div className="navbar_links">
                    <div className="gear">
                        <div className="gear gearicon" onClick={() => settingClass()}>⚙</div>
                    </div>
                    <div className="navbar_links1">
                        <div className="rit" onClick={() => toggleClass()}>
                            <div className="burger">
                                <div className="ct-01"></div>
                                <div className="ct-02"></div>
                                <div className="ct-03"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="noactive">
                <div className="navbar_links">
                    <div className="navbar_links1">
                        <div className="rit" onClick={() => toggleClass()}>
                            <div className="burger ">
                                <div className="ct-01"></div>
                                <div className="ct-02"></div>
                                <div className="ct-03"></div>
                            </div>
                        </div>
                    </div>
                    <ul className="bg_noaccept">
                        <li><a href="/ " className="i">Inicio</a></li>
                        <li><a href="/ " className="i">Resumo</a></li>
                        <li><a href="/ " className="i">Projetos</a></li>
                        <li><a href="/ " className="i">Contato</a></li>
                        <li><a href="/ " className="i">Mídias Sociais</a></li>
                        <li><a href="/ " className="i">Página de Vídeos</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <script src="/js/settings.js "></script>
        <div className="gear gearcset">
            <div className="geardisp">
                <ul>
                    <li>
                        <input type="checkbox"/>
                        Menu Superior / Lateral
                    </li>
                </ul>
            </div>
        </div>
    </header>
    );
}

export default Header;