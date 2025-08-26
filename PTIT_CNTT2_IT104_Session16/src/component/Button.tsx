import React, { Component } from 'react';
import styles from './Button.module.css';

export default class Button extends Component {
  render() {
    return (
      <div className={styles.container}>
        <button className={styles.primary}>Primary</button>
        <button className={styles.secondary}>Secondary</button>
        <button className={styles.success}>Success</button>
        <button className={styles.warning}>Warning</button>
        <button className={styles.danger}>Danger</button>
        <button className={styles.info}>Info</button>
        <button className={styles.light}>Light</button>
        <button className={styles.dark}>Dark</button>
        <button className={styles.link}>Link</button>
      </div>
    );
  }
}
