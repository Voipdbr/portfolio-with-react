import {resumoDados1} from '../../models/resumo1';
import {resumoDados2} from '../../models/resumo2';
import {resumoDados3} from '../../models/resumo3';
import './css/Resumo.css';
import React, {useState} from 'react';



function Resumo() {

  function Lang(){
    return(
      resumoDados1.map(data => {
        if(data.nameLanguages == "CSS"){
        return(
          <>
          <tr className="skill-dados">
            <td className="skill-nameskillcss">{data.nameLanguages}</td>
            <td className="skill-star">{data.star1}</td>
            <td className="skill-star">{data.star2}</td>
            <td className="skill-star">{data.star3}</td>
            <td className="skill-star">{data.star4}</td>
            <td className="skill-star">{data.star5}</td>
          </tr>
          </>
        )}else{
          return(
            <>
            <tr className="skill-dados">
              <td className="skill-nameskill">{data.nameLanguages}</td>
              <td className="skill-star">{data.star1}</td>
              <td className="skill-star">{data.star2}</td>
              <td className="skill-star">{data.star3}</td>
              <td className="skill-star">{data.star4}</td>
              <td className="skill-star">{data.star5}</td>
            </tr>
            </>
          )
        }})
    )
  }

  const [Langs] = useState(Lang());

  function Ferramentas(){
    return(
      resumoDados2.map(data => {
        return(
          <>
          <tr className="skill-dados">
            <td className="skill-nameskill">{data.nameFerramentas}</td>
            <td className="skill-star">{data.star1}</td>
            <td className="skill-star">{data.star2}</td>
            <td className="skill-star">{data.star3}</td>
            <td className="skill-star">{data.star4}</td>
            <td className="skill-star">{data.star5}</td>
          </tr>
          </>
        )})
    )
  }

  const [ferramentas] = useState(Ferramentas());

  function Bancos(){
    return(
      resumoDados3.map(data => {
        return(
          <>
          <tr className="skill-dados">
            <td className="skill-nameskill">{data.nameBancos}</td>
            <td className="skill-star">{data.star1}</td>
            <td className="skill-star">{data.star2}</td>
            <td className="skill-star">{data.star3}</td>
            <td className="skill-star">{data.star4}</td>
            <td className="skill-star">{data.star5}</td>
          </tr>
          </>
        )})
    )
  }

  const [bancos] = useState(Bancos());

  function resumo(){
    return(
        <React.Fragment>
          <h1 className="resumo-title" style={{"color": "white"}}>Resumo</h1>
          <tr>
            <td className="resumo-answer">
              <p>
              Ol?? meu nome ?? Ismael Jos??, quero agradecer desde j?? por visitar esse site e visualizar como est?? sendo o desenvolvimento
              do portf??lio.
              </p>
              <p>Mas indo para o objetivo desse bloco, <a className="question">como eu come??ei no ramo da programa????o?</a></p>
              <p>
                A minha inf??ncia sempre foi ligada a t??cnologia, pois meu pai sempre me orientou a buscar conhecimento na ??rea da computa????o, sendo assim,
                o primeiro contato com o computador foi aos meus 6 anos, onde meu pai montou e ligou o computador.
                Me lembro claramente da felicidade do dia, vendo o windows xp com uma tela de tubo ligando, foi a melhor sensa????o da minha vida.
              </p>
              <p><a className="question">Qual foi o primeiro servi??o de programa????o que prestei?</a></p>
              <p>
                O primeiro servi??o de programa????o foi aos 10 anos um desenvolvimento web, isso ??, fui o assistente de desenvolvimento de meu pai, 
                ajudei a desenvolver o www.orleir.com, um site onde ele colocava jogos, links externos para servi??os b??sicos e topicos com curiosidades,
                o primeiro programa de desenvolvimento web que me auxiliou foi o "DreamWeaver da Adobe" na ??poca o 4, era f??cil a utiliza????o do software, ele era flexivel e
                e me permitia fazer a programa????o com uma interface interessante.
              </p>
              <p>
              <a className="question">Qual o n??vel das habilidades em programa????o?</a> (Linguagens e Ferramentas)
              </p>
              <p>Segue abaixo</p>
              <div className="Skill">
                <h3 className="skill-title">Linguagens</h3>
                <table>
                    {Langs}
                </table>
                <h3 className="skill-title">Ferramentas</h3>
                <table>
                  {ferramentas}
                </table>
                <h3 className="skill-title">Banco de Dados</h3>
                <table>
                  {bancos}
                </table>
              </div>
            </td>
          </tr>
        </React.Fragment>
      );
    };

  const [data] = useState(resumo());
  
return(
  <>
  <main id="Summary">
    <div className="Resumo">
      <table>
        {data}
      </table>
    </div>
  </main>
  </>
);
}

export default Resumo;
