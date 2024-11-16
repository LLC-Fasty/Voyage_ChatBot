import Image from "next/image";
import React from "react";
import { Space_Grotesk } from "next/font/google";
const unbd = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export default function Content() {
  return (
    <div className="w-1/2 p-8">
      <div>
        <div className="flex justify-center items-center gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={70}
            height={70}
            color={"#e2e2e2"}
            fill={"none"}
          >
            <path
              d="M12 2C17.5237 2 22 6.47778 22 12C22 17.5222 17.5237 22 12 22"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 21.5C7.81163 21.0953 6.69532 20.5107 5.72302 19.7462M5.72302 4.25385C6.69532 3.50059 7.81163 2.90473 9 2.5M2 10.2461C2.21607 9.08813 2.66019 7.96386 3.29638 6.94078M2 13.7539C2.21607 14.9119 2.66019 16.0361 3.29638 17.0592"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 16.5C10.0726 14.302 13.9051 14.1986 16 16.5M14.2179 9.75C14.2179 10.9926 13.2215 12 11.9925 12C10.7634 12 9.76708 10.9926 9.76708 9.75C9.76708 8.50736 10.7634 7.5 11.9925 7.5C13.2215 7.5 14.2179 8.50736 14.2179 9.75Z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <h1 className="text-3xl text-[#e2e2e2] font-bold">Team 14</h1>
        </div>
        <div className="mt-10">
          <div className={unbd.className}>
            <h1 className="text-6xl text-center text-[#F2ECBE] font-black tracking-wide">
              Voyage
            </h1>
          </div>
          <p className="text-[#e2e2e2] mt-10 text-xl text-center">
            Voyage is a cutting-edge travel assistant chatbot designed to
            revolutionize your trip planning. By engaging in dynamic
            conversations, Voyage gathers detailed insights about your location,
            destination preferences, travel style, budget, and interests to
            offer bespoke recommendations tailored to your needs. With Voyage,
            planning your next adventure becomes effortless and enjoyable.
            Experience a personalized journey as Voyage crafts a tailored
            itinerary that aligns perfectly with your travel aspirations, making
            every trip memorable and stress-free.
          </p>
        </div>
        <div className="mt-10 text-[#e2e2e2] font-bold text-xl ">
          <h1 className="text-center">What we used</h1>
          <div className="flex justify-center items-center gap-4 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 180"
              width="70"
            >
              <mask
                id="mask0"
                x="0"
                y="0"
                width="180"
                height="180"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
              >
                <circle cx="90" cy="90" r="90" fill="black" />
              </mask>
              <g mask="url(#mask0)">
                <circle
                  cx="90"
                  cy="90"
                  r="90"
                  fill="black"
                  data-circle="true"
                />
                <path
                  d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                  fill="url(#paint0_linear)"
                />
                <rect
                  x="115"
                  y="54"
                  width="12"
                  height="72"
                  fill="url(#paint1_linear)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="109"
                  y1="116.5"
                  x2="144.5"
                  y2="160.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="121"
                  y1="54"
                  x2="120.799"
                  y2="106.875"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-[70px]"
            >
              <path
                d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"
                fill="url(#paint0_radial)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"
                >
                  <stop offset=".067" stopColor="#9168C0" />
                  <stop offset=".343" stopColor="#5684D1" />
                  <stop offset=".672" stopColor="#1BA1E3" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              width="70"
              height="70"
              viewBox="0 0 76 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 54 33"
              className="w-[70px]"
            >
              <g clipPath="url(#prefix__clip0)">
                <path
                  fill="#38bdf8"
                  fillRule="evenodd"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="prefix__clip0">
                  <path fill="#fff" d="M0 0h54v32.4H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#393E46] p-4 rounded-3xl mt-10 w-1/2 ">
            <p className="text-[#e2e2e2] text-base leading-5 text-center">
              VS Code, Next.js, TailwindCSS, and Vercel: A powerful suite for
              modern web development, offering a seamless experience for
              writing, deploying, and optimizing code. Beloved by developers for
              crafting responsive UIs, building performant web applications, and
              deploying effortlessly. Gemini further enhances the ecosystem,
              enabling innovative solutions with cutting-edge design and
              functionality.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-[#e2e2e2] text-center font-bold text-sm">
          © Made by: Juli4t
        </h1>
      </div>
    </div>
  );
}
