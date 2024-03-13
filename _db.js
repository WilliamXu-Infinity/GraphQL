let games = [
    {id: '1', title: 'Super Mario Bros.', platform: ['NES']},
    {id: '2', title: 'The Legend of Zelda', platform: ['NES']},
    {id: '3', title: 'Metroid', platform: ['NES']},
    {id: '4', title: 'Final Fantasy VII', platform: ['PlayStation']},
    {id: '5', title: 'Pokemon Red', platform: ['Game Boy']},
    {id: '6', title: 'Tetris', platform: ['Game Boy']}
]

let authors = [
    {id: '1', name: 'John Doe'},
    {id: '2', name: 'Jane Smith'},
    {id: '3', name: 'Bob Johnson'},
]

let reviews = [ 
    {id: '1', rating: 5, content: 'Great game!', author_id: '1', game_id: '2'},
    {id: '2', rating: 4, content: 'Fun to play!', author_id: '2', game_id: '1'},
    {id: '3', rating: 3, content: 'Could be better.', author_id: '3', game_id: '3'},
    {id: '4', rating: 5, content: 'Amazing storyline!', author_id: '2', game_id: '5'},
    {id: '5', rating: 4, content: 'Addictive gameplay.', author_id: '2', game_id: '2'},
    {id: '6', rating: 3, content: 'Classic puzzle game.', author_id: '3', game_id: '1'}
]

export default { games, authors, reviews }

