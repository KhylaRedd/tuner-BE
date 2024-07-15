const express = require('express');
const songs = express.Router();
const {getAllSongs, addSong, deleteSong, updateSong, getSong} = require('../queries/songs');
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

//add 
songs.post('/', async (req,res)=>{
    const song = await addSong(req.body);
    res.json(song)

});
//delete
songs.delete('/:id', async(req,res)=>{
    const { id } = req.params;
    const deletedSong = await deleteSong(id);

    if(deletedSong.id){
        res.status(200).json({message: "Successfully deleted song"})
    }else{
        res.status(500).json({ error: "Internal Server Error"})

    };
    
});
//update
songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  });

  songs.get("/:id", async (req, res)=>{
    const {id} = req.params;
    const singleSong = await getSong(id)

   if(singleSong.id){
    res.status(200).json(singleSong)

   }else{
        res.status(404).json({error: "Song was not found"})

    }

  })


module.exports= songs;