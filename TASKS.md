# Task List

+ [x] 0. **Utility for Redis**
  + Inside the directory [`utilities`](utilities), create a script called [`redis-client.js`](utilities/redis-client.js) containing a class named `RedisClient`.
  + `RedisClient` should provide the following functionalities:
    + Constructor: Establish a connection to Redis. Display any errors from the Redis client in the console.
    + Method `isAlive()`: Return `true` if the connection to Redis is successful, otherwise return `false`.
    + Asynchronous method `get(key)`: Retrieve the value stored in Redis for the given key.
    + Asynchronous method `set(key, value, duration)`: Store the key-value pair in Redis with an expiration duration specified in seconds.
    + Asynchronous method `del(key)`: Delete the value associated with the given key from Redis.
  + Export an instance of `RedisClient` named `redisClient`.

+ [x] 1. **MongoDB Utilities**
  + Within the directory [`utilities`](utilities), create a file named [`mongodb.js`](utilities/mongodb.js) containing the class `DBClient`.
  + `DBClient` should offer the following features:
    + Constructor: Establish a connection to MongoDB using the provided environment variables or default values.
    + Method `isAlive()`: Return `true` if the connection to MongoDB is successful, otherwise return `false`.
    + Asynchronous method `nbUsers()`: Retrieve the count of documents in the `users` collection.
    + Asynchronous method `nbFiles()`: Retrieve the count of documents in the `files` collection.
  + Export an instance of `DBClient` named `dbClient`.

+ [x] 2. **Initial API Setup**
  + Create an Express server inside [`server.js`](server.js):
    + Listen on the port specified by the environment variable `PORT`, defaulting to 5000.
    + Load all routes from the file [`routes/index.js`](routes/index.js).
  + In the [`routes`](routes) directory, create a file named [`index.js`](routes/index.js) containing the API endpoints:
    + `GET /status` => `AppController.getStatus`.
    + `GET /stats` => `AppController.getStats`.
  + Define the endpoints in the controller [`AppController.js`](controllers/AppController.js):
    + `GET /status` should return the status of Redis and the database.
    + `GET /stats` should return the count of users and files in the database.

+ [x] 3. **User Creation**
  + Add an endpoint to create new users in [`routes/index.js`](routes/index.js):
    + `POST /users` => `UsersController.postNew`.
  + Create the controller file [`UsersController.js`](controllers/UsersController.js) with the following endpoint:
    + `POST /users` should validate and store new user information in the database.

+ [x] 4. **User Authentication**
  + Implement user authentication endpoints in [`routes/index.js`](routes/index.js):
    + `GET /connect` => `AuthController.getConnect`.
    + `GET /disconnect` => `AuthController.getDisconnect`.
    + `GET /users/me` => `UserController.getMe`.
  + Create the controller [`AuthController.js`](controllers/AuthController.js) with methods for user sign-in, sign-out, and user retrieval.

+ [x] 5. **File Upload**
  + Add an endpoint to upload files in [`routes/index.js`](routes/index.js):
    + `POST /files` => `FilesController.postUpload`.
  + Implement the file upload functionality in [`FilesController.js`](controllers/FilesController.js).

+ [x] 6. **File Retrieval**
  + Create endpoints for retrieving individual files and listing files in [`routes/index.js`](routes/index.js):
    + `GET /files/:id` => `FilesController.getShow`.
    + `GET /files` => `FilesController.getIndex`.
  + Implement corresponding methods in [`FilesController.js`](controllers/FilesController.js) to handle file retrieval and listing.

+ [x] 7. **File Publishing**
  + Implement endpoints to publish and unpublish files in [`routes/index.js`](routes/index.js):
    + `PUT /files/:id/publish` => `FilesController.putPublish`.
    + `PUT /files/:id/unpublish` => `FilesController.putUnpublish`.
  + Implement methods in [`FilesController.js`](controllers/FilesController.js) to handle file publishing and unpublishing.

+ [x] 8. **File Content Retrieval**
  + Add an endpoint to retrieve file content in [`routes/index.js`](routes/index.js):
    + `GET /files/:id/data` => `FilesController.getFile`.
  + Implement the corresponding method in [`FilesController.js`](controllers/FilesController.js) to retrieve file content.

+ [x] 9. **Thumbnail Generation**
  + Update the file upload endpoint to trigger thumbnail generation for image files.
  + Create a background worker to generate thumbnails for uploaded images.
  + Modify the file retrieval endpoint to support thumbnail size options.

+ [x] 10. **Test Coverage**
  + Develop tests for all utility classes and API endpoints to ensure reliability and correctness.

+ [x] 11. **User Welcome Email**
  + Enhance the user creation endpoint to initiate sending a welcome email to new users.
  + Implement a background job to handle sending welcome emails to new users.
