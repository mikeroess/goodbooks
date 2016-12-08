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
