/* eslint-disable indent */
// const merge = require('lodash.merge')
const Author = require('../../models/Author')

const addAuthor = async ({
    firstName, lastName, age, email, numBooksPublished, addressId,
}) => {
    try {
        await Author.query().insert(
            {
                firstName,
                lastName,
                age,
                email,
                numBooksPublished,
                addressId,
            },
        ).returning('*')
    } catch (err) {
        throw new Error('failed to get author')
    }
}

const resolver = {
    Mutation: {
        addAuthor,
    },
}

module.exports = resolver
