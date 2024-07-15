
# Jam Master Backend

Jam Master is a backend application that manages songs using CRUD operations, implemented with SQL and Express.

## Features

- **CRUD Operations**: Supports Create, Read, Update, and Delete operations for songs.
- **Express**: Uses Express.js framework for routing and middleware.
- **PostgreSQL**: Interacts with a PostgreSQL database to store and retrieve song data.

## Setup

To run the Jam Master backend locally, follow these steps:

1. **Clone Repository**:

   ```bash
   git clone <repository_url>
   cd jam-master-backend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Database**:
   - Ensure PostgreSQL is installed and running.
   - Create a database named `jam_master` (or adjust database configuration in `queries/songs.js`).

4. **Run Migrations** (if applicable):
   - If using database migrations, run them to set up the database schema.

5. **Start the Server**:

   ```bash
   npm start
   ```

6. **API Endpoints**:
   - **GET `/playlist/`**: Retrieves all songs from the database.
   - **POST `/playlist/`**: Adds a new song to the database.
   - **DELETE `/playlist/:id`**: Deletes a song by ID from the database.
   - **PUT `/playlist/:id`**: Updates a song by ID in the database.
   - **GET `/playlist/:id`**: Retrieves a single song by ID from the database.

## API Usage

### GET `/playlist/`

Retrieves all songs from the database.

### POST `/playlist/`

Adds a new song to the database.

**Example Request Body**:

```json
{
    "songname": "Example Song",
    "artist": "Example Artist",
    "album": "Example Album",
    "duration": "00:03:30",
    "is_favorite": true
}
```

### DELETE `/playlist/:id`

Deletes a song by its ID from the database.

### PUT `/playlist/:id`

Updates a song by its ID in the database.

**Example Request Body**:

```json
{
    "songname": "Updated Song Name",
    "artist": "Updated Artist",
    "album": "Updated Album",
    "duration": "00:04:00",
    "is_favorite": false
}
```

### GET `/playlist/:id`

Retrieves a single song by its ID from the database.

## Technologies Used

- Express.js
- PostgreSQL
- SQL (CRUD operations)


## License

This project is licensed under the MIT License - see the LICENSE file for details.
