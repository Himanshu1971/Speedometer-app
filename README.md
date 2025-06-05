<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
</head>
<body>

  <h1>🏎️ Real-Time Speedometer App</h1>

  <p>This is a full-stack real-time speedometer web application designed to simulate and display speed data live. The system records speed values every second, stores them in a PostgreSQL database, and updates the frontend dashboard in real time using WebSockets.</p>

  <h2>📌 Features</h2>
  <ul>
    <li>📡 <strong>Real-time speed updates</strong> via Socket.IO</li>
    <li>📊 <strong>React speedometer UI</strong> using <code>react-d3-speedometer</code></li>
    <li>🗃️ <strong>PostgreSQL database</strong> integration with Prisma ORM</li>
    <li>🔁 <strong>Speed simulation engine</strong> generating data every 1s</li>
    <li>🐳 <strong>Dockerized</strong> for easy deployment</li>
  </ul>

  <h2>🧱 Project Structure</h2>
  <pre><code>/speedometer-project
├── backend/                  # Node.js backend with Express, Prisma, Socket.IO
│   ├── src/
│   │   ├── index.js
│   │   └── speedDataSimulator.js
│   └── prisma/
│       └── schema.prisma
├── frontend/                 # React frontend with real-time speedometer UI
│   ├── src/
│   │   └── components/Gauge.jsx
│   └── README.md
├── docker-compose.yml
├── Dockerfile (backend)
└── README.md
</code></pre>

  <h2>🚀 Tech Stack</h2>
  <table>
    <thead>
      <tr>
        <th>Layer</th>
        <th>Tech</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Frontend</td>
        <td>React, Vite, react-d3-speedometer</td>
      </tr>
      <tr>
        <td>Backend</td>
        <td>Node.js, Express, Socket.IO</td>
      </tr>
      <tr>
        <td>Database</td>
        <td>PostgreSQL with Prisma ORM</td>
      </tr>
      <tr>
        <td>DevOps</td>
        <td>Docker, Docker Compose</td>
      </tr>
    </tbody>
  </table>

  <h2>🛠️ Getting Started</h2>

  <h3>🔧 Prerequisites</h3>
  <p>Make sure Docker and Docker Compose are installed on your system.</p>

  <h3>📦 Run the Project</h3>
  <pre><code>docker-compose up --build</code></pre>
  <p>
    - Frontend: <code>http://localhost:5173</code><br>
    - Backend API: <code>http://localhost:5000</code>
  </p>

  <h2>🗄️ Data Flow</h2>
  <ol>
    <li><code>speedDataSimulator.js</code> emits a random speed value every second.</li>
    <li>The value is saved to PostgreSQL using Prisma.</li>
    <li>The backend emits the speed to all connected clients via Socket.IO.</li>
    <li>The React frontend updates the speedometer gauge in real time.</li>
  </ol>

  <h2>🐳 Docker Image</h2>
  <p>👉 <a href="https://hub.docker.com/repository/docker/himanshu1971/speedometer-backend/general" target="_blank">Backend</a></p>
  <p>👉 <a href="https://hub.docker.com/repository/docker/himanshu1971/speedometer-frontend/general " target="_blank">Frontend</a></p>

  <h2>🙌 Acknowledgements</h2>
  <ul>
    <li><a href="https://github.com/palerdot/react-d3-speedometer" target="_blank">react-d3-speedometer</a></li>
    <li><a href="https://www.prisma.io/" target="_blank">Prisma ORM</a></li>
    <li><a href="https://socket.io/" target="_blank">Socket.IO</a></li>
  </ul>

  <h2>📄 License</h2>
  <p>MIT — free to use, fork, and improve.</p>

</body>
</html>
