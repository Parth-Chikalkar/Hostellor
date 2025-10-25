import React from 'react';

function Nodata() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-6xl font-bold text-orange-400 mb-4 animate-pulse">😕</div>
      <h2 className="text-2xl font-semibold text-orange-700 mb-2">No Data Found</h2>
      <p className="text-gray-500 text-center max-w-xs">
        Sorry, we couldn't find any records for this room. Please check again later or try a different selection.
      </p>
    </div>
  );
}

export default Nodata;
