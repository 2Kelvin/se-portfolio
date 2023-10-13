import './Card.css';
import {FaGithubAlt} from 'react-icons/fa'

function Card(appType, title, content) {
    return (
        <div className="card">
            <div className="flexCardHeading">
                <h4 className='appType'>{appType}</h4>
                <img className="githubIcon" src={FaGithubAlt} alt="github icon link" />
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
            <div className='langTags'></div>
        </div>
    );
}

export default Card;