const {Joke} = require('../models/joke.model');

// <=== API methods ===>
const createJoke = async(data)=>{
    console.log('service: <=== createJoke ===>');
    const joke = await Joke.create(data);
    return joke;
}

const getAllJokes = async()=>{
    console.log('service: <=== getAllJokes ===>');
    const allJokes = await Joke.find();
    return allJokes;
}

const getOneJoke = async(id)=>{
    console.log('service: <=== getOneJoke ===>');
    const oneJoke = await Joke.findById(id);
    return oneJoke;
}

const deleteJokeByid = async(id)=>{
    console.log('service: <=== deleteJokeByid ===>');
    const deleteJoke = await Joke.findByIdAndDelete(id);
    return deleteJoke;
}

const updateJokeByid = async(id,data)=>{
    console.log('service: <=== updateJokeByid ===>');
    const updateJoke = await Joke.findByIdAndUpdate(id,data, {
        runValidators:true,
        new:true
    });
    return updateJoke;
}





// <=== exports ===>
module.exports={
    createJoke,
    getAllJokes,
    getOneJoke,
    deleteJokeByid,
    updateJokeByid
};
