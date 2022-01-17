/* eslint-disable indent */
const Book = require('../../models/Book')

const addBook = async ({
    title, numPages, authorId, bestseller,
}) => {
    try {
        await Book.query().insert(
            {
                title, numPages, authorId, bestseller,
            },
        ).returning('*')
    } catch (err) {
        throw new Error('failed to add book')
    }
}

const resolver = {
    Mutation: {
        addBook,
    },
}

module.exports = resolver
