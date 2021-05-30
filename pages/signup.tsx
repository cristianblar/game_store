import React, { ReactElement } from 'react';

import UserForm from '@components/UserForm/UserForm';

function Signup(): ReactElement {
  return <UserForm title="Sign up" signupForm />;
}

export default Signup;
