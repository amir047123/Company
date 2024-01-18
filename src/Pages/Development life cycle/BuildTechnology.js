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
              Empowers dynamic web applications
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Enhancing user experience and enabling seamless client-server
              communication for feature-rich websites.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-1 lg:grid-cols-3">
            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center ">
                  <img class="flex-shrink-0 w-12 h-auto" src={js} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">JavaScript</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>

                  <a href="https://www.javascript.com" target="_blank">
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7">
                  JavaScript empowers dynamic, interactive, and responsive web
                  applications, enhancing user experience and enabling seamless
                  client-server communication for modern, feature-rich websites
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center ">
                  <img class="flex-shrink-0 w-12 h-auto" src={ts} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">Typescript</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>
                  <a href="https://www.typescriptlang.org/" target="_blank">
                    {" "}
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7">
                  JavaScript empowers dynamic, interactive, and responsive web
                  applications, enhancing user experience and enabling seamless
                  client-server communication for modern, feature-rich websites
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={Html} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">HTML</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>

                  <a href="https://html.com/" target="_blank">
                    {" "}
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7">
                  HTML structures content, providing a standardized format for
                  web documents, ensuring accessibility, and facilitating
                  seamless integration of multimedia in websites.
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={css} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">CSS</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>
                  <a
                    href="https://www.w3.org/Style/CSS/Overview.en.html"
                    target="_blank"
                  >
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7">
                  CSS enriches web design, ensuring consistent styling,
                  responsive layouts, and improved user experience, enhancing
                  the visual appeal and functionality of websites.
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={react} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">React Js</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>
                  <a href="https://legacy.reactjs.org/" target="_blank">
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7">
                  React.js enables efficient UI development, component
                  reusability, and virtual DOM, streamlining the creation of
                  dynamic, high-performance web applications.
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={next} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">Next Js</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>
                  <a href="https://nextjs.org/" target="_blank">
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7">
                  Next.js simplifies React app deployment, enhances SEO, and
                  facilitates server-side rendering for faster page loads,
                  optimizing web development efficiency.
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center">
                  <img
                    class="flex-shrink-0 w-12 h-auto"
                    src={tailwind}
                    alt=""
                  />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">Tailwind</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>
                  <a href="https://tailwindcss.com/" target="_blank">
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7">
                  Tailwind CSS streamlines styling with utility classes,
                  offering a customizable, responsive, and efficient approach
                  for building modern and visually appealing web interfaces.
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={node} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">Node Js</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>
                  <a href="https://nodejs.org/en" target="_blank">
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7">
                  Node.js powers server-side JavaScript, enabling scalable,
                  fast, and event-driven web applications, fostering seamless
                  data exchange and efficient real-time communication.
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={express} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">Express Js</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>
                  <a href="https://expressjs.com/" target="_blank">
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7">
                  Express.js, a minimalistic Node.js framework, streamlines
                  server-side development, simplifying routing, middleware
                  usage, and fostering scalable and robust web applications.
                </p>
              </div>
            </div>
            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={GraphQL} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">GraphQL</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>

                  <a href="https://graphql.org/" target="_blank">
                    {" "}
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7">
                  GraphQL optimizes data fetching, offering a flexible schema,
                  reduced over-fetching, and under-fetching, improving
                  efficiency and enhancing API development for web applications.
                </p>
              </div>
            </div>
            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={MongoDb} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">MongoDB</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>
                  <a href="https://www.mongodb.com/" target="_blank">
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7">
                  MongoDB, a NoSQL database, enables scalable, flexible, and
                  schema-less data storage, enhancing web development with
                  efficient handling of diverse data structures.
                </p>
              </div>
            </div>
            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src={MySLQ} alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">MySLQ</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>
                  <a href="https://www.mysql.com/" target="_blank">
                    {" "}
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7">
                  MySQL provides a reliable, open-source relational database
                  solution, supporting structured data storage, retrieval, and
                  management, crucial for web development applications.
                </p>
              </div>
            </div>
            <div class="overflow-hidden bg-white  shadow card_border_gradient  rounded-xl">
              <div class="p-8">
                <div class="flex items-center">
                  <img
                    class="flex-shrink-0 w-12 h-auto"
                    src={firebase}
                    alt=""
                  />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-white">Firebase</p>
                    <p class="mt-px text-sm text-white">Direct Integration</p>
                  </div>
                  <a href="https://firebase.google.com/" target="_blank">
                    {" "}
                    <svg
                      class=" w-5 h-5 text-white"
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
                  </a>
                </div>
                <p class="text-base leading-relaxed text-white mt-7 ">
                  Firebase offers a comprehensive cloud-based platform,
                  facilitating real-time database, authentication, hosting, and
                  other services, simplifying and accelerating web development
                  processes.
                </p>
              </div>
            </div>
          </div>

          <div class="mt-12 text-center">
            <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
              <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div class="max-w-2xl mx-auto text-center">
                  <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Numbers tell our story
                  </h2>
                  <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                    Discover our narrative through data, as each number unveils
                    insights, achievements, and milestones, shaping our unique
                    and compelling journey.
                  </p>
                </div>

                <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                  <div>
                    <h3 class="font-bold text-7xl">
                      <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        {" "}
                        2+
                      </span>
                    </h3>
                    <p class="mt-4 text-xl font-medium text-gray-900">
                      Years in business
                    </p>
                    <p class="text-base mt-0.5 text-gray-500">
                      Creating the successful path
                    </p>
                  </div>

                  <div>
                    <h3 class="font-bold text-7xl">
                      <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        {" "}
                        150+
                      </span>
                    </h3>
                    <p class="mt-4 text-xl font-medium text-gray-900">
                      Projects delivered
                    </p>
                    <p class="text-base mt-0.5 text-gray-500">
                      In last 2 years
                    </p>
                  </div>

                  <div>
                    <h3 class="font-bold text-7xl">
                      <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        {" "}
                        20+
                      </span>
                    </h3>
                    <p class="mt-4 text-xl font-medium text-gray-900">
                      Team members
                    </p>
                    <p class="text-base mt-0.5 text-gray-500">
                      Working for your success
                    </p>
                  </div>
                </div>
              </div>
            </section>

          
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildTechnology;
