
const updateFeatured = (id, currentStatus) => {
    // return async (dispatch) => {
    //     const response = await fetch(`http://localhost:9000/books/${id}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //             featured: !currentStatus,

    //         }),
    //         headers: {
    //             'Content-Type': 'application/json; charset=UTF-8'
    //         }
    //     });
    //     const book = await response.json();

    //     dispatch(toggledAction(book.id));
    // };
}

export default updateFeatured;