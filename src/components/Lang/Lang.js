import './Lang.css'

function Languages(progLang, langIcon) {
    return (
        <div className='langContents'>
            {/*
         use fav icon for circle
         depending on programming language use their respective color...
         ...for the circle and the paragraph color  
         */}
            <img className='circle color' src={langIcon} alt='circle' />
            <p>{progLang}</p>
        </div>
    );
}

export default Languages;