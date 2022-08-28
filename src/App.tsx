import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Reactive from './Reactive';
import Scroll from './Scroll';

export default function App(): JSX.Element {
  const [page, setPage] = useState('task1');

  const clickTask1 = () => setPage('task1');
  const clickTask2 = () => setPage('task2');

  return (
    <>
      <GlobalStyle />
      {/* <Reactive /> */}
      <button type="button" onClick={clickTask1}>반응형 과제</button>
      <button type="button" onClick={clickTask2}>스크롤 과제</button>
      {page === 'task1' ? <Reactive /> : <Scroll />}
    </>
  );
}
