import React from 'react';

function ListComments({ items = [] }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>One comment item</div>
      ))}
    </div>
  );
}
// propTYpes
export default ListComments;
