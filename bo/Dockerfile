# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed dependencies specified in package.json
RUN npm install

# Expose port 3000 for the app to listen on
EXPOSE 3000

# Define the command that runs the app
CMD ["npm", "start"]
