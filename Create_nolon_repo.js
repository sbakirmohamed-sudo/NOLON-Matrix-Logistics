const fs = require('fs');
const path = require('path');

const structure = {
  'docker-compose.yml': `# Your docker-compose.yml content here`,
  'traefik/traefik.yml': `# Traefik static config`,
  'traefik/dynamic.yml': `# Traefik dynamic config`,
  'traefik/acme.json': '{}',
  'synapse/data/.gitkeep': '',
  'logistics-service/Dockerfile': `FROM node:20-alpine\nWORKDIR /app\nCOPY package.json package-lock.json ./\nRUN npm install --production\nCOPY . .\nVOLUME ["/data
