function BookDetails() {
    const books = [
        {
            id: 1,
            title: "React Learning",
            price: 450
        },
        {
            id: 2,
            title: "Java Programming",
            price: 550
        },
        {
            id: 3,
            title: "Spring Boot",
            price: 650
        }
    ];

    return (
        <div>
            <h2>Book Details</h2>

            <ul>
                {
                    books.map((book) => (
                        <li key={book.id}>
                            {book.title} - ₹{book.price}
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default BookDetails;