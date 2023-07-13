import React from 'react'
import { motion } from 'framer-motion'
import me from "../../assets/abhiphoto.jpeg"
const Founder = () => {
    const options = {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
      };
  return <section className='founder'>
    <motion.div {...options}>
  <img src={me} alt='Abhishek Singh' height={200} width={200}></img>
  <h3>Abhishek Singh</h3>
  <p>Meet me: Abhishek Singh, founder of IIITIAN BURGER WAALAH, where delicious burgers await. Combining premium ingredients and creative flair, I redefine the burger experience with unforgettable flavors.
  <br/> Satisfaction guaranteed!</p>
    </motion.div>
  </section>
}

export default Founder