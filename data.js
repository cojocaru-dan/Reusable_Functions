//YOUR CODE COMES HERE
let favoriteBooks = [
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        year: 2003,
        isNewerThan2000: true,
        age: 20,
        characters: ["Ashoke", "Gogol", "Sonia", "Maxine"]
    },
    {
        title: "Norse Mythology",
        author: "Neil Gaiman",
        year: 2017,
        isNewerThan2000: true,
        age: 6,
        characters: ["Odin", "Thor", "Loki", "Freya"]
    }
];

const favMovies = [
	{
		title: "Forrest Gump",
		year: 1994,
		rating: 8.8,
		description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
		directors: ["Robert Zemeckis"],
		writers: ["Winston Groom", "Eric Roth"],
		stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
		genres: ["Drama", "Comedy", "Romance"]
	},
	{
		title: "The Silence of the Lambs",
		year: 1991,
		rating: 8.6,
		description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
		directors: ["Jonathan Demme"],
		writers: ["Thomas Harris", "Ted Tally"],
		stars: ["Jodie Foster", "Anthony Hopkins", "Lawrence Bonney"],
		genres: ["Thriller", "Horror", "Mystery"]
	},
	{
		title: "Se7en",
		year: 1995,
		rating: 8.6,
		description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
		directors: ["David Fincher"],
		writers: ["Andrew Kevin Walker"],
		stars: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
		genres: ["Thriller", "Mystery", "Crime"]
	},
	{
		title: "The Usual Suspects",
		year: 1995,
		rating: 8.5,
		description: "The authorities in New York arrest five guys with one of the most dubious reputations, suspected of having participated in the robbery of a truck. The police investigations will trigger a carousel of violence that will end in a carnage with 27 dead bodies and a quantity of cocaine worth 91 million dollars missing.",
		directors: ["Bryan Singer"],
		writers: ["Christopher McQuarrie"],
		stars: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"],
		genres: ["Mystery", "Crime", "Drama"]
	}
];

let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
    },
];

function averageAge(array, currentYear){
    let avgAge = 0;
    for (const obj of array) {
        avgAge += (currentYear - obj.year);
    }
    avgAge = avgAge / array.length;
    return avgAge;
} 

console.log(averageAge(favoriteBooks, 2023));
console.log(averageAge(favMovies, 2023));
console.log(averageAge(bestSellingAlbums, 2023));

// function average(array, keyName){
//     if (array.every(function checkKey(object) {
//         return object.hasOwnProperty(keyName) && typeof object[keyName] === "number";
//     })) {
//         let avg = array.reduce(function(a, b){
//             return a + b[keyName];
//         }, 0)
//         avg = avg / array.length;
//         return avg
//     }
// }

// console.log(average(bestSellingAlbums, "sale"));
// console.log(average(favMovies, "rating"));

function average(array, keyName){
    let avg = 0;
    for (const obj of array) {
        if (!obj.hasOwnProperty(keyName)) {
            return `One of the objects doesn't have ${keyName} as a property.`;
        } else if (typeof obj[keyName] !== "number") {
            return `One of the objects doesn't have a number as ${keyName} value.`;
        } else {
            avg += obj[keyName];
        }
    }
    avg = avg / array.length;
    return avg
}

console.log(average(favMovies, "rating"));
console.log(average(bestSellingAlbums, "sale"));
console.log(average(bestSellingAlbums, "title"));
console.log(average(bestSellingAlbums, "engine"));

function latestOrOldest(array, flag){
    let latest = array[0];
    let oldest = array[0];
    for (const obj of array) {
        if (!obj.hasOwnProperty("year")) {
            return "One of the objects doesn't have year as property.";
        }
        if (obj.year > latest.year) {
            latest = obj;
        }
        if (obj.year < oldest.year) {
            oldest = obj;
        }
    }
    if (flag) return latest.title;
    else return oldest.title;
}

console.log(latestOrOldest(favoriteBooks, false));
console.log(latestOrOldest(favoriteBooks, true));
console.log(latestOrOldest(favMovies, false));
console.log(latestOrOldest(favMovies, true));
console.log(latestOrOldest(bestSellingAlbums, false));
console.log(latestOrOldest(bestSellingAlbums, true));








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
