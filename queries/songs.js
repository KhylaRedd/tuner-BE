const songs = require("../controllers/songController");
const db = require("../db/dbConfig");


const addSong = async (song) => {
  try{
    const newSong = await db.one(
        "INSERT INTO songs (songName, artist, album, duration, is_favorite)VALUES($1, $2,$3, $4, $5) RETURNING *", [song.songname, song.artist, song.album ,song.duration, song.is_favorite], 
    );
    return newSong;
  } catch (error){
    return error;
  }
};

const getAllSongs = async ()=>{
    try{
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch(error){
        return error;
    }
};

const getSong = async (id)=>{
    try{
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return oneSong;
    }catch(error){
       return error;

}
};

const deleteSong = async (id) => {
    try {
       const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id)
       return deletedSong;
    } catch (error) {
      console.log("error")
        return error;
    }
};

const updateSong = async (id, song) => {
    try {
       const changedSong = await db.one(
        "UPDATE songs SET songname=$1, artist=$2, album=$3, duration=$4, is_favorite=$5 where id=$6 RETURNING *",[song.songname, song.artist, song.album ,song.duration, song.is_favorite,id])
       return changedSong;
    } catch (error) {
        return error;
    }
}
//update

module.exports = {getAllSongs,
                  getSong,
                  addSong,
                  deleteSong,
                  updateSong,

}
