import React from 'react';

const list = [1, 2, 3];
const GoodList: React.FC = () => {
  return (
    <ul>
      {list.map((item) => {
        <li>
          {item}
          <img src="https://fakeimg.pl/350x200/?text=World&font=lobster" />
        </li>;
      })}
    </ul>
  );
};

export default GoodList;
