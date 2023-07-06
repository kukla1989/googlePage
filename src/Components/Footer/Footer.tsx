import React from 'react';

export const Footer = () => (
  <div className="footer">
    <div className="footer__country">Україна</div>
    <div className="footer__main">
      <div className="footer__about">
        <a href="https://about.google/?utm_source=google-UA&utm_medium=referral&utm_campaign=hp-footer&fg=1" className="footer__link">Про Google</a>
        <a href="https://ads.google.com/intl/uk_ua/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" className="footer__link">Реклама</a>
        <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none" className="footer__link">Для бізнесу</a>
        <a href="https://www.google.com/search/howsearchworks/?fg=1" className="footer__link">Як працює Пошук</a>
      </div>

      <div className="footer__settings">
        <a href="https://policies.google.com/privacy?hl=uk&fg=1" className="footer__link">Конфіденційність</a>
        <a href="https://policies.google.com/terms?hl=uk&fg=1" className="footer__link">Умови</a>
        <a href="https://support.google.com/accounts/answer/3118621?hl=en" className="footer__link">Налаштування</a>
      </div>

    </div>
  </div>
);
