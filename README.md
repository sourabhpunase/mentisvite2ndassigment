![Screenshot (19)](https://github.com/sourabhpunase/mentisvite2ndassigment/assets/141872187/35af6112-d5d3-4cf4-b16e-c0a98dca16ca)
# MentisVite2ndAssignment

## Introduction
MentisVite2ndAssignment is a web application developed using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to manage listings in a table format. Users can perform CRUD (Create, Read, Update, Delete) operations on the listings, as well as filter and search for specific entries. The application also supports user authentication using Google OAuth via Firestore, allowing users to sign in, sign out, and delete their account.

## Demo
A live demo of the application can be accessed [here](https://mentisvite2ndassigment.onrender.com/).

## Technologies Used
- MERN Stack
- MongoDB
- Express.js
- React
- Node.js
- JWT Token Encryption
- Redux Toolkit
- Tailwind CSS
- Redux Persist
- Firestore Auth
- Mongoose
- React-Toastify

## Features
- CRUD functions: Users can create new listings, edit existing ones, and delete entries from the table.
- User Authentication: Users can log in using Google OAuth via Firestore. They can also sign out and delete their account.
- State Management: Redux Toolkit is used for state management, providing a centralized store for managing application state.
- Styling: Tailwind CSS is used for styling, providing a modern and responsive design.
- Encryption: JWT tokens and hashing are used for encryption and privacy.
- Cookies: Cookies are used for storing user web tokens, providing a secure authentication mechanism.
- Profile Picture Upload: Users can upload their profile picture for customization.

## Filter and Search
- Ascending and Descending Order: Users can filter entries in ascending or descending order based on name, email, and phone.
- Search: Users can search for specific entries using the search bar to find desired results quickly.

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the dependencies.

## Setup
1. Configure environment variables if necessary.
2. Set up a MongoDB database and ensure it is accessible.
3. Configure Google OAuth for user authentication if needed.
4. Make any necessary adjustments to the code, such as updating API endpoints or configuring additional features.

## Running the Application
1. Once the setup is complete, run `npm start` to start the application.
2. The application will be accessible at the specified URL or port (usually `http://localhost:3000`).

## Additional Information
- For troubleshooting or assistance, please contact the project maintainer.
- Known issues and updates will be documented in the repository's issue tracker and changelog.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
