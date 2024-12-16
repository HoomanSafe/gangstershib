import React from "react";
import Banner from "../assets/gangstershib.gif";

const About = () => {
  return (
    <section className="py-12 w-full relative">
      <div className="w-[319px] h-[303px] absolute top-0 rotate-180 bg-teal-400 rounded-full blur-[200px]" />
      <div className="w-[319px] h-[303px] absolute top-0 right-0 rotate-180 bg-sky-400 rounded-full blur-[150px]" />

      <div className="container grid gap-16 grid-cols-1 lg:grid-cols-2 justify-center items-center">
        <img src={Banner} alt="" className="z-10 mx-auto" />

        <article className="z-10">
          <h1 className=" text-teal-300 text-3xl font-normal leading-[56px] tracking-wide">
            𝔾𝔸ℕ𝔾𝕊𝕋𝔼ℝ 𝕊ℍ𝕀𝔹 𝕀𝕊 𝔹𝕆ℝℕ 𝔸𝔾𝔸𝕀ℕ 🪙
          </h1>
          <p className=" text-white  font-medium leading-10 font-Salutino">
           ℝ𝕒𝕚𝕤𝕖 𝔼𝕟𝕥𝕙𝕦𝕤𝕚𝕒𝕤𝕞, 𝕀𝕘𝕟𝕚𝕥𝕖 ℕ𝕖𝕨 ℙ𝕠𝕥𝕖𝕟𝕥𝕚𝕒𝕝!

𝕀𝕟 𝕥𝕙𝕖 𝕨𝕠𝕣𝕝𝕕 𝕠𝕗 𝕓𝕝𝕠𝕔𝕜𝕔𝕙𝕒𝕚𝕟, 𝕚𝕟 𝕥𝕙𝕖 𝕧𝕒𝕤𝕥 𝕕𝕚𝕘𝕚𝕥𝕒𝕝 𝕨𝕠𝕣𝕝𝕕, 𝕥𝕙𝕖 𝕝𝕖𝕘𝕖𝕟𝕕𝕒𝕣𝕪 𝕊𝕙𝕚𝕓𝕒 𝕀𝕟𝕦 𝕕𝕖𝕔𝕚𝕕𝕖𝕕 𝕚𝕥 𝕨𝕒𝕤 𝕥𝕚𝕞𝕖 𝕗𝕠𝕣 𝕒 𝕔𝕙𝕒𝕟𝕘𝕖. 
𝔼𝕞𝕖𝕣𝕘𝕚𝕟𝕘 𝕗𝕣𝕠𝕞 𝕥𝕙𝕖 𝕤𝕙𝕒𝕕𝕠𝕨𝕤 𝕠𝕗 𝕥𝕙𝕖 𝕡𝕒𝕤𝕥, 𝔾𝕒𝕟𝕘𝕤𝕥𝕖𝕣 𝕊𝕙𝕚𝕓 𝕙𝕒𝕤 𝕓𝕖𝕖𝕟 𝕣𝕖𝕓𝕠𝕣𝕟 – 𝕔𝕠𝕠𝕝𝕖𝕣, 𝕤𝕞𝕒𝕣𝕥𝕖𝕣 𝕒𝕟𝕕 𝕗𝕣𝕖𝕤𝕙𝕖𝕣 𝕥𝕙𝕒𝕟 𝕖𝕧𝕖𝕣 𝕠𝕟 𝕥𝕙𝕖 𝔹𝕚𝕟𝕒𝕟𝕔𝕖 𝕊𝕞𝕒𝕣𝕥 ℂ𝕙𝕒𝕚𝕟 𝕓𝕝𝕠𝕔𝕜𝕔𝕙𝕒𝕚𝕟. 
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
