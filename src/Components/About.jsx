import React from "react";
import Banner from "../assets/banner1.png";

const About = () => {
  return (
    <section className="py-12 w-full relative">
      <div className="w-[319px] h-[303px] absolute top-0 rotate-180 bg-teal-400 rounded-full blur-[200px]" />
      <div className="w-[319px] h-[303px] absolute top-0 right-0 rotate-180 bg-sky-400 rounded-full blur-[150px]" />

      <div className="container grid gap-16 grid-cols-1 lg:grid-cols-2 justify-center items-center">
        <img src={Banner} alt="" className="z-10 mx-auto" />

        <article className="z-10">
          <h1 className=" text-teal-300 text-3xl font-normal leading-[56px] tracking-wide">
            A Fierce Entity
          </h1>
          <p className=" text-white  font-medium leading-10 font-Salutino">
            Elon Musks rebrand to X was a big move for the formally known tech
            giant, Twitter. The X team developed cards for this very occasion, a
            RARE occasion. As opposed to making memes we decided to ride the
            wave very few have done by making rarity cards users can spread all
            over “X.com”. RARE X isn’t just a token, it’s a movement.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
