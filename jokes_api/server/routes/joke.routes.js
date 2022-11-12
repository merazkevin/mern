const express = require('express');
const {
    handleCreateJoke,
    handlegetAllJokes,
    handleGetOneJoke,
    handleDeleteJokeByid,
    handleUpdateJokeByid
}= require('../controllers/joke.controller')

const router = express.Router();

router.get('/', handlegetAllJokes);
router.post('/', handleCreateJoke);
router.get('/:id', handleGetOneJoke);
router.delete('/:id', handleDeleteJokeByid);
router.put('/:id', handleUpdateJokeByid);


module.exports={jokeRouter: router}