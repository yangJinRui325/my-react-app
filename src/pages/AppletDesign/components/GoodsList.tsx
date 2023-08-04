import React from 'react';
import style from './GoodsList.less';

const listStyle = 'type4';
console.log(style[listStyle]);

const list = [1, 2, 3, 4, 5];
const GoodList: React.FC = () => {
  return (
    <ul className={`${style.good_list_box} ${style[listStyle]}`}>
      {list.map((item) => {
        return (
          <li key={item} className={style.good_list_item}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default GoodList;
