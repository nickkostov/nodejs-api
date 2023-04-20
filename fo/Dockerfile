# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install any needed dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose port 4000 for the app to listen on
EXPOSE 4000

# Define the command that runs the app
CMD ["npm", "start"]
