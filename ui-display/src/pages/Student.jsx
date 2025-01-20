import { useNavigate } from "react-router";

export default function Student({ socket }) {
    const navigate = useNavigate();

    const onContinue = () => {
        const inp = document.getElementById("student-inp");
        if (inp.value) {
            navigate("/questions");
        }
    };

    return (
        <div id="containter">
            <h1>Let's get started</h1>
            <div id="selections">
                <label htmlFor="student-inp">Enter your name</label>
                <input id="student-inp" type="text" />
            </div>
            <div id="submit">
                <button onClick={onContinue}>Continue</button>
            </div>
        </div>
    );
}
