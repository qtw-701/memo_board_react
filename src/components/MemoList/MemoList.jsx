import React, { useEffect, useState } from 'react';
import styles from './MemoList.module.css';
import AddMemo from '../AddMemo/AddMemo';
import Memo from '../Memo/Memo';

export default function MemoList() {
  const [memos, setMemos] = useState(() => readMemosFromLocalStorage());
  const handleAdd = (text) => {
    setMemos([...memos, text]);
  };
  const handleDelete = (deleted) => {
    setMemos(memos.filter((memo) => memo.id !== deleted.id));
  };
  useEffect(() => {
    localStorage.setItem('memos', JSON.stringify(memos));
  }, [memos]);

  return (
    <section className={styles.container}>
      <ul className={styles.memos}>
        {memos &&
          memos.map((memo) => (
            <Memo key={memo.id} memo={memo} onDelete={handleDelete} />
          ))}
      </ul>
      <AddMemo onAdd={handleAdd} />
    </section>
  );
}

function readMemosFromLocalStorage() {
  const memos = localStorage.getItem('memos');
  return memos ? JSON.parse(memos) : [];
}
