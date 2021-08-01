import React from 'react';
import styles from './Modal.module.scss';

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <React.Fragment>
        {this.state.isOpen && (
          <div className={styles.backdrop}>
            <div className={styles.content}>
              <h1>Title</h1>
              <p>Text</p>
              <button
                onClick={() => {
                  this.setState({ isOpen: false });
                }}
              >
                Close Modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
