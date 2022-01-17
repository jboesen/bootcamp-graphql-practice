const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const Author = require('./Author')
const Book = require('./Book')

const resolvers = [Welcome, Author, Book]

module.exports = merge(...resolvers)
