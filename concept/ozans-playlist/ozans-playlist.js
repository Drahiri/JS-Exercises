// https://exercism.org/tracks/javascript/exercises/ozans-playlist
// @ts-check

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 *
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  return Array.from(new Set(playlist));
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 *
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  return new Set(playlist).has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 *
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  return Array.from(new Set(playlist).add(track));
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 *
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  let newPlaylist = new Set(playlist);
  newPlaylist.delete(track);
  return Array.from(newPlaylist);
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 *
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const playlistSet = new Set(playlist);
  let artists = new Set();
  for (let song of playlistSet) {
    let separatorIndex = song.indexOf("-");
    let artist = song.slice(separatorIndex + 2);
    artists.add(artist);
  }

  return Array.from(artists);
}
