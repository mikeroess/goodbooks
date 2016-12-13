# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create(username: "mwr", email: "mwr", password: "password", image: File.open('app/assets/images/book-flat.png'))
user2 = User.create(username: "hal", email: "candycorn@gmail.com", password: "password", image: File.open('app/assets/images/book-flat.png'))
user3 = User.create(username: "mwr3", email: "mwr3", password: "password", image: File.open('app/assets/images/book-flat.png'))
user4 = User.create(username: "mwr4", email: "mwr4", password: "password", image: File.open('app/assets/images/book-flat.png'))
user5 = User.create(username: "barn", email: "barn@barn.io", password: "barnaby", image: File.open('app/assets/images/book-flat.png'))
user6 = User.create(username: "zoh", email: "zoh@gmail.com", password: "gothypants", image: File.open('app/assets/images/book-flat.png'))

Shelf.destroy_all
shelf1 = Shelf.create(user_id: user1.id, title: "philosophy")
shelf2 = Shelf.create(user_id: user1.id, title: "IT")
shelf3 = Shelf.create(user_id: user1.id, title: "Sci-Fi")
shelf4 = Shelf.create(user_id: user1.id, title: "Iceland")
shelf5 = Shelf.create(user_id: user5.id, title: "music biography")
shelf6 = Shelf.create(user_id: user5.id, title: "nobels")
shelf7 = Shelf.create(user_id: user5.id, title: "Iceland" )
shelf8 = Shelf.create(user_id: user6.id, title: "Gothic Literature")
shelf9 = Shelf.create(user_id: user6.id, title: "Celtic Reconstruction")
shelf10 = Shelf.create(user_id: user6.id, title: "Feminist Literature")

Book.destroy_all
book1 = Book.create(title: "Elder Edda", author_name: "Snorri Sturluson", image: File.open('app/assets/images/default_book_cover.jpg'))
book2 = Book.create(title: "Egil's Saga", author_name: "Snorri Sturluson", image: File.open('app/assets/images/default_book_cover.jpg'))
book3 = Book.create(title: "Myths and Legends of Iceland", author_name: "Jon Arnason", image: File.open('app/assets/images/default_book_cover.jpg'))
book4 = Book.create(title: "Release It!", author_name: "Michael Nygard", image: File.open('app/assets/images/default_book_cover.jpg'))
book5 = Book.create(title: "SICP", author_name: "Gerald Jay Sussman and Hal Abelson", image: File.open('app/assets/images/default_book_cover.jpg'))
book6 = Book.create(title: "The Three Body Problem", author_name: "Cixin Liu", image: File.open('app/assets/images/default_book_cover.jpg'))
book7 = Book.create(title: "The Dark Forest", author_name: "Cixin Liu", image: File.open('app/assets/images/default_book_cover.jpg'))
book8 = Book.create(title: "Apothegm of Diogenes", author_name: "Diogenes of Sinope", image: File.open('app/assets/images/default_book_cover.jpg'))
book9 = Book.create(title: "Independent People", author_name: "Haldor Laxness", image: File.open('app/assets/images/default_book_cover.jpg'))
book10 = Book.create(title: "Death's End", author_name: "Cixin Liu", image: File.open('app/assets/images/default_book_cover.jpg'))
book11 = Book.create(title: "The Dwarf", author_name: "Pär Lagerkvist", image: File.open('app/assets/images/default_book_cover.jpg'))
book12 = Book.create(title: "Under the Glacier", author_name: "Haldor Laxness", image: File.open('app/assets/images/default_book_cover.jpg'))
book13 = Book.create(title: "Flowers of Evil", author_name: "Charles Baudelaire", image: File.open('app/assets/images/default_book_cover.jpg'))
book14 = Book.create(title: "Táin Bó Cúailnge", author_name: "Lost to Antiquity", image: File.open('app/assets/images/default_book_cover.jpg'))
book15 = Book.create(title: "The Handmaid's Tale", author_name: "Margaret Atwood", image: File.open('app/assets/images/default_book_cover.jpg'))
book16 = Book.create(title: "The Left Hand of Darkness", author_name: "Ursula K. Le Guin", image: File.open('app/assets/images/default_book_cover.jpg'))

