# ALX Files Manager

ALX Files Manager is a simple file management API built with Node.js, Express, and MongoDB. It allows users to upload, download, manage, and share files.

## Features

- User authentication and authorization
- Upload and download files
- Manage file permissions (public/private)
- Generate image thumbnails
- Send welcome emails to new users

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/alx-files_manager.git
```

2. Install dependencies:

```bash
cd alx-files_manager
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```
DB_HOST=localhost
DB_PORT=27017
DB_NAME=files_manager
DB_USER=username
DB_PASS=password
```

4. Start the server:

```bash
npm start
```

The server should now be running on http://localhost:5000.

## Usage

### Authentication

To access protected endpoints, you need to obtain an authentication token by sending a POST request to `/connect` with your credentials. Use the token in subsequent requests by including it in the `Authorization` header.

Example:

```bash
curl -X POST http://localhost:5000/connect -d "username=user&password=pass"
```

### Endpoints

- **GET /status**: Check server status.
- **GET /stats**: Get server statistics.
- **POST /users**: Create a new user.
- **GET /connect**: Get authentication token.
- **GET /disconnect**: Revoke authentication token.
- **GET /users/me**: Get current user details.
- **POST /files**: Upload a file.
- **GET /files/:id**: Get details of a file.
- **GET /files**: Get list of files (pagination supported).
- **PUT /files/:id/publish**: Publish a file.
- **PUT /files/:id/unpublish**: Unpublish a file.
- **GET /files/:id/data**: Get file data.
- *(Other endpoints as per your implementation)*

### Tests

To run tests:

```bash
npm test
```
