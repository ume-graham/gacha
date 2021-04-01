import { useState, useEffect } from 'react';

import Editor from './Editor';
import Spinner from './Spinner';
import defaultFields from './fields';
import './index.css';

const App = () => {
  const [fields, setFields] = useState(defaultFields);

  useEffect(() => {
    const urlFields = [];
    const urlParams = new URLSearchParams(window.location.search);

    for (const entry of urlParams.entries()) {
      urlFields.push({
        label: entry[0],
        values: JSON.parse(entry[1])
      });
    }

    if (urlFields.length > 0) {
        setFields(urlFields);
    }
  }, [setFields]);

  return (
    <>
      <div className="flex flex-col items-center w-min m-auto p-4 rounded-lg 
                      bg-gradient-to-t from-gray-400 to-gray-300 shadow-xl">
        <Spinner fields={fields} />
      </div>

      <Editor fields={fields} onChange={setFields} />
    </>
  );
};

export default App;
