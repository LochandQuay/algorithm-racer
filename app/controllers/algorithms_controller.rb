class AlgorithmsController < ApplicationController

  def create
    @algorithm = Algorithm.new(algorithm_params)
    @algorithm.user_id = current_user.id
    if @algorithm.save
      redirect_to algorithm_url(@algorithm)
    else
      flash.now[:errors] = @algorithm.errors.full_messages
      render :new
    end
  end

  def new

  end

  def destroy
    @algorithm = Algorithm.find(params[:id])
    @algorithm.destroy
    redirect_to algorithms_url
  end

  def show
    @algorithm = Algorithm.find(params[:id])
  end

  def index
    @algorithms = Algorithm.all
  end

  private

  def algorithm_params
    params.require(:algorithm).permit(:title, :body, :category)
  end
end
