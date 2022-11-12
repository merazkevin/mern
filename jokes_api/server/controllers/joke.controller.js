const {
    createJoke,
    getAllJokes,
    getOneJoke,
    deleteJokeByid,
    updateJokeByid
} =require('../services/joke.service');


// <=== API Methods ===>
const handleCreateJoke = async(request, response)=>{
    console.log('<=== controller:handleCreateJoke -> request.body ===>');
    console.log(request.body);
    console.log('===============================================  ');
    try {
        const joke= await createJoke(request.body);
        return response.json(joke)
    } 
    catch(error){
        console.log(error)
        return response.status(400).json(error);
    }
}

const handlegetAllJokes = async(request, response)=>{
    console.log('<=== controller:handlegetAllJokes ===>');
    console.log('===============================================  ');
    try {
        const allJokes= await getAllJokes();
        return response.json(allJokes)
    } 
    catch(error){
        console.log(error)
        return response.status(400).json(error);
    }
}

const handleGetOneJoke = async(request, response)=>{
    console.log('<=== controller:handleGetOneJoke ->');
    console.log('request.params:', request.params.id);
    console.log('===============================================  ');
    try {
        const oneJoke= await getOneJoke(request.params.id);
        return response.json(oneJoke)
    } 
    catch(error){
        console.log(error)
        return response.status(400).json(error);
    }
}

const handleDeleteJokeByid = async(request, response)=>{
    console.log('<=== controller:handleDeleteJokeByid===>');
    console.log('request.params:', request.params.id);
    console.log('===============================================  ');
    try {
        const deleteJoke= await deleteJokeByid(request.params.id);
        return response.json(deleteJoke)
    } 
    catch(error){
        console.log(error)
        return response.status(400).json(error);
    }
}

const handleUpdateJokeByid = async(request, response)=>{
    console.log('<=== controller:handleUpdateJokeByid===>');
    console.log('request.params:', request.params.id);
    console.log('request.body:', request.body);
    console.log('===============================================  ');
    try {
        const updateJoke= await updateJokeByid(request.params.id, request.body);
        return response.json(updateJoke)
    } 
    catch(error){
        console.log(error)
        return response.status(400).json(error);
    }
}

// <=== Exports ===>
module.exports={
    handleCreateJoke,
    handlegetAllJokes,
    handleGetOneJoke,
    handleDeleteJokeByid,
    handleUpdateJokeByid
}