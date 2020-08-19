import React, { useState, useCallback } from 'react';
// import IF, { THEN, ELSE } from './Logics/IF';
// import UNLESS from "./Logics/Unless";
import FOREACH from './Logics/ForEach';
import IF, { THEN, ELSE } from './Logics/IF';
import SWITCH, { CASE, DEFAULT } from './Logics/Switch';



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
      {/* <IF variable={true} logic="===" check={true}>
        <THEN>
          <FOREACH data={['red', 'blue', 'green']} as={"color"}>
            <H1 color />
          </FOREACH>
        </THEN>
        <ELSE>
          not true
        </ELSE>
      </IF> */}
      <SWITCH variable={'hosein'}>
        <CASE case="ali">render ali</CASE>
        <CASE case="reza">render reza</CASE>
        <DEFAULT>render if no casee found</DEFAULT>
      </SWITCH>
    </div>
  );
}

export default App;
