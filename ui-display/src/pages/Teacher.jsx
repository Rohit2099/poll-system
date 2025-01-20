import axios from "axios";

export default function Teacher() {
    const onSubmit = () => {
        axios.post("http://localhost:4000/uploadQ", {
            question: "Whats your name?",
            choices: [
                {
                    value: "A",
                },
                {
                    value: "B",
                },
            ],
        });
    };

    return (
        <div>
            <input id="question" type="text" />
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}
