import React, {useEffect, useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';

const alanKey = process.env.REACT_ALAN_AI_KEY;

const App = () => {

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
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App;