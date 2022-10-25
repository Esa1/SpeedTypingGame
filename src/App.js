import React, {useState, useEffect} from "react"
/* cd c:/GIT/react_advance/speed_typing_game
/**
 * Challenge:
 * 
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 */

function App() {
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(5)
    const [isRunning, setIsRunning] = useState(false)

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    /*function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }*/
    
    function handleStart() {
        setIsRunning(prev => !prev)
    }

    useEffect(() => {
        if(isRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        }
        else if (timeRemaining == 0) {
//            setTimeRemaining(5)
            setIsRunning(false)
        }
    }, [isRunning, timeRemaining])
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={handleStart}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}
/* onClick={() => console.log(calculateWordCount(text))}*/
export default App
