import {dataVendidos} from "../../models/datas";
import {useState, useEffect} from 'react';

function ProjetosVendidos(){
    const [getLista, setLista] = useState([{}]);

    const dados = () => {
        setLista(dataVendidos);
    }
    console.log()
    useEffect(() => {
        dados();
    }, [dados])

    return(
    <>
    <main className="main_home">
        <div className="divprojetos">
        <table className="tableonly">
        <tr>
        <h1 className="divwelcome">
        <p>Projetos Vendidos</p>
        </h1>
        </tr>
        <tr>
        {getLista.length > 0 && getLista.map( (item: any) => {
        if(getLista.length == 1){
        return(
                        <>
                        <td className="td">
                        <div className="divheader">
                        <a className="divname"></a>
                        <a className="img_projects"/>
                        <a></a>
                        </div>
                        </td>
                        <td className="td">
                        <div className="divheader">
                        <a className="divname">{item.name}</a>
                        <img className="img_projects" src={item.image}/>
                        <a>{item.description}</a>
                        </div>
                        </td>
                        <td className="td">
                        <div className="divheader">
                        <a className="divname"></a>
                        <a className="img_projects"/>
                        <a></a>
                        </div>
                        </td>
                        </>
        )}else
        if(getLista.length >= 2){
            return(
                            <>
                            <td className="td">
                            <div className="divheader">
                            <a className="divname">{item.name}</a>
                            <img className="img_projects" src={item.image}/>
                            <a>{item.description}</a>
                            </div>
                            </td>
                            </>
            )}
        }
        )
        }
        </tr>
        </table>
        </div>
    </main>
    </>
    );

}

export default ProjetosVendidos;