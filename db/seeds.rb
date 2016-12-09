# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create(username: "mwr", email: "mwr", password: "password")
user2 = User.create(username: "mwr2", email: "mwr2", password: "password")
user3 = User.create(username: "mwr3", email: "mwr3", password: "password")
user4 = User.create(username: "mwr4", email: "mwr4", password: "password")
user5 = User.create(username: "barn", email: "barn@barn.io", password: "barnaby")
user6 = User.create(username: "zoh", email: "zoh@gmail.com", password: "gothypants")

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
book1 = Book.create(title: "Elder Edda", author_name: "Snorri Sturluson", shelf_id: shelf4.id)
book2 = Book.create(title: "Elder Edda", author_name: "Snorri Sturluson", shelf_id: shelf7.id)
book3 = Book.create(title: "Egil's Saga", author_name: "Snorri Sturluson", shelf_id: shelf4.id)
book4 = Book.create(title: "Egil's Saga", author_name: "Snorri Sturluson", shelf_id: shelf7.id)
book5 = Book.create(title: "Myths and Legends of Iceland", author_name: "Jon Arnason", shelf_id: shelf4.id)
book6 = Book.create(title: "Release It!", author_name: "Michael Nygard", shelf_id: shelf2.id)
book7 = Book.create(title: "SICP", author_name: "Gerald Jay Sussman and Hal Abelson", shelf_id: shelf2.id)
book8 = Book.create(title: "The Three Body Problem", author_name: "Cixin Liu", shelf_id: shelf3.id)
book9 = Book.create(title: "The Dark Forest", author_name: "Cixin Liu", shelf_id: shelf3.id)
book10 = Book.create(title: "Apopthegm of Diogenes", author_name: "Diogenes of Sinope", shelf_id: shelf1.id)
book11 = Book.create(title: "Independent People", author_name: "Haldor Laxness", shelf_id: shelf4.id)
book12 = Book.create(title: "Independent People", author_name: "Haldor Laxness", shelf_id: shelf6.id)
book13 = Book.create(title: "The Dwarf", author_name: "Pär Lagerkvist", shelf_id: shelf6.id)
book14 = Book.create(title: "Under the Glacier", author_name: "Haldor Laxness", shelf_id: shelf4.id)
book15 = Book.create(title: "Under the Glacier", author_name: "Haldor Laxness", shelf_id: shelf6.id)
book16 = Book.create(title: "Flowers of Evil", author_name: "Charles Baudelaire", shelf_id: shelf8.id)
book17 = Book.create(title: "Táin Bó Cúailnge", author_name: "Lost to Antiquity", shelf_id: shelf9.id)
book18 = Book.create(title: "The Handmaid's Tale", author_name: "Margaret Atwood", shelf_id: shelf10.id)
book19 = Book.create(title: "The Left Hand of Darkness", author_name: "Ursula K. Le Guin", shelf_id: shelf10.id)
book20 = Book.create(title: "The Left Hand of Darkness", author_name: "Ursula K. Le Guin", shelf_id: shelf3.id)
