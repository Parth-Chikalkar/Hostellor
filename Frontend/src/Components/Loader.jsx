import React from 'react';

function Loader() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
