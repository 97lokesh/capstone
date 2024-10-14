import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            The days of finding restaurants just by walking past them are over. Now, people use Google to find places to eat or drink and check the restaurant's descriptions and reviews.

Because of this, having a great restaurant description is more important than ever. A well-written description can help your restaurant stand out and attract more customers.

In this blog, we'll show you how to create the best restaurant description to make a strong impression on Google. We'll share 7 easy tips to help you write a description highlighting what makes your restaurant special and brings in more visitors.
            </p>
            <Link to={"/Menu"}>our Menu{" "}
              <span><HiOutlineArrowRight /></span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;