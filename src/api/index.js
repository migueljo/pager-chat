function getGifs (search) {
  return fetch(
    `http://api.giphy.com/v1/gifs/search?api_key=xsVTZDYEEilfsZSqkcAGjVwJbEctVpxs&q=${search}&limit=10`
  ).then((res) => res.json())
}

export default {
  getGifs
}
