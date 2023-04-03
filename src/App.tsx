import { useState } from 'react'
import './App.css'
import './flip.css'

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => setIsFlipped(!isFlipped);

  return (
    <div>
      zzz
      <div className="scene">
        <div className={`card ${isFlipped && 'is-flipped'}`} onClick={flip}>
          <div className="card__face card__face--front">front</div>
          <div className="card__face card__face--back">back</div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:'300px', height:'300px'}} />
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
