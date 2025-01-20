import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export default function useSocket() {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        if (!socket) {
            const URL = "http://localhost:4000";
            const sock = io(URL);
            sock.on("connect", () => {
                console.log("connected from client");
                setSocket(sock);
            });
        }
    }, []);

    return socket;
}
