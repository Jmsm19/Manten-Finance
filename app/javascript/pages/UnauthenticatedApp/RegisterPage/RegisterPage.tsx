import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

const RegisterPage: React.FC = () => {
  return (
    <div>
      {/* Register Page */}
      <Link component={RouterLink} to="/" color="primary" underline="none">
        Back to Login
      </Link>
    </div>
  );
};

export default RegisterPage;
