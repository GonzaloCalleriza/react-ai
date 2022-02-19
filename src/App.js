import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const App = () => {

    const alanKey = process.env.REACT_ALAN_AI_KEY;

    useEffect(() =>{
        alanBtn({
            key: alanKey,
            onCommand: ({command}) => {
                if(command === 'testCommand') {
                    alert('This code was executed');
                }
            }
        })
    }, [])

    return(
        <div>
            React Alan AI News Application
        </div>
    )
}

export default App;