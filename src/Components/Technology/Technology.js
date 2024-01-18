import React from "react";

const Technology = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4  mx-auto">
          <div className="grid gap-4 mx-4 grid-cols-1 ">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-primary">
                <h3 className="text-3xl font-semibold">Development life cycle</h3>
                <span className="text-sm font-bold tracki uppercase dark:text-gray-400">
                Thinkystorm
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-white">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary">
                  <h3 className="text-xl font-semibold tracki">
                    Requirement collection and analysis
                  </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    Dec 2020
                  </time>
                  <p className="mt-3">
                    The requirement is the first stage in the SDLC process. It
                    is conducted by the senior team members with inputs from all
                    the stakeholders and domain experts in the industry.
                    Planning for the quality assurance requirements and
                    recognization of the risks involved is also done at this
                    stage.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary">
                  <h3 className="text-xl font-semibold tracki">
                    Feasibility study
                  </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    Jul 2019
                  </time>
                  <p className="mt-3">
                    Once the requirement analysis phase is completed the next
                    sdlc step is to define and document software needs. This
                    process conducted with the help of 'Software Requirement
                    Specification' document also known as 'SRS' document. It
                    includes everything which should be designed and developed
                    during the project life cycle. There are mainly five types
                    of feasibilities check
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary">
                  <h3 className="text-xl font-semibold tracki">Design</h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    Jan 2016
                  </time>
                  <p className="mt-3">
                    In this third phase, the system and software design
                    documents are prepared as per the requirement specification
                    document. This helps define overall system architecture.
                    This design phase serves as input for the next phase of the
                    model.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary">
                  <h3 className="text-xl font-semibold tracki">
                    Coding/Implementation
                  </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    Jan 2016
                  </time>
                  <p className="mt-3">
                    Once the system design phase is over, the next phase is
                    coding. In this phase, developers start build the entire
                    system by writing code using the chosen programming
                    language. In the coding phase, tasks are divided into units
                    or modules and assigned to the various developers. It is the
                    longest phase of the Software Development Life Cycle
                    process.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary">
                  <h3 className="text-xl font-semibold tracki">Testing </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    Jan 2016
                  </time>
                  <p className="mt-3">
                    Once the software is complete, and it is deployed in the
                    testing environment. The testing team starts testing the
                    functionality of the entire system. This is done to verify
                    that the entire application works according to the customer
                    requiremen
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary">
                  <h3 className="text-xl font-semibold tracki">
                    {" "}
                    Installation/Deployment{" "}
                  </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    Jan 2016
                  </time>
                  <p className="mt-3">
                    Once the software testing phase is over and no bugs or
                    errors left in the system then the final deployment process
                    starts. Based on the feedback given by the project manager,
                    the final software is released and checked for deployment
                    issues if any.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary">
                  <h3 className="text-xl font-semibold tracki"> Maintenance</h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    Jan 2016
                  </time>
                  <p className="mt-3">
                    Once the system is deployed, and customers start using the
                    developed system, following 3 activities occur Bug fixing -
                    bugs are reported because of some scenarios which are not
                    tested at all Upgrade - Upgrading the application to the
                    newer versions of the Software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
