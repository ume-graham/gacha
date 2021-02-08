import { useState } from 'react';

import Field from './Field';
import fieldData from './fields';
import './index.css';

const App = () => {
  const [isCycling, setIsCycling] = useState(false);

  const generate = () => {
    setIsCycling(true);
    setTimeout(() => {
      setIsCycling(false);
    }, 2500);
  };
  
  return (
    <div className="flex flex-col items-center w-min m-auto p-4 rounded-lg 
                    bg-gradient-to-t from-gray-400 to-gray-300 shadow-xl">
      <div className="flex">
        {fieldData.map(({ label, values }) => <Field key={label} label={label} options={values} cycling={isCycling} />)}
      </div>

      <button
          type="button"
          className="mt-4 px-3 py-2 rounded border-2 border-gray-500 focus:outline-none
                     bg-gray-300 hover:bg-lightblue-200 focus:bg-gray-200 text-gray-700"
          onClick={generate}
      >
        Generate
      </button>
    </div>
  );
};

export default App;
