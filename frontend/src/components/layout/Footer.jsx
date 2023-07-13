import React from "react";
import { AiFillInstagram,  AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>IIITIAN Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All rights Reserved@2023 @iiitianburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="https://instagram.com/abh.i.sheksingh">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/abhishekiiitbh2903">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
