const express = require('express')
const app = express()

let persons = [
   {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456"
    },
   {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523"
    },
   {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    },
]

app.get('/info', (request, response) => {
    const Fecha=new Date()
    const vista=`<h5>Phonebook has info for ${persons.length} people</h5>
                 <p>${Fecha}</p>`

    response.send(vista)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const ID = request.params.id
    const PersonaID = persons.find(person => person.id == ID)

    if (PersonaID) {
        response.json(PersonaID)
    } else {
        response.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto:${PORT}`)
})
