import React from 'react';
import { useLocation } from 'react-router-dom';

const Interpreter = () => {
  const location = useLocation();
  const searchText = new URLSearchParams(location.search).get('text') || '';
  const decodedSearchText = decodeURIComponent(searchText); // Decode the received text

  return (
    <div>
      <h1>You searched for: {decodedSearchText}</h1>
      {/* Additional components or logic based on the decoded text */}
    </div>
  );
};

export default Interpreter;
