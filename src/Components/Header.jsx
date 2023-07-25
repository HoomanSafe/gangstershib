import React from "react";
import img1 from "../assets/image1.png";

const Header = () => {
  return (
    <header className="py-3 w-full border-teal-300 border-t border-x absolute">
      <svg
        className="absolute -bottom-8 pointer-events-none w-full"
        width="100%"
        height="56"
        viewBox="0 0 1440 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M432.993 54H9.93104H0V-80H1440V21H1216.55L1183.78 54H1025.88L993.103 21H465.766L432.993 54Z"
          stroke="#00F6FF"
          stroke-width="2"
        />
        <rect x="861" y="28" width="37" height="28" fill="#00F6FF" />
        <rect x="908" y="28" width="37" height="28" fill="#00F6FF" />
        <path d="M990 28L1017 55.5H955V28H990Z" fill="#00F6FF" />
        <path d="M471 28L444 55.5H506V28H471Z" fill="#00F6FF" />
        <rect x="516" y="28" width="37" height="28" fill="#00F6FF" />
        <rect x="563" y="28" width="37" height="28" fill="#00F6FF" />
      </svg>

      <div className="container flex items-center justify-between ">
        <a href="" className="text-6xl text-cyan-400">
          x
        </a>
        <ul className="hidden lg:flex items-center gap-10">
          <li className="hover:text-cyan-400 transition text-xl">
            <a href="">home</a>
          </li>
          <li className="hover:text-cyan-400 transition text-xl">
            <a href="">about</a>
          </li>
          <li className="hover:text-cyan-400 transition text-xl">
            <a href="">tokenomics</a>
          </li>
          <li className="hover:text-cyan-400 transition text-xl">
            <a href="">roadmap</a>
          </li>
        </ul>
        <a href="" className="hover:scale-90 transition">
          <svg
            width="192"
            height="56"
            viewBox="0 0 192 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.98 20.12C48.5667 20.12 50.1467 20.1267 51.72 20.14C53.3067 20.1533 54.9067 20.16 56.52 20.16L56.74 24.5L54.28 24.46L54.42 33.96L49.58 33.9L49.52 24.46H46.92L46.98 20.12ZM57.2475 24.34L57.0475 20.2L68.3675 19.88L68.3075 24L63.6275 24.06V26.04H66.3275V28.54L63.6675 28.64V30.12H67.9075L68.0675 34.04L59.2475 34L59.1075 24.24L57.2475 24.34ZM69.0537 24.66L68.8337 20.54L75.5137 20.5L75.5737 29.58L79.2537 29.52L79.3537 33.72L71.1337 33.86L70.9337 24.52L69.0537 24.66ZM78.7897 24.34L78.5897 20.2L89.9097 19.88L89.8497 24L85.1697 24.06V26.04H87.8697V28.54L85.2097 28.64V30.12H89.4497L89.6097 34.04L80.7897 34L80.6497 24.24L78.7897 24.34ZM101.896 19.78L102.096 23.8L96.4959 24.4L96.0959 29.54L98.6559 29.4L98.5159 28.22L97.3559 28.26L97.6159 25.6L102.216 25.34L102.736 33.96L98.9759 34.02L98.9159 33.42L94.1159 34.02L91.3159 31.72L92.0959 24.32L90.7159 24.42L90.4959 20.28L101.896 19.78ZM103.282 24.34L103.062 20.22L113.222 20.12L115.262 23.12L115.042 27.8L113.522 29.08L115.162 30.62V34H111.222L111.282 31.34L109.542 29.92L109.602 33.96L105.162 33.9L105.122 24.24L103.282 24.34ZM111.262 26.08L111.362 23.88L109.422 23.98L109.462 26.16L111.262 26.08ZM117.283 24.38L117.043 20.24L125.223 19.98L128.543 33.82L124.063 34.08L123.743 32.2L120.583 32.3L120.223 33.98L115.883 34.04L118.123 24.3L117.283 24.38ZM122.983 28.1L122.323 24.72L121.563 28.1H122.983ZM127.987 24.28L127.787 20.14L135.087 19.9L136.727 24.48L138.707 20.04L143.467 20.14L143.867 34.02H139.627L139.527 28.42L138.107 33.72L135.847 33.88L134.507 28.84L134.247 34.04L129.567 33.9L129.727 24.16L127.987 24.28Z"
              fill="#06F2FA"
            />
            <path
              d="M173.129 1H1V40.6L20.8769 55H191V21.4L173.129 1Z"
              stroke="#06F2FA"
            />
            <path d="M1 55V44L16 55H1Z" fill="#06F2FA" stroke="#06F2FA" />
            <path
              d="M191.5 1V16.5L178 1H191.5Z"
              fill="#06F2FA"
              stroke="#06F2FA"
            />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
