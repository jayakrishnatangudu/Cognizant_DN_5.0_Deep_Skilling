import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import "./App.css";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    // Element Variable
    let courseComponent;

    if (showCourses) {
        courseComponent = <CourseDetails />;
    }

    return (
        <div className="App">

            <h1>Blogger App</h1>

            {/* Method 1 : if using Element Variable */}
            {courseComponent}

            {/* Method 2 : Logical && */}
            {showBooks && <BookDetails />}

            {/* Method 3 : Ternary Operator */}
            {showBlogs ? <BlogDetails /> : <h3>No Blogs Available</h3>}

        </div>
    );
}

export default App;