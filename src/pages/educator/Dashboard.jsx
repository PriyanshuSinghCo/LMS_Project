import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./../../context/AddContext";
import { dummyDashboardData } from "../../assets/assets";
import { assets } from "./../../assets/assets";
import Loading from "./../../component/student/Loading";

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5 items-center">

          {/* Total Enrollment */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.patients_icon} alt="students_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.enrolledStudentData}
              </p>
              <p className="text-base text-gray-500">Total Enrollment</p>
            </div>
          </div>

          {/* Total Courses */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.appointments_icon} alt="courses_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.totalCourses}
              </p>
              <p className="text-base text-gray-500">Total Courses</p>
            </div>
          </div>

          {/* Total Earnings */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.earning_icon} alt="earnings_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {currency}
                {dashboardData.totalEarnings}
              </p>
              <p className="text-base text-gray-500">Total Earning</p>
            </div>
          </div>
        </div>
            <div>
                <h2 className="pb-4 text-lg font-medium">Latest Enrolments</h2>
                <div className="flex flex-col items-center max-w-4xl w-full ovreflow-hidden rounded-md bg-white border border-gray-500/20">
                    
                </div>
            </div>

      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
