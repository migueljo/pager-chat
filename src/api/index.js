/**
 *
 * @param {String} search get gifs from Giphy API using this value
 * @returns {Promise} with the values from Giphy API
 */
function getGifs (search) {
  return fetch(
    `http://api.giphy.com/v1/gifs/search?api_key=xsVTZDYEEilfsZSqkcAGjVwJbEctVpxs&q=${search}&limit=10`
  ).then((res) => res.json())
}

export default {
  getGifs
}
