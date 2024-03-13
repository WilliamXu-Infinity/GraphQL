import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

// db
import db from "./_db.js"

// types
import typeDefs from "./schema.js"

let count = 10

const resolvers = {
	Query: {
		games: () => {
			return db.games
		},
		reviews: () => {
			return db.reviews
		},
		authors: () => {
			return db.authors
		},
		review: (parent, args) => {
			return db.reviews.find((review) => review.id === args.id)
		},
		game: (parent, args) => {
			return db.games.find((game) => game.id === args.id)
		},
		author: (parent, args) => {
			return db.authors.find((author) => author.id === args.id)
		},
	},
	Game: {
		reviews: (parent) => {
			return db.reviews.filter((review) => review.game_id === parent.id)
		},
	},
	Author: {
		reviews: (parent) => {
			return db.reviews.filter((review) => review.author_id === parent.id)
		},
	},
	Review: {
		game: (parent) => {
			return db.games.find((game) => game.id === parent.game_id)
		},
		author: (parent) => {
			return db.authors.find((author) => author.id === parent.author_id)
		},
	},
	Mutation: {
		deleteGame(_, args) {
			db.games = db.games.filter((game) => game.id !== args.id)
			return db.games
		},
		addGame(_, args) {
			let game = {
				...args.game,
				id: (count++).toString(),
			}
			db.games.push(game)
			return db.games
		},
		updateGame(_, args) {
			db.games = db.games.map((game) => {
				if (game.id === args.id) {
					return {
						...game,
						...args.game,
					}
				}
				return game
			})
			return db.games
		},
	},
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
})

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
})

console.log(`🚀 Server ready at ${url}`)
