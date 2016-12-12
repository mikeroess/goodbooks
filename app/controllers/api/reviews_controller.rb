class ReviewsController < ApplicationController

  def create
  end

  def update
    
  end

  def index
    # all reviews except my review
  end

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
