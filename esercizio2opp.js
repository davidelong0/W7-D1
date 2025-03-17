// Raccogli i riferimenti agli input del form
const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  // verifico se due animali hanno lo stesso padrone
  static shareOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}

const pet1 = new Pet("Fido", "Giovanni", "Cane", "Labrador");
const pet2 = new Pet("Rex", "Giovanni", "Cane", "Pastore Tedesco");
const pet3 = new Pet("Rex", "Dario", "Cane", "Pastore Tedesco");

// Verifica se i due animali condividono lo stesso padrone e visualizza il risultato
console.log(Pet.shareOwner(pet1, pet2));
console.log(Pet.shareOwner(pet1, pet3));

// Funzione per aggiungere il pet alla lista e mostrare i dati
function addPetToList(pet) {
  const petList = document.getElementById("pet-list-items");
  const listItem = document.createElement("li");
  listItem.className = "list-group-item";

  // Concatenazione di stringhe per formattare il testo
  listItem.textContent =
    pet.petName +
    " (Owner: " +
    pet.ownerName +
    ", Species: " +
    pet.species +
    ", Breed: " +
    pet.breed +
    ")";

  petList.appendChild(listItem);
}

document.getElementById("pet-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Impedisce l'invio del form tradizionale

  // Crea una nuova istanza di Pet passando i valori degli input
  const newPet = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );

  addPetToList(newPet);
});
