import react from 'react';
import { useState } from 'react';
import './8ball.css';

const defaultProps = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]


const EightBall = (props) => {
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");
    
    const [greenCount, setGreenCount] = useState(0);
    const [goldenrodCount, setGoldenrodCount] = useState(0);
    const [redCount, setRedCount] = useState(0);

    const handleClick = () => {
        
        
const randomChoice = Math.floor(Math.random() * defaultProps.length);
        const { msg, color } = defaultProps[randomChoice];
        setMsg(msg);
        setColor(color);

        if (color === "green") {
            setGreenCount(greenCount + 1);
          } else if (color === "goldenrod") {
            setGoldenrodCount(goldenrodCount + 1);
          } else if (color === "red") {
            setRedCount(redCount + 1);
          }
    }
    
    const reset = () => {
        setMsg("Think of a Question");
        setColor("black");
        setGreenCount(0);
        setGoldenrodCount(0);
        setRedCount(0);
    }   

    return (
        <div>
        <div className="EightBall" onClick={handleClick} style={{backgroundColor: color}}>
            <b>{msg}</b>
           
        </div>
         <button onClick={reset}> Reset </button>
         <p>Green: {greenCount}</p>
        <p>Goldenrod: {goldenrodCount}</p>
        <p>Red: {redCount}</p>
        </div>
    )
    }

    export default EightBall;