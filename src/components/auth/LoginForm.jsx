import React from 'react';
import { useFormik } from 'formik';
import { useAuthCtx } from '../../store/AuthProvider';

function LoginForm({ onLogin }) {
  const { isLoading } = useAuthCtx();
  const formik = useFormik({
    initialValues: {
      email: 'james@bond.com',
      password: '123456',
    },
    onSubmit: (values) => {
      console.log('Form values:', values);
      onLogin(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <button disabled={isLoading} type="submit">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
