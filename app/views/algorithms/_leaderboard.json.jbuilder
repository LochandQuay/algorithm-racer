json.array! algorithms do |algorithm|
  json.title algorithm.title

  json.total_score algorithm.total_score
  json.golf_score algorithm.golf_score
  json.speed algorithm.speed

  json.author algorithm.user.username
end
