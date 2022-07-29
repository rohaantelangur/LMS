import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Login } from "./Login";
import { Register } from "./Register";
import Profile from "./Profile"
import Assignments from "../Components/Assignments";
import Dashboard from "../Components/Dashboard";
import Earning from "../Components/Earning";
import MyCourses from "../Components/MyCourses";
import MyProfile from "../Components/MyProfile";
import Quiz from "../Components/Quiz"
import Reviews from "../Components/Reviews"
import Settings from "../Components/Settings"
import WishList from "../Components/WishList"
import Withdraw from "../Components/Withdraw"
import PurchaseHistory from "../Components/PurchaseHistory"
import EnrolledCourse from "../Components/EnrolledCourse";
import Navbar from "../Components/Navbar";
import CoursesDetail from "./CoursesDetail";

export const MainRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/courses/:id" element={<CoursesDetail />} />
        <Route path="/profile" element={<Profile />} >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="earning" element={<Earning />} />
        <Route path="mycourses" element={<MyCourses />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="setting" element={<Settings />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="enrolledcourse" element={<EnrolledCourse />} />
        <Route path="purchasehistory" element={<PurchaseHistory />} />
        </Route>
      </Routes>
    </div>
  );
};
