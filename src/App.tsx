import { useState } from 'react'
import './App.css'

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
    </div>
  );
}

export default App;
