# Get_Youtube_Subscribers

## Description
  This is an Express.js-based backend project designed to manage subscribers. It provides a RESTful API to perform CRUD (Create, Read, Update, Delete) operations on subscriber data.

## Features
  ## Routes
    The backend application provides several routes for managing subscriber data.
    - GET /subscribers: Fetch all subscriber data.
    - GET /subscribers/names: Fetch all subscriber data with only the names and subscribed channel names.
    - GET /subscribers/:id: Fetch a specific subscriber by ID.
    - POST /subscribers/add: Add a new subscriber. Requires name and subscribedChannel in the request body.
    - PATCH /subscribers/update/:id: Update an existing subscriber. Requires the subscriber's ID in the route and either name or subscribedChannel in the request body.
    - DELETE /subscribers/delete/:id: Delete a subscriber by ID.

## Installation
    To set up the Crypto Dashboard on your local environment, follow these steps:

    Clone the repository:

    https://github.com/Yogesh-Ginti/Get_YOUTUBE_SUBSCRIBER.git
    cd GET_YOUTUBE_SUBSCRIBER
    Install dependencies: npm install

    Start the development server: npm run dev

  Open your web browser and go to http://localhost:3000 to view the index Page.

## Credits
  -  Libraries and Tools:
      Node.js
      Express.js
      Mongoose
      dotenv
      MongoDB

## Contributing
  Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

  Fork the repository.
  Create a new branch for your feature or fix.
  Commit your changes with clear commit messages.
  Open a pull request, describing your changes and why they should be merged.