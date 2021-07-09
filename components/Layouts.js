import React from 'react';
import Header from './Header';

const Layouts = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layouts;
