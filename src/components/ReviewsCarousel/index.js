// Write your code here
import {Component} from 'react'

import './index.css'

let lengthOfReviewList = 0
class ReviewsCarousel extends Component {
  state = {listIndex: 0}

  onClickLeftReview = () => {
    const {listIndex} = this.state
    if (listIndex > 0) {
      this.setState(previousState => ({listIndex: previousState.listIndex - 1}))
    }
  }

  onClickRightReview = () => {
    const {listIndex} = this.state
    if (listIndex < lengthOfReviewList) {
      this.setState(previousState => ({listIndex: previousState.listIndex + 1}))
    }
  }

  render() {
    const {listIndex} = this.state
    const {reviewsList} = this.props
    lengthOfReviewList = reviewsList.length - 1
    const review = reviewsList[listIndex]

    return (
      <div className="reviews-app-container">
        <div className="review-container">
          <h1 className="main-heading">Reviews</h1>
          <div className="review-card-container">
            <button
              type="button"
              className="arrow-btn"
              onClick={this.onClickLeftReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-img"
              />
            </button>
            <div className="review-item-container">
              <img src={review.imgUrl} alt={review.username} />
              <p className="user-name">{review.username}</p>
              <p className="company-name">{review.companyName}</p>
              <p className="description">{review.description}</p>
            </div>
            <button
              type="button"
              className="arrow-btn"
              onClick={this.onClickRightReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-img"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
