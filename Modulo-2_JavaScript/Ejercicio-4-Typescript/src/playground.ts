console.log("This is your playground, experiment with TS code and check the console");

const city: string = "Málaga";

// 4. Read Books: Crea una función isBookRead que reciba una lista de libros y un titulo y devuelva si se ha leído o no dicho libro.
//Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false
//TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.


const isBookRead = (books: Book[], titleToSearch: string): boolean | string => { 
    const aux = books.find(book => book.title === titleToSearch);
    return aux !== undefined ?  aux.isRead : "No se ha encontrado el libro";
}

interface Book {
    title: string;
    isRead: boolean;
}

const books: Book[] = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
    ];

    console.log(isBookRead(books, "Devastación")); // true
    console.log(isBookRead(books, "Canción de hielo y fuego")); // false
    console.log(isBookRead(books, "Los pilares de la tierra")); // No se encuentra en el array books