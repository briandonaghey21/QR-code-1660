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
 A user can log in with his google account (firebase authentication) to access the dashboard.
 From the dashboard (cloud run/ app engine), the user can create new events.
 Each event will:
 - have a unique qr code tied to a webform with event-id as a url parameter (generated with google cloud functions).
 The attendance taker will display this qr code to allow people to mark their attendance.
 - track the names of people that have attended the event.
 - Deploy System on Cloud Run via a Trigger in Cloud Build whenever the repository changes.

Each webform will:
 - have the event-id has a parameter
 - have an input field for attendees to input their name
 - upon submission, store this record in the database
 
Database to store qr code images (google cloud storage) OR qr code images can be generated each time on request to reduce storage

Database to store events (Firestore)
 - creator
 - event id
 - event name
 - qr code url

Database to store attendees (Firestore)
 - event id
 - attendee name

Google Services used:
 - Cloud run where the application is deployed
 - Google cloud functions to generate qr code image from url
 - Firestore as database
 - Google cloud storage for qr code images (optional)
 - Google Cloud Build to automate deployment of web app, so pushing code to GitHub will deploy the updated application
 automatically to Cloud Run
