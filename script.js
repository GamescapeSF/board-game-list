const gameListData = {
	"Board Games": [
	  "Asmodee", "Kosmos Games", "Mayfair", "Rio Grande", "Z-Man Games",
	  "Fantasy Flight", "Hasbro", "Mattel", "Stronghold Games", "IELLO",
	  "USAopoly", "Renegade", "Pandasaurus", "Gigamic", "Stonemaier",
	  "Tasty Minstrel Games", "Oink Games"
	],
	"Party Games": [
	  "Bananagrams", "Jenga", "Cards Against Humanity", "Pitch Storm",
	  "Monikers", "Just One", "Codenames", "Apples to Apples",
	  "Wing It", "Taboo", "Scattergories", "Trivial Pursuit",
	  "Murder Mystery", "Trivia Decks", "Exploding Kittens", "Secret Hitler"
	],
	"TCGs & Standalone Card Games": [
	  "Star Realms", "One Piece TCG", "Magic The Gathering", "Pokémon", "Gloom",
	  "Set", "Monopoly Deal", "Werewolf", "Keyforge", "Arkham Horror",
	  "Legend of the Five Rings", "The Resistance", "Dominion", "Game of Thrones", "Coup",
	  "Star Wars: Unlimited", "Disney Lorcana", "Radlands", "UNION ARENA", "Altered"
	],
	"Miniature Games": [
	  "Star Wars X-Wing", "Warhammer 40K", "Age of Sigmar", "Gaslands",
	  "Star Wars Legion", "Kill Team", "WarCry", "Blood Bowl",
	  "Star Wars Armada", "Infinity", "BattleTech", "GodTear",
	  "Kings of War", "Warhammer Underworlds", "Marvel Crisis Protocol"
	],
	"Role-Playing Games": [
	  "Dungeons & Dragons", "Pathfinder", "Starfinder", "Star Wars RPG",
	  "Doctor Who", "Vampire: The Masquerade", "The One Ring", "Call of Cthulhu"
	],
	"Traditional Games": [
	  "Chess", "Backgammon", "Go", "Dominoes",
	  "Mah Jong", "Bingo", "Chinese Chess", "Poker",
	  "Shogi", "Checkers", "Liar's Dice", "Bridge",
	  "Cribbage", "Mancala", "Playing Cards"
	],
	"Jigsaw Puzzles": [
	  "Ravensburger", "Pomegranate", "Clementoni", "Eurographics",
	  "Artifact (Wooden)", "New York Puzzle Company", "Areaware (Gradient)",
	  "Cloudberries", "HEYE", "Reverie", "Mintyfizz",
	  "Art & Fable", "The Magic Puzzle Company"
	],
	"Family & Children's Games": [
	  "Thinkfun", "Gamewright", "Haba", "Blue Orange",
	  "Peaceable Kingdom", "Smart Games", "Djeco"
	],
	"Hobby Game Supplies": [
	  "Scale75", "Vallejo", "Reaper", "Card Sleeves",
	  "Dice", "Playmats", "Miniatures", "Citadel",
	  "Paints", "Brushes", "Meeples", "Counters",
	  "Blank Cards", "Hobby Terrain", "The White Box", "Dice Towers & Trays"
	]
};

function populateGameLists(data) {
	const sections = document.querySelectorAll(".list");
  
	sections.forEach(section => {
	  const title = section.querySelector("h2").textContent.trim();
	  const ul = section.querySelector("ul");
  
	  if (data[title] && ul) {
		data[title].forEach(game => {
		  const li = document.createElement("li");
		  li.textContent = game;
		  ul.appendChild(li);
		});
	  }
	});
  }
  
  // Automatically run after DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
	populateGameLists(gameListData);
  });