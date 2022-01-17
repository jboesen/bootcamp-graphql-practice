/* eslint-disable indent */
const Author = require('../../models/Author')
const Book = require('../../models/Book')

const allAuthors = async () => {
    try {
        const authors = await Author.query()
        return authors
    } catch (err) {
        throw new Error('failed to get authors')
    }
}

const authorById = async ({ id }) => {
    try {
        const authors = await Author.query().where('id', id)
        return authors
    } catch (err) {
        throw new Error('failed to get author')
    }
}

const subBookById = async ({ id }) => {
    try {
        const selectedBooks = await Book.query().where('authorId', id)
        return selectedBooks
    } catch (err) {
        throw new Error('failed to get books')
    }
}

const resolver = {
    Query: {
        allAuthors,
        authorById,
    },
    Author: {
        // this is a subresolver
        subBookById,
    },
}

module.exports = resolver
