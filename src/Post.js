import * as React from 'react';
import './style.css';

export default function Hello(props) {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <h3>It's time for tea!</h3>
    </div>
  );
}
