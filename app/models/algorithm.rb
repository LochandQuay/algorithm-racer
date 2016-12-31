class Algorithm < ApplicationRecord
  validates :title, :category, :body, :user, presence: true
  validates :category, inclusion: { in: %w(SORT ARRAY_SEARCH) }

  belongs_to :user

  def self.top_algos_by_category(limit = nil, category = nil)
    @algos = Algorithm
      .order("total_score DESC")
      .uniq

    @algos = @algos.where("category = :cat", cat: category) if category
    @algos = @algos.limit(limit) if limit

    @algos
  end

end
