import React, { Component } from 'react';
import './index.css';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="cal-view">
          <div className="cal-process-view">처리 뷰</div>
          <div className="cal-input-view">입력 뷰</div>
        </div>
        <div className="cal-keypad">
          <button className="cal-key-btn">CE</button>
          <button className="cal-key-btn">C</button>
          <button className="cal-key-btn">#</button>
          <button className="cal-key-btn">/</button>
          <button className="cal-key-btn">7</button>
          <button className="cal-key-btn">8</button>
          <button className="cal-key-btn">9</button>
          <button className="cal-key-btn">X</button>
          <button className="cal-key-btn">4</button>
          <button className="cal-key-btn">5</button>
          <button className="cal-key-btn">6</button>
          <button className="cal-key-btn">-</button>
          <button className="cal-key-btn">1</button>
          <button className="cal-key-btn">2</button>
          <button className="cal-key-btn">3</button>
          <button className="cal-key-btn">+</button>
          <button className="cal-key-btn">#</button>
          <button className="cal-key-btn">0</button>
          <button className="cal-key-btn">.</button>
          <button className="cal-key-btn">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
