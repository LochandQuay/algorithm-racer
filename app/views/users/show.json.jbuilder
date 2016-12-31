json.username @user.username

json.algorithms @user.algorithms do |algorithm|
  json.(algorithm, :id, :title, :total_score)
end
