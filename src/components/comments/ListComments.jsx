import React from 'react';
import Card from '../ui/card/Card';

function ListComments({ items = [] }) {
  // gauti data ir laika is item.timeStamp ir ji panaudoti JSX
  const formatedDateAndTime = (msTime) =>
    new Date(msTime).toLocaleString('lt-LT', {
      dateStyle: 'long',
      timeStyle: 'medium',
    });

  return (
    <ul>
      {items.map((item) => (
        <li key={item.uid}>
          <Card>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <p>{formatedDateAndTime(item.timeStamp)}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}
// propTYpes
export default ListComments;
