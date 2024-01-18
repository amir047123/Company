import React from "react";
import react from "../../Assets/webp/React.webp";
import next from "../../Assets/webp/next.webp";
import tailwind from "../../Assets/webp/Tailwind.webp";
import node from "../../Assets/webp/Node.webp";
import express from "../../Assets/webp/Express.webp";
import MongoDb from "../../Assets/webp/Mongodb.webp";
import MySLQ from "../../Assets/webp/MySQL.webp";
import firebase from "../../Assets/webp/Firebase.webp";
import GraphQL from "../../Assets/webp/GraphQL.webp";
import Html from "../../Assets/webp/Html.webp";
import css from "../../Assets/webp/CSS.webp";
import ts from "../../Assets/webp/TS.webp";
import js from "../../Assets/webp/JS.webp";
import { Icon } from "@iconify/react";

const BuildTechnology = () => {
  return (
    <div>
      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Integrate with apps
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div class="overflow-hidden bg-white rounded shadow">
              <div class="p-8">
                <div class="flex items-center ">
                  <img class="flex-shrink-0 w-12 h-auto" src={js} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-black">JavaScript</p>
                    <p class="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                   class=" w-5 h-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p class="text-base leading-relaxed text-black mt-7">
                  JavaScript empowers dynamic, interactive, and responsive web
                  applications, enhancing user experience and enabling seamless
                  client-server communication for modern, feature-rich websites
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={Html} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-black">HTML</p>
                    <p class="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                 class=" w-5 h-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p class="text-base leading-relaxed text-black mt-7">
                  HTML structures content, providing a standardized format for
                  web documents, ensuring accessibility, and facilitating
                  seamless integration of multimedia in websites.
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={css} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-black">CSS</p>
                    <p class="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                  class=" w-5 h-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p class="text-base leading-relaxed text-black mt-7">
                  CSS enriches web design, ensuring consistent styling,
                  responsive layouts, and improved user experience, enhancing
                  the visual appeal and functionality of websites.
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={react} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-black">React Js</p>
                    <p class="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                  class=" w-5 h-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p class="text-base leading-relaxed text-black mt-7">
                  React.js enables efficient UI development, component
                  reusability, and virtual DOM, streamlining the creation of
                  dynamic, high-performance web applications.
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={next} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-black">Next Js</p>
                    <p class="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                   class=" w-5 h-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p class="text-base leading-relaxed text-black mt-7">
                  Next.js simplifies React app deployment, enhances SEO, and
                  facilitates server-side rendering for faster page loads,
                  optimizing web development efficiency.
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
              <div class="p-8">
                <div class="flex items-center">
                  <img
                    class="flex-shrink-0 w-12 h-auto"
                    src={tailwind}
                    alt=""
                  />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-black">Tailwind</p>
                    <p class="mt-px text-sm text-gray-600">
                      Direct Integration
                    </p>
                  </div>
                  <svg
                    class=" w-5 h-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>

                </div>
                <p class="text-base leading-relaxed text-black mt-7">
                  Tailwind CSS streamlines styling with utility classes,
                  offering a customizable, responsive, and efficient approach
                  for building modern and visually appealing web interfaces.
                </p>
              </div>
            </div>
          </div>

          <div class="mt-12 text-center">
            <a
              href="#"
              title=""
              class="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              {" "}
              Check all 1,593 applications{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildTechnology;
