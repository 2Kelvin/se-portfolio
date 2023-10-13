import './Sidebar.css'
import HomeIcon from '../HomeIcon/HomeIcon';
import ProjectsIcon from '../ProjectsIcon/ProjectsIcon';
import SocialsIcon from '../SocialsIcon/SocialsIcon';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <HomeIcon/>
            <ProjectsIcon/>
            <SocialsIcon/>
        </div>
    );
}