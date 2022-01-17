/* eslint-disable indent */
const Author = require('../../models/Author')
const Book = require('../../models/Book')

const allBooks = async () => {
    try {
        const selectedBooks = await Book.query()
        return selectedBooks
    } catch (err) {
        throw new Error('failed to get books')
    }
}

const bookById = async ({ id }) => {
    try {
        const selectedBooks = await Book.query().where('authorId', id)
        return selectedBooks
    } catch (err) {
        throw new Error('failed to get books')
    }
}

const subAuthorById = async ({ id }) => {
    try {
        const selectedAuthors = await Author.query().where('id', id)
        return selectedAuthors
    } catch (err) {
        throw new Error('failed to get authors')
    }
}

const resolver = {
    Query: {
        allBooks,
        bookById,
    },
    Book: {
        // this is a subresolver
        subAuthorById,
    },

}

module.exports = resolver
