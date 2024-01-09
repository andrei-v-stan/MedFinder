import ReviewItem from './ReviewItem';
import PropTypes from 'prop-types';

function ReviewList({ review, handleDelete }) {
  if (!review || review.length === 0) {
    return <p>No reviews yet</p>;
  }
  return (
    <div className="feedback-list">
      {review.map(item => (
        <ReviewItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
ReviewList.propTypes = {
  review: PropTypes.arrayOf(
PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
   })
 )
};
export default ReviewList;