import { useState, useEffect } from 'react';
import '../../home-page.css';

export default function ErrorButton() {
  const [stateChanged, changeState] = useState(0);

  useEffect(() => {
    if (stateChanged !== 0) {
      changeState(0);
      throw Error('Test Error!');
    }
  }, [stateChanged]);

  return (
    <div className="error-btn-container">
      <button
        className="error-btn"
        onClick={() => {
          changeState(stateChanged + 1);
        }}
      >
        Throw an Error
      </button>
    </div>
  );
}
