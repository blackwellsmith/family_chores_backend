# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Chore.destroy_all

b = User.create(name: 'Blackwell', email: 'blackwell@gmail.com', password: 'password')
sweep = Chore.create(name: 'sweep', user: b, notes: "the whole floor")
mop = Chore.create(name: 'mop', user: b, notes: "yes the bathroom")