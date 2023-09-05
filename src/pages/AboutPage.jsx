import React from "react";
import img3 from "../assets/img3.png";
import img1 from "../assets/img1.png";
import img7 from "../assets/img7.png";
import img5 from "../assets/img5.png";

const AboutPage = () => {
  return (
    <main className="about-us__container">
      <h1>About Us</h1>
      <section className="about-us__section">
        <img src={img3} alt="" />
        <h2>About me</h2>
        <p>
          About me bla bla Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illum explicabo doloribus unde impedit error ipsum cumque sed.
          Placeat ducimus earum culpa quos rem, facere nesciunt optio id non
          repellendus temporibus iste asperiores numquam recusandae magnam
          itaque enim ullam impedit. Quas at quo eum!
        </p>
      </section>

      <section className="about-us__section">
        <img src={img1} alt="" />
        <h2>About me</h2>
        <p>
          About me bla bla Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illum explicabo doloribus unde impedit error ipsum cumque sed.
          Placeat ducimus earum culpa quos rem, facere nesciunt optio id non
          repellendus temporibus iste asperiores numquam recusandae magnam
          itaque enim ullam impedit. Quas at quo eum!
        </p>
      </section>

      <section className="about-us__section">
        <img src={img7} alt="" />
        <h2>About me</h2>
        <p>
          About me bla bla Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illum explicabo doloribus unde impedit error ipsum cumque sed.
          Placeat ducimus earum culpa quos rem, facere nesciunt optio id non
          repellendus temporibus iste asperiores numquam recusandae magnam
          itaque enim ullam impedit. Quas at quo eum!
        </p>
      </section>

      <section className="about-us__section">
        <img src={img5} alt="" />
        <h2>About me</h2>
        <p>
          About me bla bla Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illum explicabo doloribus unde impedit error ipsum cumque sed.
          Placeat ducimus earum culpa quos rem, facere nesciunt optio id non
          repellendus temporibus iste asperiores numquam recusandae magnam
          itaque enim ullam impedit. Quas at quo eum!
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
