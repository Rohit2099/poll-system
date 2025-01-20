import useSocket from "../useSocket";
import { useEffect, useState } from "react";

export default function Questions() {
    const socket = useSocket();

    const [question, setQuestion] = useState(null);

    useEffect(() => {
        if (socket) {
            socket.on("question", (question) => {
                setQuestion(question);
                console.log(question);
            });
        }
    }, [socket]);

    return (
        <div id="container">
            <h2>Question</h2>
            <div id="question"></div>
            <div id="options"></div>
        </div>
    );
}