ShelvedBook.destroy_all
shelvedbook1 = ShelvedBook.create(book_id: book1.id, shelf_id: shelf4.id)
shelvedbook2 = ShelvedBook.create(book_id: book1.id, shelf_id: shelf7.id)
shelvedbook3 = ShelvedBook.create(book_id: book2.id, shelf_id: shelf4.id)
shelvedbook4 = ShelvedBook.create(book_id: book2.id, shelf_id: shelf7.id)
shelvedbook5 = ShelvedBook.create(book_id: book3.id, shelf_id: shelf4.id)
shelvedbook6 = ShelvedBook.create(book_id: book4.id, shelf_id: shelf2.id)
shelvedbook7 = ShelvedBook.create(book_id: book5.id, shelf_id: shelf2.id)
shelvedbook8 = ShelvedBook.create(book_id: book6.id, shelf_id: shelf3.id)
shelvedbook9 = ShelvedBook.create(book_id: book7.id, shelf_id: shelf3.id)
shelvedbook10 = ShelvedBook.create(book_id: book10.id, shelf_id: shelf3.id)
shelvedbook11 = ShelvedBook.create(book_id: book8.id, shelf_id: shelf1.id)
shelvedbook12 = ShelvedBook.create(book_id: book9.id, shelf_id: shelf4.id)
shelvedbook13 = ShelvedBook.create(book_id: book11.id, shelf_id: shelf6.id)
shelvedbook14 = ShelvedBook.create(book_id: book12.id, shelf_id: shelf6.id)
shelvedbook15 = ShelvedBook.create(book_id: book12.id, shelf_id: shelf4.id)
shelvedbook16 = ShelvedBook.create(book_id: book13.id, shelf_id: shelf8.id)
shelvedbook17 = ShelvedBook.create(book_id: book14.id, shelf_id: shelf9.id)
shelvedbook18 = ShelvedBook.create(book_id: book15.id, shelf_id: shelf10.id)
shelvedbook18 = ShelvedBook.create(book_id: book16.id, shelf_id: shelf10.id)
shelvedbook18 = ShelvedBook.create(book_id: book16.id, shelf_id: shelf3.id)

Review.destroy_all
review1 = Review.create(book_id: book1.id, user_id: user1.id, title: "Sagely wisdom", body: "He's no Solomon, but the sayings of Odin have some pretty good gems.  Not the best telling of the Volsunga saga I've read.")
review2 = Review.create(book_id: book1.id, user_id: user2.id, title: "I love the norse", body: "Title says it all")
review3 = Review.create(book_id: book2.id, user_id: user1.id, title: "My favorite Saga", body: "Seriously -- it's like someone wed Diogenes of Sinope and 80's action movie hero, wrapping the whole thing in the trappings of the medieval bardic tradition.  Everyone should read this book, and everyone should love this book.")
review4 = Review.create(book_id: book2.id, user_id: user5.id, title: "Good jokes by a bad poet", body: "Don't get me wrong.  I get why Mike like this book so much.  I don't think it's the best, though.  It's up there.  One of the best.  But, Njal's is so much better")
review5 = Review.create(book_id: book14.id, user_id: user1.id, title: "A fun adventure", body: "There are some classic adventure tropes here.  I guess what I like most about this is how low the stakes are.  The whole thing is written with this epic scope, but it's just some guys stealing cows from their neighbors.  I mean, there's something humerous in that, right?")
review6 = Review.create(book_id: book14.id, user_id: user2.id, title: "Great pictures", body: "Man, this edition has some wonderful pictures.")
review7 = Review.create(book_id: book14.id, user_id: user6.id, title: "Maeve is awesome", body: "Badass woman queen starting (local) international incidents because her pride has been insulted.")
review8 = Review.create(book_id: book11.id, user_id: user1.id, title: "Ugh", body: "I like stories about the machinations of spiteful dwarves and the power they influence over kings as much as the next, but this is a little too close to home right now.")
review9 = Review.create(book_id: book11.id, user_id: user2.id, title: "Meh", body: "It was fine.")
review10 = Review.create(book_id: book11.id, user_id: user5.id, title: "What a weird book.", body: "Don't get me wrong, I think I like it.  I recommended it to a friend.  I just don't know why I like it.  It's so weird.")
