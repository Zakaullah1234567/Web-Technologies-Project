import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import DonorDashboard from "../pages/donor/DonorDashboard";
import AddDonation from "../pages/donor/AddDonation";
import MyDonations from "../pages/donor/MyDonations";

import VolunteerDashboard from "../pages/volunteer/VolunteerDashboard";
import AvailablePickups from "../pages/volunteer/AvailablePickups";

import NgoDashboard from "../pages/ngo/NgoDashboard";
import IncomingDeliveries from "../pages/ngo/IncomingDeliveries";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import Analytics from "../pages/admin/Analytics";

import NotFound from "../pages/NotFound";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/donor/dashboard"
          element={
            <Layout>
              <DonorDashboard />
            </Layout>
          }
        />
        <Route
          path="/donor/add"
          element={
            <Layout>
              <AddDonation />
            </Layout>
          }
        />
        <Route
          path="/donor/my-donations"
          element={
            <Layout>
              <MyDonations />
            </Layout>
          }
        />

        <Route
          path="/volunteer/dashboard"
          element={
            <Layout>
              <VolunteerDashboard />
            </Layout>
          }
        />
        <Route
          path="/volunteer/pickups"
          element={
            <Layout>
              <AvailablePickups />
            </Layout>
          }
        />

        <Route
          path="/ngo/dashboard"
          element={
            <Layout>
              <NgoDashboard />
            </Layout>
          }
        />
        <Route
          path="/ngo/deliveries"
          element={
            <Layout>
              <IncomingDeliveries />
            </Layout>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <Layout>
              <AdminDashboard />
            </Layout>
          }
        />
        <Route
          path="/admin/users"
          element={
            <Layout>
              <ManageUsers />
            </Layout>
          }
        />
        <Route
          path="/admin/analytics"
          element={
            <Layout>
              <Analytics />
            </Layout>
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;