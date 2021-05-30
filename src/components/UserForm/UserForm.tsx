/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from 'react';
import Link from 'next/link';

import style from './UserForm.module.sass';

interface Props {
  title: string;
  loginForm?: boolean;
  signupForm?: boolean;
  passwordForm?: boolean;
}

function UserForm({
  title,
  loginForm,
  signupForm,
  passwordForm,
}: Props): ReactElement {
  return (
    <div className={style.mainContainer}>
      <h2 className={style.title}>{title}</h2>
      {passwordForm && (
        <span className={style.auxText}>
          Enter the Email Address of your registered account and you will
          receive an email with a password-reset link:
        </span>
      )}
      <form>
        {signupForm && (
          <label htmlFor="form_name">
            <input id="form_name" type="text" placeholder="Name" />
          </label>
        )}
        {(loginForm || signupForm || passwordForm) && (
          <label htmlFor="form_email">
            <input id="form_email" type="email" placeholder="Email" />
          </label>
        )}
        {(loginForm || signupForm) && (
          <label htmlFor="form_password">
            <input id="form_password" type="password" placeholder="Password" />
          </label>
        )}
        {passwordForm ? (
          <input type="submit" value="Recover" />
        ) : (
          <input type="submit" value={title} />
        )}
      </form>
      {loginForm && (
        <>
          <span className={style.auxText}>
            No account yet?{' '}
            <Link href="/signup">
              <a>
                <strong>Sign up!</strong>
              </a>
            </Link>
          </span>
          <span className={style.auxText}>
            <Link href="/password_recovery">
              <a>Forgot your password?</a>
            </Link>
          </span>
        </>
      )}
    </div>
  );
}

export default UserForm;
