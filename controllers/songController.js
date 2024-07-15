const express = require('express');
const songs = express.Router();
const {getAllSongs, addSong, deleteSong} = require('../queries/songs');
const { error } = require('pg-promise');

// localhost:5001/playlist/
songs.get('/',async (req,res)=>{
    const allSongs = await getAllSongs();
    if (allSongs[0]){
        res.status(200).json(allSongs);
    }else{
        res.status(500).json({error: "Server error detected"})
    }
});

//add a new song
songs.post('/', async (req,res)=>{
const song = await addSong(req.body);
res.json(song)

});

songs.delete('/:id', async(req,res)=>{
    const { id } = req.params;
    const deletedSong = await deleteSong(id);

    if(deletedSong.id){
        res.status(200).json({message: "Successfully deleted song"})
    }else{
        res.status(500).json({ error: "Internal Server Error"})

    };
    
});


module.exports= songs;