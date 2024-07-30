# Use node image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/frontend

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN yarn install --frozen-lockfile

# Copy application files
COPY . .

# Build the Angular app
RUN yarn build --configuration production

# Install nginx
RUN apk add --no-cache nginx

# Copy the built files to nginx's html directory
RUN rm -rf /var/lib/nginx/html/* && \
    cp -r /usr/src/frontend/dist/* /var/lib/nginx/html/

FROM nginx:stable-alpine
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
