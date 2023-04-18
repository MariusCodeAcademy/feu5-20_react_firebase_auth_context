import React from 'react';
import Card from '../ui/card/Card';

function ListComments({ items = [] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.uid}>
          <Card>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <p>{item.timeStamp}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}
// propTYpes
export default ListComments;
