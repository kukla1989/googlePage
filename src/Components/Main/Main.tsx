/* eslint-disable no-console */
import React, { useState } from 'react';
import { GoogleName } from '../GoogleName/GoogleName';
import LoupeSVG from '../../icons/LoupeSVG';
import MicrophoneSVG from '../../icons/MicrophoneSVG';
import PhotoSVG from '../../icons/PhotoSVG';

const redirectToGoogleQuery = (query: string) => {
  window.location.href = `https://www.google.com/search?q=${query}`;
};

export const Main = () => {
  const [query, setQuery] = useState('');
  const [name, setName] = useState('Google');

  const handleIWillBeLucky = () => {
    setName('Oddity');
  };

  const handleSearchInputEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && query.trim()) {
      redirectToGoogleQuery(query);
    }
  };

  const handleGoogleSeek = () => {
    if (query.trim()) {
      redirectToGoogleQuery(query);
    }
  };

  return (
    <div className="main">
      <GoogleName name={name} />

      <div className="main__search">
        <LoupeSVG
          color="rgba(32, 33, 36, 0.28)"
          CSSclass="main__icon"
        />
        <input
          type="text"
          className="main__input"
          onKeyPress={handleSearchInputEnter}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <img
          src="keyboard.png"
          alt="keyboard"
          className="main__icon"
        />
        <MicrophoneSVG CSSclass="main__icon" />
        <PhotoSVG CSSclass="main__icon" />
      </div>

      <div className="main__buttons">
        <button
          className="main__button"
          type="button"
          onClick={handleGoogleSeek}
        >
          Пошук Google
        </button>

        <button className="main__button" type="button" onClick={handleIWillBeLucky}>Мені пощастить</button>
      </div>

      <p className="main__language">
        Мова Google:
        {' '}
        <span className="main__language--change">English</span>
      </p>
    </div>
  );
};
