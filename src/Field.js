import { useEffect, useState } from 'react';

const Field = ({ label, options, cycling = false }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (cycling) {
      const func = setTimeout(() => {
        let nextIndex = 0;

        if (options.length > 1) {
          do {
            nextIndex = Math.floor(Math.random() * options.length);
          } while (nextIndex === selectedIndex);
        }

        setSelectedIndex(nextIndex);
      }, 100);

      return () => clearTimeout(func);
    }
  }, [selectedIndex, options.length, cycling]);

  return (
    <div className="p-4">
      <label className="text-xs uppercase text-gray-700 tracking-wide">
        {label}
      </label>

      <div className="relative h-16 overflow-hidden rounded text-2xl shadow-inner
                      bg-gradient-to-b from-gray-900 to-gray-600 text-lightblue-400">
        <ul
            className="transition transition-transform duration-100"
            style={{ transform: `translateY(-${selectedIndex * 4}rem)` }}
        >
          {options.map(option => (
            <li key={option}>
              <p className="p-4 whitespace-nowrap">
                {option}
              </p>
            </li>
          ))}
        </ul>

        <div
            aria-hidden
            className="absolute w-full h-1/2 bg-gradient-to-b from-gray-200 to-gray-500 opacity-25"
            style={{ top: '2px', left: '2px', width: 'calc(100% - 4px' }}
        />
      </div>
    </div>
  );
};

export default Field;
