# Docker Setup for Stingray Landing Page

This project includes Docker configurations for both development and production environments.

## Prerequisites

- Docker installed on your system
- Docker Compose installed (if using compose files)

## Docker Configuration Files

- `Dockerfile`: Production multi-stage build using nginx to serve the React app
- `Dockerfile.dev`: Development setup with hot-reloading
- `docker-compose.yml`: Development environment configuration
- `docker-compose.prod.yml`: Production environment configuration
- `nginx.conf`: Nginx configuration for serving the React app with proper routing

## Quick Start

### Development Environment

1. Build and start the development container:
   ```bash
   docker-compose up
   ```

2. The application will be available at `http://localhost:3000`

### Production Environment

1. Build and start the production container:
   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```

2. The application will be available at `http://localhost`

## Building Images Manually

### Development Image

```bash
docker build -f Dockerfile.dev -t stingray-landing:dev .
```

### Production Image

```bash
docker build -t stingray-landing:latest .
```

## Pushing to DockerHub

1. Log in to DockerHub:
   ```bash
   docker login
   ```

2. Tag and push development image:
   ```bash
   docker tag stingray-landing:dev <your-dockerhub-username>/stingray-landing:dev
   docker push <your-dockerhub-username>/stingray-landing:dev
   ```

3. Tag and push production image:
   ```bash
   docker tag stingray-landing:latest <your-dockerhub-username>/stingray-landing:latest
   docker push <your-dockerhub-username>/stingray-landing:latest
   ```

## Environment Variables

The development environment supports the following environment variables:
- `NODE_ENV`: Set to 'development' for development builds
- `CHOKIDAR_USEPOLLING`: Required for file watching in some Docker environments
- `WATCHPACK_POLLING`: Required for file watching in some Docker environments

## Production Considerations

The production Dockerfile uses:
- Multi-stage build to optimize image size
- nginx to serve static files efficiently
- Proper caching headers for static assets
- React Router-friendly routing (SPA fallback)

## Troubleshooting

### Development Container Issues
- If the development server doesn't reload on code changes, ensure your Docker environment supports file watching
- You may need to run the container with additional privileges in some environments

### Production Container Issues
- Check that the build process completed successfully before serving
- Verify that static assets are properly cached and accessible