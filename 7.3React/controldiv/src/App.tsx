import React, { useRef, useState } from 'react';
import Taost from './components/Toast'
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#FFF')
  const [borderColor, setBorderColor] = useState('#ccc')
  const [show, setShow] = useState(true)
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(200)

  const bgColorInput = useRef<HTMLInputElement>(null)
  const bdColorInput = useRef<HTMLInputElement>(null)

  function bgColorHandler() {
    if (bgColorInput.current) {
      setBgColor(bgColorInput.current.value)
    }
  }

  function bdColorHandler() {
    if (bdColorInput.current) {
      setBorderColor(bdColorInput.current.value)
    }
  }

  const style = {
    backgroundColor: bgColor,
    borderColor,
    display: show ? 'block' : 'none',
    width,
    height
  }

  function handlerClick() {
    Taost.info('今天天气不错', 1000, true)
  }
  
  return (
    <div id="control">
      <button onClick={handlerClick}>Toast mask</button>
      <div className="control_wrap">
        <div><button className="show" onClick={() => setShow(!show)}>show/hide</button></div>
        <div>
          <input ref={bgColorInput} className="bgcolor_input" type="text" placeholder="input background color" />
          <button className="bgcolor_btn" onClick={bgColorHandler}>sure</button>
        </div>
        <div>
          <input ref={bdColorInput} type="text" className="bdcolor_input" placeholder="input border color" />
          <button className="bdcolor_btn" onClick={bdColorHandler}>sure</button>
        </div>
        <div>
          <span>width：</span>
          <button className="width_reduce" onClick={() => setWidth(width - 5)}>-5</button>
          <button className="width_add" onClick={() => setWidth(width + 5)}>+5</button>
        </div>
        <div>
          <span>height：</span>
          <button className="height_reduce" onClick={() => setHeight(height - 5)}>-</button>
          <input type="text" className="height_input" readOnly value={height} />
          <button className="height_add" onClick={() => setHeight(height + 5)}>+</button>
        </div>
        </div>
      <div className="target" style={style}></div>
    </div>
  );
}

export default App;
