console.log("Hello");

/*  Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

///// creazione elenco squadre

const teams = [
  { nome: "Raimon", points: 0, foulsOnTeam: 0 },
  { nome: "Zeus", points: 0, foulsOnTeam: 0 },
  { nome: "Alius", points: 0, foulsOnTeam: 0 },
  { nome: "Royal", points: 0, foulsOnTeam: 0 },
  { nome: "Ogre", points: 0, foulsOnTeam: 0 },
];

console.log(teams);

///// ottenere un numero casuale per punti e falli

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/// assegnare un valore a punti e falli
teams.forEach((team) => {
  team.points = getRandomNumber(0, 15);
  team.foulsOnTeam = getRandomNumber(10, 50);
});

console.log("teams and stats ");
console.log(teams);

const teamsFoul = teams.map((team) => {
  return {
    nome: team.nome,
    foulsOnTheTeam: team.foulsOnTeam,
  };
});

console.log("Teams and fouls");
console.log(teamsFoul);
