import React, { useState } from 'react';
import styles from './AddMemo.module.css';
import { AiFillPlusSquare } from 'react-icons/ai';
import { v4 as uuid } from 'uuid';

export default function AddMemo({ onAdd }) {
  const [text, setText] = useState('');
  const [color, setColor] = useState('yellow');
  const handleChange = (e) => setText(e.target.value);
  const handleChecked = (e) => setColor(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      setText('');
      return;
    }
    onAdd({ id: uuid(), text, color });
    setText('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.text}
        type="text"
        value={text}
        placeholder="Add Memo"
        onChange={handleChange}
      />
      <input
        type="radio"
        name="color"
        id="yellow"
        value="yellow"
        checked={color === 'yellow'}
        className={styles.radio}
        onChange={handleChecked}
      />
      <label
        htmlFor="yellow"
        className={`${styles.label} ${styles.yellow}`}
      ></label>
      <input
        type="radio"
        name="color"
        id="blue"
        value="blue"
        checked={color === 'blue'}
        className={styles.radio}
        onChange={handleChecked}
      />
      <label
        htmlFor="blue"
        className={`${styles.label} ${styles.blue}`}
      ></label>
      <input
        type="radio"
        name="color"
        id="pink"
        value="pink"
        checked={color === 'pink'}
        className={styles.radio}
        onChange={handleChecked}
      />
      <label
        htmlFor="pink"
        className={`${styles.label} ${styles.pink}`}
      ></label>
      <input
        type="radio"
        name="color"
        id="green"
        value="green"
        checked={color === 'green'}
        className={styles.radio}
        onChange={handleChecked}
      />
      <label
        htmlFor="green"
        className={`${styles.label} ${styles.green}`}
      ></label>
      <button className={styles.button}>
        <AiFillPlusSquare />
      </button>
    </form>
  );
}
