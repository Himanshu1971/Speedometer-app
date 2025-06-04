import React, { useEffect, useState } from "react";
import Gauge from "../components/Gauge";
import axios from "axios";
import { io } from "socket.io-client";

// Initialize Socket.IO client to connect to backend server
const socket = io("http://localhost:5000");

const Home = () => {
  const [speed, setSpeed] = useState(0);     // Current speed state
  const [logs, setLogs] = useState([]);      // Recent speed logs

  useEffect(() => {
    // Listen for real-time speed updates from backend
    socket.on("speedUpdate", (newSpeed) => {
      setSpeed(newSpeed);

      // Optionally fetch updated logs on every new speed event
      axios.get("http://localhost:5000/api/speed-logs")
        .then((res) => setLogs(res.data))
        .catch((err) => console.error(err));
    });

    // Initial fetch of recent speed logs on component mount
    axios.get("http://localhost:5000/api/speed-logs")
      .then((res) => setLogs(res.data))
      .catch((err) => console.error(err));

    // Clean up the socket listener on component unmount
    return () => socket.off("speedUpdate");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Real-Time Speedometer
        </h1>

        {/* Gauge component to display current speed */}
        <Gauge speed={speed} />

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
            Recent Speed Logs
          </h2>

          {/* Display recent speed logs */}
          <ul className="divide-y divide-gray-200 bg-gray-50 rounded-lg overflow-hidden">
            {logs.map((log) => (
              <li key={log.id} className="p-4 hover:bg-gray-100 transition">
                <span className="font-medium text-lg">{log.speed} km/h</span>
                <span className="text-sm text-gray-500 ml-4">
                  at {new Date(log.created_at).toLocaleTimeString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
