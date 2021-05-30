import React, { ReactElement } from 'react';

import UserForm from '@components/UserForm/UserForm';

function PasswordRecovery(): ReactElement {
  return <UserForm title="Password recovery" passwordForm />;
}

export default PasswordRecovery;
