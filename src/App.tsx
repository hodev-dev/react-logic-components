import React, { useState, useCallback } from 'react';
// import IF, { THEN, ELSE } from './Logics/IF';
// import UNLESS from "./Logics/Unless";
import FOREACH from './Logics/ForEach';



const H1 = (props: any) => {
  console.log({ props });
  const { color } = props;
  return (
    <div>
      <h1>{color}</h1>
      <h2>test</h2>
    </div>
  )
}

function App() {

  return (
    <div>
      <FOREACH data={['red', 'blue', 'green']} as={"color"}>
        <H1 />
      </FOREACH>
    </div>
  );
}

export default App;
