import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import './App.css';
import _ from 'lodash';
import './App.css';
import React from 'react';

function App() {
  const [value, setValue] = useState<number[]>([]);
  const [newArr, setNewArr] = useState<number[]>([]);
  const [myFinalArr, setMyFinalArr] = useState<ReactElement[]>([]);
  const [sumAddedBlocks, setSumAddedBlocks] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    value.length === 0 ? alert('Write a number!') :
    trap(value) &&
    setDisabled(prev=>!prev);
  }

  const resetInputData = () => {
    setDisabled(prev=>!prev);
    setValue([]);
    setNewArr([]);
    setMyFinalArr([]);
    setSumAddedBlocks(0);
  }
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const toSplit = e.target.value;
    const splited = Array.from(toSplit.toString()).map(Number);
    splited.length === 0 ? resetInputData() : setValue(splited);
  }

const trap = (heights: number[]) => {
  let res = 0;
  const LEN = heights.length;

  for (let i = 1; i < LEN - 1; i++) {
    let maxLeft = 0
    let maxRight = 0;

    for (let j = i; j >= 0; j--) {
      maxLeft = Math.max(maxLeft, heights[j]);
    }

    for (let j = i; j < LEN; j++) {
      maxRight = Math.max(maxRight, heights[j]);
    }

    res += Math.min(maxLeft, maxRight) - heights[i];
    setNewArr(prev=>[...prev, Math.min(maxLeft, maxRight) - heights[i]]);
  }
  setSumAddedBlocks(res);
  return res;
}

useEffect(() => {
  const finalArr: ReactElement[] = [];
  const firstArrEl = value.slice(0,1);
  const firstArrElFinal: ReactElement[] = [];
  
  value.slice(1).map((el, i) => {
    isNaN(newArr[i]) || newArr[i] === undefined ?
    finalArr.push(
      <div className='block' key={Math.random()}>
      {_.times(el+0, (i) => (
         <div className='block-one' key={i}></div>
      ))}
      </div>
    )
    :
    finalArr.push(
      <div className='block' key={Math.random()}>
      {_.times(el, (i) => (
        <div className='block-one' key={i}></div>
      ))}
      {_.times(newArr[i], (i) => (
        <div className='block-one block-drop' key={i}></div>
      ))}
      </div>
    )
  });

firstArrElFinal.push(<div className='block' key={Math.random()}>
  {_.times(firstArrEl[0], (i) => (
    <div className='block-one' key={i}></div>
  ))}
</div>)

  setMyFinalArr(firstArrElFinal.concat(finalArr));
}, [newArr]);

  return (
    <>
      <div className='block-nav'>
        <div className='block-nav__el'>
          <form onSubmit={handleSubmit}>
            <label>Enter numbers:</label>
            <div className='label-text'>If you want to check another number, remove completly old one and then write new one</div>
              <div>
              <input 
                type="number" 
                onChange={(e) => handleChange(e)}
              />
              </div>
            <button data-cy="sendButton" type="submit" disabled={disabled}>Send</button>
          </form>
        </div>
        <div className='block-nav__el'>
          Sum of water drops: <div data-cy="sumAddedBlocks">{sumAddedBlocks}</div>
        </div>
      </div>
      <div className='block-container'>
        {myFinalArr.map((el) => (
          <React.Fragment key={Math.random()}>{el}</React.Fragment>
        ))}
      </div>
    </>
  )
}

export default App
