import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const colorsOnGoogleName = [
  '#4284F3',
  '#EA4435',
  '#FABD03',
  '#4284F3',
  '#33A852',
  '#EA4435',
];

interface Props {
  name: string;
}

export const GoogleName: React.FC<Props> = ({ name }) => {
  return (
    <div className="google-name">
      {name.split('').map((letter, ind) => (
        <p
          key={uuidv4()}
          className="google-name__letter"
          style={{ color: colorsOnGoogleName[ind % 6] }}
        >
          {letter}
        </p>
      ))}
    </div>
  );
};
