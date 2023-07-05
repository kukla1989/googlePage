/* eslint-disable max-len */
import React from 'react';
import DotsSVG from '../../icons/DotsSVG';

export const Header = () => (
  <div className="header">
    <a
      href="https://mail.google.com/mail/u/0/?ogbl#inbox"
      className="header__link"
    >
      Gmail
    </a>

    <a
      href="https://www.google.com/imghp?hl=en&authuser=0&ogbl"
      className="header__link"
    >
      Images
    </a>

    <a
      href="https://www.google.com/imghp?hl=en&authuser=0&ogbl"
      className="header__link"
    >
      <DotsSVG color="grey" CSSclass="header__dots" />
    </a>

    <a
      href="https://www.google.com/imghp?hl=en&authuser=0&ogbl"
      className="header__sign-in"
    >
      Увійти
    </a>

  </div>
);
