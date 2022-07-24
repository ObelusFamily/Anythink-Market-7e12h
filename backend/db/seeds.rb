# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

100.times do |index|
    User.create!(username: "user#{index}", email: "email#{index}@foo", password: '**********')
end

p "Created #{User.count} users"

Item.destroy_all

100.times do |index|
    Item.create!(title: "item#{index}", description: "description#{index}", user: User.where(username: "user#{index}").first())
end

p "Created #{Item.count} items"

Comment.destroy_all

100.times do |index|
    Comment.create!(body: "hi", user: User.where(username: "user#{index}").first(), item: Item.where(title: "item#{index}").first())
end

p "Created #{Comment.count} comments"


