import React from 'react';

const Window = props =>
  <div class="window">
    <div class="window__title">
      <div class="window__buttons">
        <button class="window__button window__button--minimize"><span class="fa fa-minus">_</span></button>
        <button class="window__button window__button--expand"><span class="fa fa-square-o">□</span></button>
        <button class="window__button window__button--close"><span class="fa fa-times">X</span></button>
      </div>
      <h1> {props.title} </h1>
    </div>
    <ul class="toolbar">
      <li><u>F</u>ile</li>
      <li><u>E</u>dit</li>
      <li><u>V</u>iew</li>
      <li><u>H</u>elp</li>
    </ul>

    {props.children}

    <div class="statusbar">
      <div class="left">3 object(s)</div>
      <div class="right">&nbsp;</div>
    </div>
  </div>;

export default Window;
