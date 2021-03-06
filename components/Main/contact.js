
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
export default (props) => {
    return <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
            <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
                <li><input type="submit" value="Send Message" className="special" /></li>
                <li><input type="reset" value="Reset" /></li>
            </ul>
        </form>
        <ul className="icons">
            <li><a href="#">
                <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="#">
                <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="#">
                <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="#">
                <FontAwesomeIcon icon={faGithub} />
            </a></li>
        </ul>
        {props.close}
    </article>

}
