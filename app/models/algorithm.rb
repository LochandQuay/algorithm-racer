class Algorithm < ApplicationRecord
  validates :title, :category, :body, :user, presence: true
  validates :category, inclusion: { in: %w(SORT ARRAY_SEARCH) }

  belongs_to :user

  def self.top_algos_by_category(limit = nil, category = nil, max_score = nil)
    category = nil if category == 'ALL'

    @algos = Algorithm
      .order("total_score DESC")
      .uniq

    if max_score
      @algos = @algos.where('total_score < :max', max: max_score)
    end
    
    @algos = @algos.where("category = :cat", cat: category) if category
    @algos = @algos.limit(limit) if limit


    @algos
  end

end
