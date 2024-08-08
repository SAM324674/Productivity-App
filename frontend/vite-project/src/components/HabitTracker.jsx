import React, { useState } from 'react';
import HabitBoard from './habit tracker components/HabitBoard';
import { IoMdAdd } from "react-icons/io";
const HabitTracker = () => {
  const [habitsList, setHabitsList] = useState([]);
  const [habitName, setHabitName] = useState('');
  const [selectedHabitName, setSelectedHabitName] = useState('');

  const addHabit = () => {
    if (habitName !== '') {
      setHabitsList([...habitsList, { name: habitName, days: Array(30).fill(false) }]);
      setHabitName('');
    }
  };

  const removeHabit = (habitName) => {
    setHabitsList(habitsList.filter(habit => habit.name !== habitName));
    if (selectedHabitName === habitName) {
      setSelectedHabitName('');
    }
  };

  const selectHabit = (habitName) => {
    setSelectedHabitName(habitName);
  };

  const updateHabitDays = (habitName, days) => {
    setHabitsList(habitsList.map(habit => {
      if (habit.name === habitName) {
        return { ...habit, days };
      }
      return habit;
    }));
  };

  const selectedHabit = habitsList.find(habit => habit.name === selectedHabitName);

  return (
    <>
      <h2 className='text-xl font-bold p-2'>Habit Tracker</h2>
      <div className='flex gap-3 mb-3'>
        <input 
          type="text" 
          value={habitName} 
          onChange={(e) => setHabitName(e.target.value)} 
          placeholder="Enter habit name" 
          className='w-[90%] p-2 rounded-lg'
        />
        <button onClick={addHabit} className='bg-pink-300 shadow-lg p-3 rounded-lg hover:bg-pink-800 hover:text-white'><IoMdAdd /></button>
      </div>
      <div>
        {/* <h3>Available Habits</h3> */}
        <select onChange={(e) => selectHabit(e.target.value)} value={selectedHabitName} className='p-3 rounded-lg w-[100%] mb-3'>
          <option value="" >Select a habit</option>
          {habitsList.map((habit, index) => (
            <option key={index} value={habit.name}>{habit.name}</option>
          ))}
        </select>
        {/* <ul>
          {habitsList.map((habit, index) => (
            <li key={index}>
              <span onClick={() => selectHabit(habit.name)}>{habit.name}</span>
              <button onClick={() => removeHabit(habit.name)}>Remove</button>
            </li>
          ))}
        </ul> */}
      </div>
      <div>
        {/* <h3>Remove Habits</h3> */}
        <select onChange={(e) => removeHabit(e.target.value)} value="" className='p-3 rounded-lg w-[100%] mb-3'>
          <option value="">Select a habit to remove</option>
          {habitsList.map((habit, index) => (
            <option key={index} value={habit.name}>{habit.name}</option>
          ))}
        </select>
      </div>
      {selectedHabit && <HabitBoard habit={selectedHabit} updateHabitDays={updateHabitDays} />}
    </>
  );
};

export default HabitTracker;
