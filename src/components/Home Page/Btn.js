import React from 'react';

function Btn(props) {
  return (
    <button className="w-1/6 h-1/10 bg-yellow-500 rounded-lg">
      <span className="text-purple-800 text-2xl font-bold block w-full h-full">
        {props.text}
      </span>
    </button>
  );
}

export default Btn;
