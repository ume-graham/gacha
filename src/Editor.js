import { useEffect, useRef, useState } from 'react';

import FieldEditor from './FieldEditor';

const ActionButton = ({ children, onClick, className }) => (
  <button
    type="button"
    className={`w-10 h-10 rounded bg-lightblue-900 p-2 text-gray-100 hover:bg-lightblue-700 focus:bg-lightblue-700 focus:outline-none ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const copyToClipboard = el => {
  el.select();
  el.setSelectionRange(0, 99999);
  document.execCommand('copy');
};

const generateLink = fields => {
  const baseUrl = window.location.href.split('?')[0];
  const params = fields.map(field => {
    return `${field.label}=${encodeURIComponent(JSON.stringify(field.values))}`;
  }).join('&');
  return `${baseUrl}?${params}`;
};

const Editor = ({ fields, onChange }) => {
  const ref = useRef(null);
  const listRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showClipboardMessage, setShowClipboardMessage] = useState(false);
  const [recentlyAddedField, setRecentlyAddedField] = useState(false);

  useEffect(() => {
    if (recentlyAddedField) {
      listRef.current.lastChild.querySelector('input').focus();
      setRecentlyAddedField(false);
    }
  }, [recentlyAddedField, setRecentlyAddedField, listRef]);

  const handleChange = (index, value) => {
    onChange([
      ...fields.slice(0, index),
      ...(value ? [value] : []),
      ...fields.slice(index + 1)
    ]);
  };

  const handleClipboardCopied = () => {
    copyToClipboard(ref.current);
    setShowClipboardMessage(true);
    setTimeout(() => setShowClipboardMessage(false), 1000);
  };

  const addField = () => {
    setRecentlyAddedField(true);
    onChange([
      ...fields,
      { label: '', values: [''] }
    ]);
  };

  return (
    <div className={`absolute right-0 top-0 bottom-0 shadow-lg transform transition transition-translate ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="relative bg-gray-300 h-full text-gray-900 px-6 py-12 rounded-bl-lg">
        <button className="absolute group w-10 h-10 top-0 left-0 shadow-lg -z-10 transform -translate-x-full bg-gray-300 rounded-l mt-6 p-2 text-gray-700 focus:text-gray-500 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current transition-transform transform rotate-0 group-hover:rotate-180" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
        </button>

        <ul ref={listRef}>
          {fields.map((field, i) => (
            <li key={i} className="mb-4">
              <FieldEditor field={field} onChange={value => handleChange(i, value)} />
            </li>
          ))}
        </ul>

        <input className="w-1 h-1 absolute right-0 transform translate-x-full" aria-hidden ref={ref} value={generateLink(fields)} readOnly />

        <div className="flex justify-end mt-6">
          <div className="flex">
            <div className="relative">
              <ActionButton onClick={handleClipboardCopied}>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>
              </ActionButton>

              <div className={`${showClipboardMessage ? 'opacity-100 translate-x-0 ease-in' : 'opacity-0 -translate-y-2 ease-out'} absolute left-1/2 transform -translate-x-1/2 mt-2 bg-lightblue-300 shadow-lg w-min p-2 rounded transition transition-all`}>Copied to clipboard!</div>
            </div>

            <ActionButton className="ml-4" onClick={addField}>
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
