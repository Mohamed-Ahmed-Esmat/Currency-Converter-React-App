import React from 'react';

function Btn(props) {
  return (
    <button className="px-4 py-2 bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50">
      <span className="text-purple-800 text-2xl font-bold">
        {props.text}
      </span>
    </button>
  );
}

export default Btn;