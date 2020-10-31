//1. Array operations

// Ejercico HEAD: Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. U􀦞liza destructuring.

let myArray = [1,2,3,4,5];

const head = ( [first,] ) => first; 

console.log("El primer elemento del array ",myArray," es: ", head( myArray ));

// Ejercicio Tail: Implementa una función tail (inmutable), tal que, dado un array como entrada y devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([, ...restArray]) => restArray;

console.log("El Array", myArray, "menos el primer elemento es: ", tail(myArray));

// Ejercicio Init: Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último.
// Utiliza los métodos que ofrece Array.prototype.

const init = (arg) => arg.slice(0, (arg.length -1));

console.log("Todos los elementos de ",myArray, "menos el último son: ",init(myArray));

//Ejercicio Last: Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (arg) => arg[(arg.length -1)];

console.log("el último elemento de ",myArray," es: ", last(myArray));

//2. Concat
//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (a, b) => [...a,...b];

console.log(concat (['uno','dos','tres'], ['cuatro','cinco','seis', 'siete']));

// Opcional: Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const concat2 = (...arg) =>{
    let aux = [];
    arg.forEach(value=> aux = [...aux, ...value]);
    return aux;
}

console.log(concat2 (['a','b','c'], ['d','e','f'], ['g','h','i']));


// 3. Clone Merge: Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source :

myObject = {
            name:"Pedro",
            Age: 37,
            ciudad: "Málaga"
            }

function clone(source) {
    return {...source}; 
}

console.log("El objeto es una copia? ", myObject !== clone(myObject));


// Merge: Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
//de propiedades con el mismo nombre, source sobreescribe a target. Por ejemplo, dados estos 2 objetos:

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

//el resultado de mezclar a sobre b sería:

function merge(source, target) {
    return {...target, ...source};
    }

console.log (merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}


// 4. Read Books: Crea una función isBookRead que reciba una lista de libros y un titulo y devuelva si se ha leído o no dicho libro.
//Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false
//TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

const isBookRead = (books, titleToSearch) => {
    const aux = books.find(book => book.title === titleToSearch);
    return aux !== undefined ?  aux.isRead : "No se ha encontrado el libro"   
}

const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
    ];
    console.log(isBookRead(books, "Devastación")); // true
    console.log(isBookRead(books, "Canción de hielo y fuego")); // false
    console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
    