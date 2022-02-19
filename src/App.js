import React, {useEffect, useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';

const alanKey = process.env.REACT_ALAN_AI_KEY;

const App = () => {

    const classes = useStyles();

    const [newsArticles, setNewsArticles] = useState([]);


    useEffect(() =>{
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) => {
                if(command === 'newHeadline') {
                    setNewsArticles(articles);
                }
            }
        })
    }, [])

    return(
        <div>
            <div className={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanlogo} alt='alan logo'/>
            </div>
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App;