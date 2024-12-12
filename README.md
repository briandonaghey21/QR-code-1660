# Cloud Computing Final Project- The Attendance Takers
## Project Title: QR Code Class Attendance Taker
### Group Members :
 - Branden Lientz
 - Brian Donaghey
 - Eli Cohen
 - Ron Jiang
 - Jun Da Axel Teo
 ## Overview:
 This is the final project for CS1660. The objective is to leverage Google Cloud Platform (GCP) services to build a
 cloud-based application that incorporates at least three different cloud services (i.e. Cloud Storage, Compute Engine,
 Cloud Run, BigQuery, etc). These services do not need to be limited to the ones covered in the course, and the
 project can be developed using any programming language or framework.
 Each team will be responsible for choosing a project idea, developing the application, and deploying it on GCP.
## Project Description:
 We decided to go with the QR Code Class Attendance by introducing a system that generates and uses QR codes for
 attendance tracking, minimizing time spent on attendance. This project provides an efficient and scalable
 cloud-based solution to record and store attendance data for events or classes.
 ## Rubric:
 The project will be graded based on the following criteria:
 - Usage of at least 3 GCP Services: (30 pts) The project should incorporate at least three different GCP services.
 - Deployment Automation: (5 pts) The deployment process should be automated (that is, it should not require manual
 intervention).
 - Presentation: (5 pts) The team will demo the project to the class, explaining the problem it aims to solve, the
 architecture, and the technologies used.
## Project Structure:
A user can log in with his google account (firebase authentication) to access the dashboard. From the dashboard (cloud run/ app engine), the user can generate a qr code.The attendance taker will display this qr code to allow people to mark their attendance and track the names of people that have attended the event.
### Each webform will:
- have the class ID has a parameter
 - have an input field for attendees to input their name
 - upon submission, store this record in the database
### Firestore database to store student attendance
 - No-SQL database contains student attendance details (className, studentName, time)
 - Security keys ensure only authenticated APIs can interact with it
### API Server deployed on GCP App Engine
 - Provides API endpoints to read and write to database
 - App Engine provides easy deployment, scalability and security
### Google Services used:
 - Cloud run/ app engine to run the app
 - Google cloud functions to generate qr code image from url
 - Firestore as database
 - Google Cloud Build to automate deployment of web app, so pushing code to GitHub will deploy the updated application automatically
## Deployment
### Firestore database
We use Firestore, a No-SQL database, to store attendance data in the form of documents in a collection. The Firestore database was created through the GCP console. There is a service account with read/ edit permissions for the database and the service account credentials (provided through a serviceAccountKey.json file) are used to authenticate the API server. The serviceAccountKey.json file is not uploaded into this repository.


### API Server on App Engine
The API server is responsible for handling HTTP requests and interacting with the Firestore database. The API server is developed using Node.js and Express, and deployed to Google Cloud Platform's App Engine.
The API server is connected to the Firestore database via a service account, and it is authenticated with the serviceAccountKey.json. The API server provides endpoints to read and write to the database. The API server protects against unauthorized access by using Cross-Origin Resource Sharing (CORS) to allow only approved domains to make requests.
The API server is deployed on GCP App Engine. The package.json file defines its dependencies, while the app.yaml file configures the App Engine Environment (runtime, memory, CPUs).


### Cloud Run/Cloud Storage Deployment
To deploy the application, we used Cloud Run and set up a Cloud Build trigger connected to the GitHub repository. This trigger monitors changes to the main branch of the repository. Whenever a change is pushed, it automatically triggers a new build, which includes building a Docker image, pushing it to Google Container Registry, and deploying it to Cloud Run. The deployment process is defined and managed through the cloudbuild.yaml file, which outlines the steps that Cloud Build follows to build, push, and deploy the application.


### Github Repository:
ekc33/QR-code-1660: Final Project for CS 1660


### Video Demo:
https://drive.google.com/file/d/1iVR9jLL7PuMD-12LNCXfAPs7jCNIjOJn/view?usp=sharing


