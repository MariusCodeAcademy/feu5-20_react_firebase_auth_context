import React from 'react';
import Card from '../ui/card/Card';
import './SinglePost.scss';

function SinglePost({ item }) {
  console.log('item ===', item.date);
  return (
    <li className="singlePost">
      <Card>
        <h3>{item.title}</h3>
        <p className="author">{item.author}</p>
        <p>{item.body}</p>
        <p className="tags">{item.tags}</p>
        <hr />
        <p className="date">{item.date}</p>
      </Card>
    </li>
  );
}

export default SinglePost;
