import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <section className="bg-grey">
        <div className="container">
          <a href="https://github.com/hakyung-dev/all-your-streaming-client" className="link">
            <AiFillGithub />
          </a>
          <div>Copyright 2020. Hakyung all rights reserved.</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
