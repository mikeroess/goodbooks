class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render 'api/reviews/show'
    else
      render @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render 'api/reviews/show'
    else
      render @review.errors.full_messages, status: 422
    end
  end

  # def index
  #   # all reviews except my review
  # end

  def myReview
    #only my review for this book
  end

  def myReviews
    # all my reviews if I'm feeling self-obsessed
  end

  private
  def review_params
    params.require(:review).permit(:book_id, :title, :body)
  end
end
