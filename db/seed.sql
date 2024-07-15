--mock dummy data Dml
\c jammaster;


-- Insert initial data into the songs table
INSERT INTO songs (songName, artist, album, duration, is_favorite) VALUES
('Song A', 'Artist 1', 'bubble', '00:04:30', TRUE),
('Song B', 'Artist 2', '1', '00:03:15', FALSE),
('Song C', 'Artist 3', '3', '00:05:00', FALSE);
