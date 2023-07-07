import React, {useEffect, useState} from 'react'

function Profile( { user } ) {

    const phrases = [
        "Get things done!",
        "Stay organized and productive!",
        "Plan your way to success!",
        "Make each day count!",
        "Create and conquer!",
        "Embrace the power of productivity!",
    ];  
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
      }, 3000);
  
      return () => clearInterval(timer); // Clean up the timer when the component unmounts
  
    }, []); // Empty dependency array to only run the effect once on component mount
  
    const currentPhrase = phrases[currentPhraseIndex];

    return (
        <div>
            <h1 className='text-4xl font-medium'>👋 Hello {user.name} {currentPhrase} </h1>
        </div>
    )
}

export default Profile
