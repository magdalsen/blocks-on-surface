import { ChangeEvent, useState } from 'react';
import './App.css'

function App() {
  const [value, setValue] = useState<number[]>([]);
  const [newArr, setNewArr] = useState<number[]>([]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    trap(value);
  }
  console.log(newArr);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const toSplit = e.target.value;
    const splited = Array.from(toSplit.toString()).map(Number);
    setValue(splited);
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
    // console.log(Math.min(maxLeft, maxRight) - heights[i]);
    setNewArr(prev=>[...prev, Math.min(maxLeft, maxRight) - heights[i]]);
  }

  return res;
}

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter numbers:
          <div>
          <input 
            type="number" 
            onChange={(e) => handleChange(e)}
          />
          </div>
        </label>
        <input type="submit" />
      </form>
    </div>
      <div>{value.map((el) => (
        <div>{el}</div>
      ))}</div>
    </>
  )
}

export default App
