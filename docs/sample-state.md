````json
{
  "session": {
    "currentUser": {
      "id": 1,
      "username": "username"
    },
    "errors": []
  },

  "forms": {
    "signUp": { "errors": [] },
    "logIn": { "errors": [] },
    "createReview": { "errors": []},
    "createShelf": { "errors": ["Shelf requires a name"]},
    "createBook": { "errors": []},
    "updateReadStatus": { "errors": []}
  },

  "books": {
    "1": {
      "title": "Rules for the Direction of the Mind",
      "author_name": "Renee Descartes",
      "author_id": null,
      "cover_image_url": "assets/images/1"
    }
  },

  "reviews": {
    "1": {
      "rating": 4,
      "started_on": null,
      "completed_on": null,
      "body": "Man, this dude was smart and concise.  We could all learn a lot by reading this book.",
      "book_id": 1,
      "shelf_id": 27
    }
  },

  "shelves": {
    "title": "1927",
    "books": {
      "1": {
        "title": "Rules for the Direction of the Mind",
        "author_name": "Renee Descartes",
        "author_id": null,
        "cover_image_url": "assets/images/1"
      },
      "2": {
        "title": "Release It!",
        "author_name": "Michael Nygard",
        "author_id": null,
        "cover_image_url": "assets/images/2",
        "avg_rating": 4.2,
        "user_rating": 4,
        "status": "read"
      }
    }
  }

}
````
