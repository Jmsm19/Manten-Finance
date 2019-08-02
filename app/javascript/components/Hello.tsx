import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => {
  const [textFromApi, setTextFromApi] = useState<string>('');

  useEffect(() => {
    fetch('/api/v1')
      .then(res => res.json())
      .then(({ example }) => setTextFromApi(example));
  }, []);

  return (
    <React.Fragment>
      <div>
        <p>Hello {name}!</p>
      </div>
      {textFromApi && (
        <div>
          <p>{textFromApi}</p>
        </div>
      )}
    </React.Fragment>
  );
};

Hello.defaultProps = {
  name: 'David',
};

Hello.propTypes = {
  name: PropTypes.string,
};

export default Hello;
