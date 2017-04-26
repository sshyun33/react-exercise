import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Calculator from './calculator';

ReactDOM.render(
  <div>
    <div className="title">계산기</div>
    <Calculator />
  </div>,
  document.getElementById('root')
);
