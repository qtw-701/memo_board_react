import React from 'react';
import styles from './Memo.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Memo({ memo, onDelete }) {
  const { text, color } = memo;
  console.log(color);
  const handleDelete = () => {
    onDelete(memo);
  };
  return (
    <li className={`${styles.memo} ${color}`}>
      <span className={styles.text}>{text}</span>
      <button className={styles.delete} onClick={handleDelete}>
        <AiOutlineCloseCircle />
      </button>
    </li>
  );
}
