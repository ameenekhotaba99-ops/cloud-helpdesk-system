# Cloud HelpDesk System

Final project for the course Development in Cloud Environments.

## Team Members

* Ameene Khotaba - 315957779
* Saher Badran - 323086017

## Project Track

Serverless Application

## Project Description

Cloud HelpDesk System is a cloud-based support request management system.
The system allows users to submit service requests through a Client Portal. Each request is saved as a ticket in AWS DynamoDB.

The project also includes an Admin Dashboard interface for monitoring support tickets and system status.

## Main Features

* Client Portal for submitting support tickets
* Admin Dashboard interface
* Ticket form with title, category, priority, description, and image upload
* Serverless backend using AWS Lambda
* API exposed through Amazon API Gateway
* Ticket data stored in Amazon DynamoDB
* Logs and monitoring using Amazon CloudWatch
* Source code stored in GitHub
* CI build using GitHub Actions
* DNS configuration using Route 53

## AWS Services Used

* Amazon S3
* Amazon API Gateway
* AWS Lambda
* Amazon DynamoDB
* Amazon CloudWatch
* AWS IAM
* Amazon Route 53
* GitHub Actions

## System Flow

1. The user opens the React Client Portal.
2. The user fills in the ticket form.
3. The request is sent to Amazon API Gateway.
4. API Gateway triggers the Lambda function.
5. The Lambda function saves the ticket in DynamoDB.
6. CloudWatch stores logs for monitoring.
7. The user receives a success message.

## API Endpoint

POST /create-ticket

## Database

DynamoDB table:

HelpDeskTickets

## Live Demo

The application can be tested locally using:

http://localhost:3000

## GitHub Actions

The project includes a React Build workflow that runs automatically on push to the main branch.

## Notes

CloudFront configuration was attempted, but AWS required account verification before creating new CloudFront resources.
