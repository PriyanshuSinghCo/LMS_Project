import { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets"
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY



    const navigate = useNavigate()


    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);
 

    // Fetch All Courses
    const featchAllCoourses = async () => {
        setAllCourses(dummyCourses)
    }

    // Function to calculate average rating of course

    const calculateRating = (course) => {
        if(course.courseRatings.length === 0) {
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return totalRating / course.courseRatings.length
    }

    // Function to calculate course chapter time
    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration);
        return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]})
    }

    // Function to calculate Course Duration
    const calculateCourseDuration = (course) => {
        let time = 0;

        course.courseContent.map((chapter) => chapter.chapterContent.map(
            (lecture) => time += lecture.lectureDuration
        ))
         return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]})
    }


    useEffect(() => {
         featchAllCoourses()
    }, [])

    const value = {
        currency, allCourses, navigate, calculateRating, isEducator, setIsEducator
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    ) 
}