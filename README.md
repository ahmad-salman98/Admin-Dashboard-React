- Introduction
This is a simple Next.js application that allows admins to view information about other users. The application has a clean and intuitive interface that makes it easy to find the information you're looking for.

-Getting Started
To run this application, you will need to have Node.js and npm installed on your machine. Once you have these tools, you can clone the repository and install the required dependencies with the following commands:

$ git clonegithub.com/ahmad-salman98/estarta-assessment.git
$ npm install


Next, start the development server with the following command:

$ npm run dev


This will start the server and you can access the application in your browser at http://localhost:3000.

Features
The application allows you to view information about other users, including their name, email, and profile picture. You can also search for users by their name, making it easy to find the information you're looking for.

API Reference
The application uses a REST API to retrieve user information. The API is located at https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f
and returns an array of user objects in the following format:


Deployment
To deploy this application to a production environment, you will need to build the production version of the code and serve it with a static web server. You can build the production version of the code with the following command:



$ npm run build


Once you have built the code, you can serve it with a static web server like Nginx or Apache. Be sure to configure the server to serve the .next folder as the root of the application.

Conclusion
This Next.js application provides an easy way to view information about other users. With its clean and intuitive interface, you can quickly find the information you're looking for. Whether you're a developer or a casual user, this application is a great tool for exploring user information.



