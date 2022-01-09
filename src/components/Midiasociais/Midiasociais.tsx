import './css/Midiasociais.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faLinkedin, faGithub, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';

function Midiasociais() {
return(
  <>
  <main id="SocialMedia">
    <div className="socialmedia">
      <table>
        <tr>
        <td><a href="https://www.facebook.com/VoipDevStation-100697565491151/"><FontAwesomeIcon icon={faFacebook} className="socialmedia-icon"/></a></td>
        <td><a href="https://www.linkedin.com/in/ismael-josé-983424209/"><FontAwesomeIcon icon={faLinkedin} className="socialmedia-icon"/></a></td>
        <td><a href="https://github.com/Voipdbr"><FontAwesomeIcon icon={faGithub} className="socialmedia-icon"/></a></td>
        <td><a href="https://youtube.com/Voipdbr"><FontAwesomeIcon icon={faYoutube} className="socialmedia-icon-youtube"/></a></td>
        <td><a href="https://twitter.com/voipdbr"><FontAwesomeIcon icon={faTwitter} className="socialmedia-icon"/></a></td>
        </tr>
      </table>
    </div>
  </main>
  </>
);
}

export default Midiasociais;
