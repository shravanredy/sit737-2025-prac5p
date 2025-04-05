# sit737-2025-prac5p

Docker Web Application
This project demonstrates how to containerize a simple Node.js web application using Docker and Docker Compose, with a health check to monitor its status.

Features
Express.js Application: A simple server running on port 3000.

Health Check: /health endpoint to monitor the container's health.

Dockerized: The app is containerized with Docker and managed using Docker Compose.

Setup
Clone the Repository:


docker-compose build
docker-compose up -d
Access the App: Open your browser and go to http://localhost:3000.

Health Check: Docker checks the /health endpoint every 30 seconds. After 3 failed attempts, the container is marked as unhealthy.

Health Check Configuration
yaml
Copy
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
  interval: 30s
  retries: 3
  start_period: 10s
  timeout: 10s

  
Stop Containers
To stop the containers, run:
docker-compose down
