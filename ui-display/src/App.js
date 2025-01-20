import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Student from "./pages/Student.jsx";
import Teacher from "./pages/Teacher.jsx";
import Questions from "./pages/Questions.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/student" element={<Student />} />
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/questions" element={<Questions />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
