import React, { useState, useEffect } from 'react';

const HabitBoard = ({ habit, updateHabitDays }) => {
  const [days, setDays] = useState(habit.days);

  useEffect(() => {
    setDays(habit.days);
  }, [habit]);

  const toggleDay = (dayIndex) => {
    const newDays = days.map((day, index) => (index === dayIndex ? !day : day));
    setDays(newDays);
    updateHabitDays(habit.name, newDays);
  };

  return (
    <div >
      <h3 className='text-lg font-semibold mb-3'>{habit.name}</h3>
      <div className="grid grid-cols-7 gap-6">
        {days.map((completed, index) => (
          <div
            key={index}
            className={`rounded-lg h-12 w-12 cursor-pointer flex items-center justify-center ${completed ? 'bg-blue-200' : 'bg-pink-200'}`}
            onClick={() => toggleDay(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitBoard;
