# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

boaty = User.new(username: "boaty", password: "password")

leaderboard_scores = [
	{
		title: "Sample",
    body: "algorithm here ",
    category: "SORT",
		speed: "42ms",
		golf_score: "Par",
		total_score: 9872
	},
	{
		title: "Sample",
    body: "algorithm here ",
    category: "SORT",
		speed: "42ms",
		golf_score: "Par",
		total_score: 9879
	},
	{
		title: "Sample",
    body: "algorithm here ",
    category: "SORT",
		speed: "42ms",
		golf_score: "Par",
		total_score: 9016
	},
	{
		title: "Sample",
    body: "algorithm here ",
    category: "SORT",
		speed: "42ms",
		golf_score: "Par",
		total_score: 9000
	}
]

leaderboard_scores.each do |score|
  new_score = Algorithm.new(score)
  new_score.user = boaty
  new_score.save!
end
