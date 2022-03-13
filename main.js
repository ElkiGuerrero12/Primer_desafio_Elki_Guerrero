class Usuario{
    constructor(input_nombre, input_apellido, input_libros, input_mascotas){
        this.nombre = input_nombre;
        this.apellido = input_apellido;
        this.libros = input_libros;
        this.mascotas = input_mascotas
    }
    //Método retorna nombre completo del usuario
    getFullName(){      
        return console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
    }
    //Método agregar una mascota
    addMascota(mas){
      user1.mascotas.push(mas)
      console.log(user1.mascotas)
    }
    //Método retorna el número total de mascotas
    countMascotas(){
        return console.log(user1.mascotas.length)
    }   
    //Método que agrega un objeto libro con su autor
    addBook(nombre, autor){
        user1.libros.push({nombre:nombre , autor:autor})
        console.log(user1.libros)
    }
    //Método que devuelve los nombres de los libros del objeto.
    getBookNames(){
        user1.libros.forEach(object =>{
            console.log(object.nombre);
        });
    }

    
}

const user1 = new Usuario("Elki", "Guerrero Castillo", [{nombre:"Marketing de Guerrilla", autor:"Al Ries"},{ nombre:"Piense y hágase Rico", autor:"Napoleon Hill"} ], ["Perro", "Gato"])
console.log(user1);
user1.getFullName();
user1.addMascota("Perico");
user1.countMascotas();
user1.addBook("Cien años de soledad", "Gabriel García Marquez");
user1.getBookNames();