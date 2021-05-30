/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from 'react';

import UserForm from '@components/UserForm/UserForm';

function Login(): ReactElement {
  return <UserForm title="Log in" loginForm />;
}

export default Login;
