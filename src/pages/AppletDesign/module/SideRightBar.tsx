import React from 'react';
import style from './SideRightBar.less';

const list = ['长啥', '李四'];
const SideRightBar: React.FC = () => {
  return (
    <div>
      <p>哦豁</p>
      {list.map((item) => {
        return (
          <p className={style.items} key={item}>
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default SideRightBar;
