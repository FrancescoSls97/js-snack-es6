console.log("hello");

// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

const bike = [
  { type: "steel", weigth: 70 },
  { type: "carbon", weigth: 70 },
  { type: "aluminium", weigth: 70 },
];

console.log(bike);

let ligthestBike = bike[0];
for (let i = 0; i < bike.length; i++) {
  if (bike[i].weigth < ligthestBike.peso) {
    ligthestBike = bike[i];
  }
  console.log(ligthestBike);

  console.log("La bici più leggera è:");
  console.log(ligthestBike);
}
