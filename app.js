    const express = require (`express`)
    const app = express()
    const port = 3000;

    app.use(express.json());

    let books = [
        {
            id:1,
            title: `cien años de soledad`,
            author: `Gabriel Garcia Marquez`
        },
        {
            id:2,
            title: `Don Quijote`,
            author: `Migel de cervates`
        }
    ];
//obtener todos los libros 
    app.get (`/api/books`, (req, res) => {
        res.json(books);

    });
//obtener un libro por ID
app.get('/api/books:id',(req, res) => {

    const id = parseInt( req.params.id);

    const  books = books.find (b => b. id === id);

    if (book) {
        return
        res.status(404).json({message: 'Libro no encontrado'

        })
    }
})

//crear un nuevo libro
app.post('/api/books',(req,res) => {

    const {title, author} =  req.body;

    if (!title || !author) {
        return res.status(400).json({
            message: 'Dato obligatorio'
        });
    }

    const newBooks = {
        id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
        title,
        author
    };

    books.push(newBooks);

    res.status(201).json(newBooks);

});

    app.get(`/`,(req,res)=> {
        res.send(`hello todos
            `);
    })

    app.listen(port,() => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
