import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LibraryHome = () => {
  return (
    <div>
      <div className="pages">
      <div className="link" id="read-link">
      <Link to="/LibraryRead">Completed Books</Link>
      </div>
      <div className="link" id="toread-link">
      <Link to="/LibraryToRead">To Be Read</Link>
      </div>
      </div>
    </div>
  );
};

export default LibraryHome;