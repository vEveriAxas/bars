import { io } from "socket.io-client";
import { hostName } from "../index";

function initWsConnection() {
    try {
        const socket = io(hostName);
        return socket;
    } catch (err) {
        throw new Error(`api/ws/index.js: initWsConnection  => ${err}`);
    }
}

const socket = initWsConnection();

export default socket;