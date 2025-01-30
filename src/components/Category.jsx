import React from 'react';

const Categories = () => {
  const categories = [
    { name: 'Surgery', count: 3 },
    { name: 'Health Care', count: 5 },
    { name: 'Medical', count: 8 },
    { name: 'Professional', count: 10 },
  ];

  return (
    <div className=" border border-slate-300 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="list-none">
        {categories.map((category) => (
          <li key={category.name} className="flex items-center justify-between mb-2">
            <span>{category.name}</span>
            <span className="bg-blue-500 text-white rounded-full h-[2rem] w-[2rem] flex items-center justify-center">{category.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;