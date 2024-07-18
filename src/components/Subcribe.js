'use client';
import { useState } from 'react';
import styles from '../app/page.module.css';

const Subscribe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setName('');
        setEmail('');
        setError('');
      } else {
        throw new Error(data.error || 'Failed to subscribe.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setError('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <div className={styles.subscribeContainer}>
    {!message && !error && (
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <label>
          <input
            className={styles.inputField}
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <input
            className={styles.inputField}
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button className={styles.button} type="submit">Subscribe</button>
      </form>
      )}
      {message && <p className={styles.successMessage}>{message}</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default Subscribe;