import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Hello from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const person = {
  name = 'Carl Sagan',
  age = 62
};
root.render(
  <StrictMode>
    <Hello name={person.name} />
  </StrictMode>
);
