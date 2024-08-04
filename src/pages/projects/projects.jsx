import React from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects/details");
  };
  const Card = () => {
    return (
      <div class="course_card project_card m-5 w-[30%] min-w-[320px] mb-20 shadow-md flex flex-col">
        <div class="image">
          <img
            src="/src/assets/card_banner.svg"
            alt="card"
            class="w-full h-48 object-cover"
          />
        </div>
        <div class="course_body flex flex-col justify-between">
          <div class="title p-4 pb-2">
            <span class="text-pink-500 font-semibold">Tutorial</span>
            <p class="font-bold">Introduction to Python</p>
          </div>
          <div class="par text-sm p-2">
            <p>
              Master the basics of data analysis in Python. Expand your skillset
              by learning scientific computing with numpy. Master the basics of
              data analysis in Python.
            </p>
          </div>
          <div class="icons flex justify-between p-2">
            <div class="icon_item flex items-center">
              <span>
                <img
                  src="/src/assets/card_time.svg"
                  alt="time"
                  class="w-5 h-5"
                />
              </span>
              <p>16 hours</p>
            </div>
            <div class="icon_item flex items-center">
              <span>
                <img
                  src="/src/assets/card_time.svg"
                  alt="time"
                  class="w-5 h-5"
                />
              </span>
              <p>16 hours</p>
            </div>
            <div class="icon_item flex items-center">
              <span>
                <img
                  src="/src/assets/card_time.svg"
                  alt="time"
                  class="w-5 h-5"
                />
              </span>
              <p>16 hours</p>
            </div>
          </div>
          <div class="author_tag flex items-center p-2">
            <p class="text-gray-700 font-semibold">Author:</p>
            <div class="name flex items-center ml-2">
              <span>
                <img src="/src/assets/coin.svg" alt="indian" class="w-4 h-4" />
              </span>
              <h3 class="text-gray-700 font-semibold">Alan Biju</h3>
            </div>
          </div>
          <div class="card_tags p-2">
            <p class="font-semibold">Prerequisites :</p>
            <div class="tags_box flex items-center">
              <div class="tags bg-purple-200 py-1 px-2 rounded-lg mr-2">
                <p>React</p>
              </div>
              <div class="tags bg-purple-200 py-1 px-2 rounded-lg mr-2">
                <p>Kodo</p>
              </div>
            </div>
          </div>
          <button
            class="w-full h-9 bg-blue-500 text-white font-semibold rounded-md mt-4"
            onClick={handleClick}
          >
            View in Detail
          </button>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div class="w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll ">
        <section class="">
          <div class="final bg-color relative bg-[#26cd7f]">
            <div class="flex items-center max-[900px]:flex-col-reverse justify-between min-[900px]:h-[400px]">
              <div class="w-full lg:w-1/2">
                <div class="px-6 py-2">
                  <div class="text-3xl font-bold mb-4">
                    Grow Your Skills and Elevate your Career to next Level with
                    Our Courses
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
                    <p>Get Personalized Recommendations by taking this test</p>
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
          <div class="final p-4">
            <div class="title relative text-2xl mt-12 mb-4 font-bold">
              <h1>Popular Projects</h1>
            </div>
            <div class=" flex flex-wrap ">
              <Card />
              <Card />
              <Card />
            </div>
          </div>

          <div class=" px-4">
            <div class="title flex justify-between items-center text-xl">
              <div>
                <p class="font-bold">All courses</p>
                <span class="text-xs">86 results on techsnap</span>
              </div>
              <div class="search">
                <form class="search-container flex">
                  <input
                    type="text"
                    id="search-bar"
                    placeholder="search courses"
                    class="border border-gray-400 rounded px-2 py-1"
                  />
                  <a href="#">
                    <img
                      src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                      class="search-icon w-10 h-10 "
                      alt="search icon"
                    />
                  </a>
                </form>
              </div>
            </div>
            <div class=" flex flex-wrap ">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
