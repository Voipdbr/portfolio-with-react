import './css/Contato.css';
import React, {useState} from 'react';

function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dates = new Date().getTime();
  const [date, setDate] = useState(dates);
  const [oldDate, setOlddate] = useState(0);
  const [counterS, setCounterS] = useState(0);

  const mailer =  async (nome: string, email: string, mensagem: string) => {
    const fetcher = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        mensagem: mensagem
      })
    }
    fetch('http://br-1-1-sec1-f1f70ec40aaa556905d4a030501c0ba4.ismaeljose.site/mail', fetcher)
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          console.log(err)
        })
  }

  function HTML(){
    if(counterS == 0){
    return(
      <>
      </>
    )
    }else{
      return(
        <>
        <h2 className="contact-alert">Aguarde {counterS} para enviar um novo e-mail...</h2>
        </>
      )
    }
  }

return(
  <>
  <main id="Contact">
    <div className="contact">
      <table>
        <h1 className="contact-title">Contato</h1>
        {HTML()}
        <tr className="contact-text">
          <td>
            Nome:
          </td>
        </tr>
        <tr>
          <td>
            <input className="contact-inputs" placeholder='Nome da pessoa...' onChange={e => {return setName(e.target.value)}}></input>
          </td>
        </tr>
        <tr className="contact-text">
          <td>
            E-mail:
          </td>
        </tr>
        <tr>
          <td>
            <input className="contact-inputs" placeholder='E-mail de destino...' onChange={e => {return setEmail(e.target.value)}}></input>
          </td>
        </tr>
        <tr className="contact-text" style={{textAlign: "center"}}>
          <td>
            Conteúdo:
          </td>
        </tr>
        <tr>
          <td>
            <textarea className="contact-conteudo" placeholder='Escreva algo aqui...' onChange={e => {return setMessage(e.target.value)}}></textarea>
          </td>
        </tr>
        <tr>
          <td>
            <button className="contact-btn" onClick={() => {
              const date1 = new Date().getTime();
              const calc = date + 30000;
              if(date1 >=  oldDate){
              setOlddate(calc);
              setDate(date1);
              mailer(name, email, message);
              }else{
              setCounterS(new Date(oldDate - date1).getSeconds())
              }
              }}><span>Enviar</span></button>
          </td>
        </tr>
      </table>
    </div>
  </main>
  </>
);
}

export default Contato;
