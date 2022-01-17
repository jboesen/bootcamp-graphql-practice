/* eslint-disable indent */
const Publisher = require('../../models/Publisher')

const addPublisher = async ({
    company, phoneNumber, numBooksPublished, addressId,
}) => {
    try {
        await Publisher.query().insert(
            {
                company,
                phoneNumber,
                numBooksPublished,
                addressId,
            },
        ).returning('*')
    } catch (err) {
        throw new Error('failed to add publisher')
    }
}

const resolver = {
    Mutation: {
        addPublisher,
    },
}

module.exports = resolver
