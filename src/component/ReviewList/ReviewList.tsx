import { Review } from "../../types"

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
    return <div data-testid="reviews-container">
        {reviews.map((review) => (
            <div data-testid="review" key={review.id}>{review.content}</div>
        ))}
    </div>
}
export default ReviewList;