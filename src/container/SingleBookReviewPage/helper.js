export default ( id, reviews ) => {
    return reviews.find((review) => review._id === id);
}