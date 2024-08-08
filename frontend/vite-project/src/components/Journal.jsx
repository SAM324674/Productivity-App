// src/Journal.js
import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
// import './Journal.css'; // Create a corresponding CSS file for styling

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [entryText, setEntryText] = useState('');

  const addEntry = () => {
    if (entryText) {
      const newEntry = { text: entryText, date: new Date().toLocaleDateString() };
      setEntries([newEntry, ...entries]);
      setEntryText('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className='text-xl font-bold p-3'>Journal</h2>
      <button onClick={addEntry} className='bg-pink-300 p-3 rounded-lg hover:bg-pink-800 hover:text-white'><IoMdAdd /></button>
      <textarea
        value={entryText}
        onChange={(e) => setEntryText(e.target.value)}
        placeholder="Write your entry here..."
        className='w-[90%] p-2 '
      ></textarea>
      
      <div className="flex flex-col items-start gap-3 border w-[90%]">
        {entries.map((entry, index) => (
          <div key={index} className="flex flex-col items-start ">
            <div className="text-lg font-semibold">{entry.date}</div>
            <div className="text-gray-600 font-semibold">{entry.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
