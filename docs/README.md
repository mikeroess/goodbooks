# GoodBooks

<a href="http://goodbooks.heroku.com">GoodBooks</a>

<a href="https://trello.com/b/FvmP9TKS">Trello</a>

# Minimum Viable Product
GoodBooks is a web application inspired by GoodReads build using Ruby on Rails and React/Redux.
By the end of week 9 this app will satisfy the following criteria with smooth bug-free navigation, adequate seed data
and sufficient CSS styling:

* Hosting on Heroku
* New account creation, login, and guest/demo login
* Books
* Bookshelves
* Reviews
* Read Status (to read, reading, read)
* Production README

#Design Docs
* <a href="https://github.com/mikeroess/full_stack_proposal/blob/master/wireframes">Wireframes</a>
* <a href="https://github.com/mikeroess/full_stack_proposal/blob/master/component-hierarchy.md">React Components</a>
* <a href="#">API endpoints</a>
* <a href="https://github.com/mikeroess/full_stack_proposal/blob/master/Schema.pdf">DB Schema</a>
* <a href="https://github.com/mikeroess/full_stack_proposal/blob/master/api-endpoints.md">Sample State</a>

# Implementation Timeline
### Phase 1: Backend setup and Front End User Auth (2 days)

  **Objective:** Functioning rails project with front-end Authentication

### Phase 2: Book and Shelf API, Model, and Components  (2 days)

**Objective:** Books can be created and assigned Users through shelves.  Shelves can be created, updated, and destroyed.

### Phase 3: Review API, Model and Component (1 days)

**Objective:** Reviews belong to users and books.  Can up updated through API

### Phase 4: Read Status (1 days)

**Objective:** Enables users to have a status for every book, and autogenerate shelves by this status

### Phase 5: Author Accounts (2 days)

**Objective:** Users with Author accounts can have many books, and books point to Author's account page (which displays authored books)

# Bonus Features
* Search across multiple models
* Author accounts
* Comments on reviews
* Friendships
* List or grid view (in shelf)
* Librarian accounts
* 'Like' reviews
