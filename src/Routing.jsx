import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Navbar from "./component/navbar";
import Cources from "./pages/courses/courses";
import SignIn from "./pages/authentication/signin";
import SignUp from "./pages/authentication/signup";
import CareerPath from "./pages/careerPath/careerPath";
import Projects from "./pages/projects/projects";
import ProjectDetails from "./pages/projects/details";
import CareerDetails from "./pages/careerPath/details";
import CourseDetails from "./pages/courses/details";
import MyProgress from "./pages/myProgress/myprogress";
import MyFeed from "./pages/myFeed/myfeed";
import Topics from "./pages/topics/topics";
import Competitors from "./pages/competitors/competitors";
import LeaderBoard from "./pages/leaderboard/leaderboard";
import ForgotPassword from "./pages/authentication/forgotpass";
import LearnModule from "./pages/LearningModule/LearnModule";
import Assement from "./pages/assesment/assement";
import Catalog from "./pages/catalog/catalog";
import AssementDetails from "./pages/assesment/deatils";
import SkillPath from "./pages/skillPath/skillPath";
import SkillPathDetails from "./pages/skillPath/detail";
const Routing = () => {
  const Home = () => <h1>Hello World</h1>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        {/* <Route path="/learningmodule" element={<LearnModule />} /> */}

        {/*  paht/ rm  for makin / as independent*/}
        <Route element={<Navbar />}>
          <Route index element={<MyProgress />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="myfeed" element={<MyFeed />} />
          <Route path="topics" element={<Topics />} />
          <Route path="competitions" element={<Competitors />} />
          <Route path="leaderboard" element={<LeaderBoard />} />

          <Route path="courses" element={<Cources />} />
          <Route path="courses/details" element={<CourseDetails />} />

          <Route path="career" element={<CareerPath />} />
          <Route path="career/details" element={<CareerDetails />} />

          <Route path="skill" element={<SkillPath />} />
          <Route path="skill/details" element={<SkillPathDetails />} />

          <Route path="career" element={<CareerPath />} />
          <Route path="career/details" element={<CareerDetails />} />

          <Route path="projects" element={<Projects />} />
          <Route path="projects/details" element={<ProjectDetails />} />
          <Route path="learningmodule" element={<LearnModule />} />
          <Route path="assesment" element={<Assement />} />
          <Route path="assesment/details" element={<AssementDetails />} />

          <Route path="catalog" element={<Catalog />} />
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
