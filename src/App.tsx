import React, { useState } from 'react';
import { Coin } from './coin/Coin';
import { convertToCents } from './coin/convertToCents';
import CoinTable from './coin/CoinTable';



function App() {

  const [ value, setValue ] = useState<string>("0.01");
  const [ output, setOutput ] = useState<Coin[]>([]);

  const handleInput = (e:any) => setValue(`${e.target.value}`);
  
  return (
    <div className="App flex flex-col">
      <header className="App-header flex flex-col">
        <h1 className="prose lg:prose-xl">Dollars to Cents Converter</h1>
        <h2></h2>
      </header>
      <div>
        <form>
          <input onInput={handleInput} type="number" 
          placeholder="1.00" min={0.01} max={99999.99} />
          <button onClick={() => {
            setOutput(convertToCents(value))}
            }>Convert</button>
        </form>
      </div>
      {output.length >= 1 && <CoinTable coins={output} />}
    </div>
  );
}

export default App;
