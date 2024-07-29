FROM node:20-alpine

# Install bash
USER root
RUN apk add --no-cache bash

# Create application directory and set permissions
RUN mkdir -p /usr/src/knowquest && chown -R node:node /usr/src/knowquest

WORKDIR /usr/src/knowquest

# Copy package files and install dependencies
COPY package.json package-lock.json ./
USER node
RUN yarn install --frozen-lockfile

# Copy application code and set permissions
COPY --chown=node:node . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["yarn", "nodemon", "src/server.js"]
