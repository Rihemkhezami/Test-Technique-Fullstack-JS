# Step 1: Build the application
FROM node:20.11.1 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the application files into the container
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the application with a web server
FROM nginx:stable-alpine

# Copy the built files from the previous stage into the nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom nginx configuration, if necessary
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the application
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
