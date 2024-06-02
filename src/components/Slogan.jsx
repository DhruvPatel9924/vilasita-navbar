import React, { useEffect, useState } from 'react';
import './Slogan.css'; // Make sure this path is correct

const Slogan = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`slogan-container ${visible ? 'visible' : 'hidden'}`}>
      <h1 className="slogan">STUDIO TO STRUCTURE</h1>
    </div>
  );
};

export default Slogan;
