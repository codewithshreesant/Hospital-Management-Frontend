import { useState } from 'react';

function Point() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="md:flex flex-col items-center hidden">
      <h1 className="text-3xl font-bold mb-6">A passion for putting patients first.</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <input
            type="radio"
            name="option"
            value="A Passion for Healing"
            checked={selectedOption === 'A Passion for Healing'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          <label htmlFor="A Passion for Healing">A Passion for Healing</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="option"
            value="5-Star Care"
            checked={selectedOption === '5-Star Care'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          <label htmlFor="5-Star Care">5-Star Care</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="option"
            value="All our best"
            checked={selectedOption === 'All our best'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          <label htmlFor="All our best">All our best</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="option"
            value="Believe in Us"
            checked={selectedOption === 'Believe in Us'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          <label htmlFor="Believe in Us">Believe in Us</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="option"
            value="A Legacy of Excellence"
            checked={selectedOption === 'A Legacy of Excellence'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          <label htmlFor="A Legacy of Excellence">A Legacy of Excellence</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="option"
            value="Always Caring"
            checked={selectedOption === 'Always Caring'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          <label htmlFor="Always Caring">Always Caring</label>
        </div>
      </div>
    </div>
  );
}

export default Point;