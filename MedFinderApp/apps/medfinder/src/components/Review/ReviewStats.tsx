import PropTypes from 'prop-types';

function ReviewStats({ review }) {
  // Calculate Ratings Average
  let average =
    review.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / review.length;
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>Review Stats</h4>
      <h4>{review.length} Product Reviews</h4>
      <h4>Average Product Rating: {isNaN(average) ? 0 : average}</h4>
     </div>
  );
}
ReviewStats.propTypes = {
  review: PropTypes.array.isRequired
};
export default ReviewStats;