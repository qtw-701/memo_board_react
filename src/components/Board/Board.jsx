import React from 'react';
import styles from './Board.module.css';
import Header from '../Header/Header';
import MemoList from '../MemoList/MemoList';

export default function Board() {
  return (
    <section className={styles.board}>
      <Header />
      <MemoList />
    </section>
  );
}
