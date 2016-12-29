class Algorithm < ApplicationRecord
  validates :title, :category, :body, :user_id, presence: true
  validates :category, inclusion: { in: %w(SORT ARRAY_SEARCH TREE_SEARCH) }

  belongs_to :user
end
