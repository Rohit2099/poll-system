import { useState } from "react";
import { useNavigate } from "react-router";
import "./Home.css";

export default function Home() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const onSubmit = () => {
        if (selected) {
            if (selected === "Student") {
                navigate("/student");
            } else {
                navigate("/teacher");
            }
        }
    };
    return (
        <div id="containter">
            <text id="header">Welcome to the live polling system</text>
            <text id="header-desc">
                Please select the role that best describes you to begin with the live polling system
            </text>
            <div id="selections">
                <div onClick={() => setSelected("Teacher")} className="selection">
                    <p>
                        <text className="title">I'm a Teacher</text>
                        <br></br>
                        <text className="content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore ut
                            doloremque, placeat vero eos maxime unde deserunt natus illum nesciunt
                            tenetur consequatur impedit debitis praesentium non, error officia
                            commodi.
                        </text>
                    </p>
                </div>
                <div onClick={() => setSelected("Student")} className="selection">
                    <p>
                        <text className="title">I'm a Student</text>
                        <br></br>
                        <text className="content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore ut
                            doloremque, placeat vero eos maxime unde deserunt natus illum nesciunt
                            tenetur consequatur impedit debitis praesentium non, error officia
                            commodi.
                        </text>
                    </p>{" "}
                </div>
            </div>
            <div id="submit">
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    );
}
