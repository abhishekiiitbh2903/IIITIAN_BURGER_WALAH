import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/abhiphoto.jpeg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>IIITIAN Burger Wala</h4>
          <p>
            We are IIITIAN Burger Wala. The place for most tasty burgers on the
            entire earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Abhishek Singh</h3>
            </div>

            <p>
              I am Abhishek Singh, the founder of IIITIAN Burger Wala.Ever since graduating from prestigious Indian institute of information technology , had a dream to provide one stop solution for mouth watering burgers .. 
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
