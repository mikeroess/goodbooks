# API Endpoints

## HTML API

### Root
  * `Get /` loads React web app

## JSON API

### Users
  * `POST /api/users` Create a user
  * `DELETE /api/users` Destroy a user
  * `GET /api/users/:id` Get a user
    - NB include books and shelves to avoid n + 1

### Shelves
  * `GET /api/users/:id/shelf/:shelf_id` Get a single shelf item
    - NB include books and user to avoid n + 1
  * `DELETE /api/users/:id/shelf/:shelf_id` Get a single shelf item
  - NB include books and user to avoid n + 1
  * `POST /api/users/:id/shelf/` Get a single shelf item
    - NB include books and user to avoid n + 1

### Session
  * `POST /api/session` Create session/current_user (log in)
  * `DELETE /api/session` Destroy session/current_user (log out)

### Books
  * `GET /api/books/:id` Gets a single book object
    - NB include reviews to avoid n + 1
  * `POST /api/books` Create a new book

### Reviews
  * `GET /api/books/:id/reviews` Get all reviews for a single book
  * `GET /api/books/:id/reviews/:review_id` Get single review
  * `POST /api/books/:id/reviews/:review_id` Create review
  * `PATCH /api/books/:id/reviews/:review_id` Update review
