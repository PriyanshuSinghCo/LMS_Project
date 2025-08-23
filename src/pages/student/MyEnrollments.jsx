import React, {useContext, useState} from 'react'
import { AppContext } from './../../context/AddContext';
import Footer from './../../component/student/Footer';
import {Line} from "rc-progress";


const MyEnrollments = () => {

    const { enrolledCourses, calculateCourseDuration, navigate } = useContext(AppContext);

    const [progressArray, setProgressArray] = useState([
        {lectureComleted: 2, totalLectures: 4},
        {lectureComleted: 1, totalLectures: 5},
        {lectureComleted: 3, totalLectures: 6},
        {lectureComleted: 4, totalLectures: 4},
        {lectureComleted: 0, totalLectures: 3},
        {lectureComleted: 5, totalLectures: 7},
        {lectureComleted: 6, totalLectures: 8},
        {lectureComleted: 2, totalLectures: 6},
        {lectureComleted: 4, totalLectures: 10},
        {lectureComleted: 3, totalLectures: 5},
        {lectureComleted: 7, totalLectures: 7},
        {lectureComleted: 1, totalLectures: 4},
        {lectureComleted: 0, totalLectures: 2},
        {lectureComleted: 5, totalLectures: 5}
    ])

  return (
    <>
    <div className="md:px-36 px-8 pt-10">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
                <tr>
                    <th className="px-4 py-3 font-semibold truncate">Course</th>
                    <th className="px-4 py-3 font-semibold truncate">Duration</th>
                    <th className="px-4 py-3 font-semibold truncate">Completed</th>
                    <th className="px-4 py-3 font-semibold truncate">Status</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {enrolledCourses.map((course, index) => (
                    <tr key={index} className="border-b border-gray-500/20">
                        <td className="md:px-4 pl-2 md:pl-4 py-3 flex item-center space-x-3">
                            <img src={course.courseThumbnail} alt="" className="w-14 sm:w-24 md:w-28" />
                            <div className="flex-1">
                                <p className="mb-1 max-sm:text-sm">{course.courseTitle}</p>
                                <Line strokewidth={2} percent={progressArray[index] ? (progressArray[index].lectureComleted * 100) / progressArray[index].totalLectures : 0 } className="bg-gray-300 rounded-full" />
                            </div>
                        </td>
                        <td className="px-4 py-3 max-sm:hidden">
                            {calculateCourseDuration }
                        </td>
                        <td className="px-4 py-3 max-sm:hidden">
                            {progressArray[index] && `${progressArray[index].lectureComleted} / ${progressArray[index].totalLectures}`} <span>Lectures</span>
                        </td>
                        <td className="px-4 py-3 max-sm:text-right">
                            <button className="px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white rounded" 
                            onClick={() => navigate('/player/' + course._id)}
                            >
                                {progressArray[index] && progressArray[index].lectureComleted / progressArray[index].totalLectures === 1 ? 'Completed' : 'On Going'}
                                </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    <Footer/>
    </>
  )
}

export default MyEnrollments