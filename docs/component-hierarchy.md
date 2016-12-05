# Component Hierarchy

**AuthFormContainer**
  - AuthForm

**CreateShelfFormContainer**
  - createShelfForm

**UpdateReadStatusContainer**
  - updateReadStatusForm

**CreateBookContainer**
  - CreateBookForm

**BookHomeContainer**
  - MainHeader (currentUser.username)
  - BookDetailContainer
    * BookDetail (book.title, book.author_name, book.cover_img_url, book.shelves)
    * BookReview (review.rating, review.avg_rating, review.body, review.shelves)
    * UpdateReadStatusContainer (currentUser.id, forms.updateReadStatus, book.readStatus)
  - BookReviewsListContainer
    * BookReviewsListItem (review.rating, review.reviewer_name, review.reviewer_id, review.shelves, review.body)
  - MainFooter

**UserHomeContainer**
  - MainHeader (currentUser.username)
  - BookshelvesContainer
    * MainShelves (shelf.title, shelf.id, shelf.count(shelf.books.length))
    * CustomShelves(shelf.title, shelf.id, shelf.count(shelf.books.length), createShelfForm)
  - BookshelfContainer
    * Bookshelf (shelf.title, shelf.books.{ id, title, author_name, author_id, avg_rating, rating, start_date, end_date})
      - UpdateReadStatusContainer (currentUser.id, forms.updateReadStatus, book.readStatus)
      - createShelfFormContainer (currentUser.id)
  - MainFooter

**SearchHomeContainer**
  - MainHeader (currentUser.username)
  - SearchBar
  - SearchResultsContainer
    * SearchResults (book.cover_img_url, book.title, book.author_id, book.author_name, book.rating)
    * UpdateReadStatusContainer (currentUser.id, forms.updateReadStatus, book.readStatus)
  - CreateBookContainer
    * AddBookForm (createBookForm )

#Routes

| **Path** | **Component |
| --- | --- |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/book/:id" | "BookHomeContainer" |
| "/user"    | "UserHomeContainer" |
| "/user/shelf/:shelf_id" | "BookshelfContainer" |
| "/search/" | "SearchHomeContainer" |
| "/search/:title" | "SearchResultsContainer" |
| "/search/new-book" | "addBookContainer" |
