// @flow
import React, { type ComponentType, useState, useContext } from 'react';

const View: ComponentType<{|
  count: number,
  onClick: () => void,
|}> = ({
  count, onClick
}) => (<div onClick={onClick}>{count}</div>)

export const ViewContext = createContext(View);

export const Sample: ComponentType<{||}> = () => {
  const V = useContext(ViewContext);
  const [count, increase] = useState(0);
  return <V count={count} onClick={() => increase(count + 1)}/>;
};
