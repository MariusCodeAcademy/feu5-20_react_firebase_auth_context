// forma
import { useFormik } from 'formik';
import React from 'react';
import { useAuthCtx } from '../../store/AuthProvider';

const commentObj = {
  authorEmail: 'james@bond.com',
  body: 'this is a test comment',
  timeStamp: '9021793848917992',
  title: 'title',
};

function NewComment({ onNewComment }) {
  const { user } = useAuthCtx();
  const formik = useFormik({
    initialValues: {
      authorEmail: '',
      body: 'body of comment 1',
      title: 'Comment 1',
    },
    onSubmit(values) {
      // console.log('values ===', values);
      onNewComment({
        ...values,
        timeStamp: +new Date(),
      });
    },
  });
  formik.values.authorEmail = user?.email || '';
  return (
    <div>
      <h3 className="title">Comment here</h3>
      <form onSubmit={formik.handleSubmit}>
        <input
          value={formik.values.authorEmail}
          onChange={formik.handleChange}
          name={'authorEmail'}
          type="text"
          disabled
        />
        <input
          value={formik.values.title}
          onChange={formik.handleChange}
          name={'title'}
          type="text"
        />
        <textarea
          value={formik.values.body}
          onChange={formik.handleChange}
          name="body"
          cols="30"
          rows="10"
        ></textarea>

        <button type="submit">Comment</button>
      </form>
    </div>
  );
}

export default NewComment;
