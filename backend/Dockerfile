# Use node image
FROM node:20-alpine

# Install bash
USER root
RUN apk add --no-cache bash

# Set working directory
WORKDIR /usr/src/knowquest

# Copy backend package files and install dependencies
COPY backend/package.json backend/package-lock.json ./
USER node
RUN yarn install --frozen-lockfile

# Copy backend application code
COPY --chown=node:node backend/ .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["yarn", "start"]
