# GraphQL

## Apollo sandbox
https://studio.apollographql.com/sandbox/explorer

## Query Samples
### Review
`
query Review($id: ID!) {
  review(id: $id) {
    rating
    content
    game {
      title
      reviews {
        rating
        content
        game {
          title
        }
      }
    }
    author {
      name
    }
  }
}
{
  "id": "1"
}
`

### Delete
`
mutation DeleteGame($id: ID!) {
  deleteGame(id: $id) {
    id
    title
  }
}
{
  "id": "1"
}
`

### Add
`
utation AddGame($game: AddGameInput!) {
  addGame(game: $game) {
    id
    title
    platform
  }
}
{
  "game": {
    "title": "Best game !!",
    "platform": ["PS3", "GB"]
  }
}
`

### Update
`
mutation UpdateGame($id: ID!, $game: UpdateGameInput!) {
  updateGame(id: $id, game: $game) {
    id
    title
    platform
  }
}
{
  "game": {

    "title": "changed",
    "platform": ["c", "c"]
  },
  "id": "1"
}
`

