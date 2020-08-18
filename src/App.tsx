import React, { useState, useCallback } from 'react';
import IF, { THEN, ELSE } from './Logics/IF';
function App() {

  const [state, setState] = useState(false);
  const [something] = useState(false);

  const handleClick = useCallback(() => {
    setState(true);
  }, []);

  return (
    <div>
      <IF variable={state} logic={'==='} check={true}>
        <THEN>
          <h1>{state.toString()}</h1>
        </THEN>
        <ELSE>
          <h1>{state.toString()}</h1>
        </ELSE>
      </IF>
      <IF variable={something} logic={'==='} check={true}>
        <THEN>
          <h1>{state.toString()}</h1>
        </THEN>
      </IF>
      <button onClick={handleClick}>change State</button>
    </div>
  );
}

export default App;
