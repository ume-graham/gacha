import { useEffect, useRef, useState } from 'react';

const ControlButton = ({ children, className, onClick }) => (
  <button
    type="button"
    className={`w-8 h-8 p-2 text-gray-100 bg-gray-600 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const FieldEditor = ({ field, onChange }) => {
  const { label, values } = field;
  const listRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [recentlyAddedValue, setRecentlyAddedValue] = useState(false);

  useEffect(() => {
    if (recentlyAddedValue) {
      listRef.current.lastChild.querySelector('input').focus();
      setRecentlyAddedValue(false);
    }
  }, [recentlyAddedValue, setRecentlyAddedValue, listRef]);

  const handleLabelChange = e => onChange({ ...field, label: e.target.value });;

  const handleFieldDelete = () => onChange(null);

  const handleValueChange = (index, e) => onChange({
    ...field,
    values: [...values.slice(0, index), e.target.value, ...values.slice(index + 1)]
  });

  const handleValueDelete = index => onChange({
    ...field,
    values: [...values.slice(0, index), ...values.slice(index + 1)]
  });

  const addValue = () => {
      setRecentlyAddedValue(true);
      onChange({
        ...field,
        values: [...values, '']
      });
  };

  return (
    <div>
      <div className="flex items-center">
        <ControlButton onClick={() => setIsExpanded(!isExpanded)} className="rounded-l-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-current transform transition-transform ease-in-out ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
            viewBox="0 0 24 24"
          >
            <path d="M21 12l-18 12v-24z"/>
          </svg>
        </ControlButton>
        <input
          placeholder="Category"
          value={label}
          onChange={handleLabelChange}
          className="w-52 text-gray-900 bg-gray-100 shadow-inner h-8 px-2"
        />
        <ControlButton onClick={handleFieldDelete} className="rounded-r">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
          </svg>
        </ControlButton>
      </div>

      <div
        className="w-52 mx-8 bg-gray-100 transition-all duration-300 ease-in-out shadow overflow-y-hidden rounded-b"
        style={{ height: `${isExpanded ? values.length * 2 + 3 : 0}rem` }}
      >
        <ul ref={listRef}>
          {values.map((value, i) => (
            <li key={i} className="h-8 flex items-center justify-around px-2">
              <input
                value={value}
                onChange={e => handleValueChange(i, e)}
                className="w-40 text-gray-900 px-2 shadow-inner rounded-full"
              />
              <button
                type="button"
                className="w-5 h-5 p-1 rounded-full text-gray-100 bg-red-800 hover:bg-red-600 focus:bg-red-600 focus:outline-none"
                onClick={() => handleValueDelete(i)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                </svg>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-end mx-3 my-2">
          <button
            type="button"
            className="w-8 h-8 text-gray-100 bg-gray-600 p-2 rounded hover:bg-gray-500 focus:bg-gray-500 focus:outline-none"
            onClick={addValue}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FieldEditor;
