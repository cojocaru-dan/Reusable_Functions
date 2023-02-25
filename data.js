//YOUR CODE COMES HERE



















// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
	toExport = [
		{name: "favoriteBooks", content: favoriteBooks, type: "array"},
        {name: "favMovies", content: favMovies, type: "array"},
        {name: "bestSellingAlbums", content: bestSellingAlbums, type: "array"},
        {name: "averageAge", content: averageAge, type: "function"},
        {name: "average", content: average, type: "function"},
        {name: "latestOrOldest", content: latestOrOldest, type: "function"},

	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
