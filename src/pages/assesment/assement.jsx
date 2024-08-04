import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { FaBook, FaClipboardCheck } from "react-icons/fa6";

function Assement() {
  const CareerCard = () => {
    return (
      <div className="bg-white rounded-lg border-black border p-6 shadow-md">
        <div className="flex gap-4">
          <div className="bg-gray-300  px-4 py-1 rounded-md">Free</div>
          <div className="bg-gray-300  px-4 py-1 rounded-md">Popular</div>
        </div>
        <h2 className="text-lg font-bold text-gray-800 mb-2 mt-2">
          Introduction to SQL
        </h2>
        <div className="flex flex-col mt-4 mb-4">
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <FaBook />
              <span>12 Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <FaProjectDiagram />
              <span>3 Projects</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm pt-3">
            <FaClipboardCheck />
            <span>3 Skill Assessments</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-white border border-black  px-4 py-1 rounded-md">
            Syallabus
          </div>
          <div className="bg-blue-800 text-white  px-4 py-1 rounded-md">
            Start Assesment
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div>
        <div class="w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll ">
          <section class="assesment_section">
            <div class="banner bg-color relative bg-[#26cd7f]">
              <div class="flex items-center max-[900px]:flex-col-reverse justify-between min-[900px]:h-[400px]">
                <div class="w-full lg:w-1/2">
                  <div class="px-6 py-2">
                    <div class="text-3xl font-bold mb-4">
                      Grow Your Skills and Elevate your Career to next Level
                      with Our Courses
                    </div>
                    <div class="mb-4">
                      <p class="text-sm">
                        Learn the basics, or refine your skills with tutorials
                        designed to inspire from top mentors and specialist
                        organisations. Get Career Guidance and Boost Your Resume
                        and also Learn faster with real hands-on projects and
                        quizes and assesments
                      </p>
                    </div>
                    <div class="mb-4">
                      <p class="text-base">
                        Get <span class="text-purple-500">Skilled.</span> Get
                        <span class="text-purple-500">Certified.</span> Get
                        <span class="text-purple-500">Hired.</span>
                      </p>
                    </div>
                    <div
                      class="yellow_tag cursor-pointer"
                      onclick="closeYellowTag()"
                    >
                      <p>
                        Get Personalized Recommendations by taking this test
                      </p>
                      <div class="hide"></div>
                    </div>
                  </div>
                </div>
                <div class="py-8 w-[40%] max-[900px]:w-[70%]">
                  <img
                    src="/src/assets/banner_img.svg"
                    alt="banner_pic"
                    class="h-auto p-6"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 mt-10 px-4 ">
            <CareerCard />
            <CareerCard />
            <CareerCard />
            <CareerCard />
            <CareerCard />
            <CareerCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assement;
