import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ title }) {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>{title}</h1>
      <h2>{value}</h2>
      <button type="button" className={value <= 0 ? 'btn btn-danger' : 'btn btn-success'} onClick={handleClick}>
        Increment
      </button>
      {value <= 0 ? (
        ''
      ) : (
        <button type="button" onClick={() => setValue((prevState) => prevState - 1)}>
          Decrement
        </button>
      )}

      <button type="button" onClick={() => setValue(0)}>
        Reset
      </button>
    </>
  );
}

Counter.propTypes = {
  title: PropTypes.string,
};

Counter.defaultProps = {
  title: 'Counter',
};
