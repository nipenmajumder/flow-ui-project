
# Docker Setup for Keycloak Authentication

This setup includes Keycloak, PostgreSQL, and your React application running in Docker containers.

## Prerequisites

- Docker and Docker Compose installed on your system

## Quick Start

### Development Environment (Keycloak only)

To run only Keycloak and PostgreSQL for development:

```bash
# Start Keycloak and PostgreSQL
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f keycloak
```

Your React app will run locally with `npm run dev`, connecting to Keycloak at http://localhost:8080.

### Full Environment (All services)

To run everything in containers:

```bash
# Build and start all services
docker-compose up --build -d

# View logs
docker-compose logs -f
```

## Services

- **Keycloak**: http://localhost:8080
  - Admin Console: http://localhost:8080/admin
  - Username: `admin`
  - Password: `admin`
- **React App**: http://localhost:3000
- **PostgreSQL**: localhost:5432 (dev mode only)

## Keycloak Configuration

1. Access Keycloak Admin Console at http://localhost:8080/admin
2. Login with admin/admin
3. Create a new realm or use the existing 'master' realm
4. Create a new client for your React app:
   - Client ID: `react-app`
   - Client Type: `OpenID Connect`
   - Valid redirect URIs: `http://localhost:3000/*`
   - Web origins: `http://localhost:3000`

## Environment Variables

Update your `.env.local` file:

```
VITE_KEYCLOAK_URL=http://localhost:8080
VITE_KEYCLOAK_REALM=master
VITE_KEYCLOAK_CLIENT_ID=react-app
```

## Commands

```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up -d

# Start full environment
docker-compose up --build -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f [service-name]

# Rebuild and restart
docker-compose up --build --force-recreate
```

## Volumes

- PostgreSQL data is persisted in Docker volumes
- To reset everything: `docker-compose down -v`
