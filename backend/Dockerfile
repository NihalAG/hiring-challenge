# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the backend source code to the container
COPY . .

# Expose the port that the backend server will listen on
EXPOSE 8080

# Start the backend server
CMD ["npm", "start"]
