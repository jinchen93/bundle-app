export const API_KEY = 'AIzaSyDHiPdfGo_j7syM6QgvgzDHZ5jy-rwNnM4';

// URL to get channel properties: https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&key=AIzaSyDHiPdfGo_j7syM6QgvgzDHZ5jy-rwNnM4&forUsername=GaryVaynerchuk
export const CHANNELS = [
    {
      name: 'Casey Neistat',
      username: 'caseyneistat',
      uploads: 'UUtinbF-Q-fVthA0qrFQTgXQ',
      id: 0
    },
    { 
      name: 'Asha Cuthbert', 
      username: 'gcmeanslove',
      uploads: 'UU4YtAO528H6PdbJkJsolggA',
      id: 1
    },
    {
      name: 'Josh James',
      username: 'joshjameskiwibushman',
      uploads: 'UUynWet3zR-Yu7xUVHjFq6hA',
      id: 2
    },
    {
      name: 'Ben Brown',
      username: 'benbrown100',
      uploads: 'UUAkP51BEzkKimJh7KDflx_g',
      id: 3
    },
    {
      name: 'Jon Olsson',
      username: 'JonOlssonVideoBlog',
      uploads: 'UUyQb1TTrfRzQZmEfsx770qw',
      id: 4
    },
    {
      name: 'Gary Vaynerchuk',
      username: 'GaryVaynerchuk',
      uploads: 'UUctXZhXmG-kf3tlIXgVZUlw',
      id: 5
    },
    {
      name: 'Eric Conover',
      username: 'erikconover',
      uploads: 'UUu8ucb1LRJd1gwwXutYDgTg',
      id: 6
    }
];

export const PLAYLIST_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${API_KEY}&playlistId=`;