import { useState } from 'react';

import Field from './Field';

const Spinner = ({ fields }) => {
  const [isCycling, setIsCycling] = useState(false);

  const generate = () => {
    setIsCycling(true);
    setTimeout(() => {
      setIsCycling(false);
    }, 2500);
  };
  
  return (
    <>
      <div className="flex">
        {fields.map(({ label, values }, i) => <Field key={i} label={label} options={values} cycling={isCycling} />)}
      </div>

      <button
          type="button"
          className="mt-4 px-3 py-2 rounded border-2 border-gray-500 focus:outline-none
                     bg-gray-300 hover:bg-lightblue-200 focus:bg-gray-200 text-gray-700"
          onClick={generate}
      >
        Generate
      </button>
    </>
  )
};

export default Spinner;
