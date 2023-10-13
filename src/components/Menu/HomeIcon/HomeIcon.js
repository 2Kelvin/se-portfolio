import './HomeIcon.css'
import { FaHome } from "react-icons/fa";

export default function HomeIcon() {
    return (
        <div className='iconContainer'>
            <FaHome style={{color: '#D8549D', fontSize: '30px'}}/>
        </div>
    );
}