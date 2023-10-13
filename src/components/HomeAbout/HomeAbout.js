import './HomeAbout.css';

export default function HomeAbout() {
    return (
        <div className='homeAbout'>
            <div className='bigName'>
                <p>Hi, my name is</p>
                <h1>Kelvin Njihia</h1>
                <h4>
                    <span className='devTags'>&lt;</span>
                    software developer
                    <span className='devTags'>/&gt;</span>
                </h4>
                <h2>I build beautiful and functional web apps</h2>
            </div>

            <div className='myAbouts'>
                {/* <-- School --> */}
                <div className='school'>
                    <p className='schoolTitle'><span className='devTags openTag'>&lt;</span>School<span className='devTags closeTag'>/&gt;</span></p>
                    <ul className='allSchools'>
                        <li className='eachSchool'>
                            <h4>ALX Africa</h4>
                            <p>Software Engineering</p>
                            <span className='date'>(2023 - 2024)</span>
                        </li>

                        <li className='eachSchool'>
                            <h4>eMobilis Technical Institute</h4>
                            <p>Web Development & Android Programming</p>
                            <span className='date'>(2022)</span>
                        </li>

                        <li className='eachSchool'>
                            <h4>Kenyatta University </h4>
                            <p>Bachelor of Arts Counselling Psychology</p>
                            <span className='date'>(2014 - 2019)</span>
                        </li>
                    </ul>
                </div>

                {/* <-- Skills --> */}
                <div className='skills'>
                    <p className='skillsTitle'><span className='devTags openTag'>&lt;</span>Skills<span className='devTags closeTag'>/&gt;</span></p>
                    <ul className='allSkills'>
                        <li className='eachSkill'>
                            <h4>Frontend</h4>
                            <p>React, JavaScript, Tailwind CSS, HTML & CSS</p>
                        </li>

                        <li className='eachSkill'>
                            <h4>Backend</h4>
                            <p>Python, NodeJS & C</p>
                        </li>

                        <li className='eachSkill'>
                            <h4>Databases</h4>
                            <p>MySQL & MongoDB</p>
                        </li>

                        <li className='eachSkill'>
                            <h4>Extras</h4>
                            <p>Linux, Bash, Shell & DevOps</p>
                        </li>
                    </ul>
                </div>

                {/* Hobbies */}
                <div className='hobbies'>
                    <p className='hobbiesTitle'><span className='devTags openTag'>&lt;</span>Hobbies<span className='devTags closeTag'>/&gt;</span></p>
                    <p className='hobbiesList'>
                        Painting, Basketball, cycling, Building PCs and distro hopping in Linux
                    </p>
                </div>
            </div>
        </div>
    );
}