class AlgorithmsController < ApplicationController

  LIMIT = 5

  def create
    @algorithm = current_user.algorithms.build(algorithm_params)
    if @algorithm.save

    else
      render json: @algorithm.errors.full_messages
    end
  end

  def new
    respond_to do |format|
      format.html { render :new }
      format.json { render :new }
    end
  end

  def destroy
    @algorithm = Algorithm.find(params[:id])
    @algorithm.destroy
    redirect_to algorithms_url
  end

  def show
    @algorithm = Algorithm.find(params[:id])

    respond_to do |format|
      format.html { render :show }
      format.json { render :show }
    end
  end

  def index
    @algorithms = Algorithm.top_algos_by_category(
      LIMIT, params[:category], params[:max_score]
    )

    respond_to do |format|
      format.html { render :index }
      format.json { render :index }
    end
  end

  private

  def algorithm_params
    params.require(:algorithm).permit(
      :title,
      :body,
      :category,
      :speed,
      :golf_score,
      :total_score
    )
  end
end
