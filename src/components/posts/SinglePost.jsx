import React from 'react';
import Card from '../ui/card/Card';
import './SinglePost.scss';

function SinglePost({ item }) {
  // console.log('item ===', item.date);

  // atvaizduoti tagus kaip tagus (pill shape)
  const tagArr = item.tags.split(',').map((t) => t.trim());

  return (
    <li className="singlePost">
      <Card>
        <h3>{item.title}</h3>
        <p className="author">{item.author}</p>
        <p>{item.body}</p>
        <h4 className="tagTitle">Tags:</h4>
        <p className="tags">
          {tagArr.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </p>
        <hr />
        <p className="date">{item.date}</p>
      </Card>
    </li>
  );
}

export default SinglePost;
