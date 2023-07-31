const express = require('express')
const cors = require('cors')

const app = express() // CREATES AN EXPRESS SERVER INSTANCE

app.use(express.json()) //express Handles tranlsation to/from json
app.use(cors()) //allow requests form other port #'s

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

//Endpoints
// app.get('/', (req, res) => {
//     let welcome = "Welcome Scott!"
//     console.log("Inside an endpoint!")
//     res.status(200).send(welcome)
// })

app.get('/api/inventory', (req,res)=> {
    if(req.query.item ) {
        const filteredItems = inventory.filter((product) => {
            return product.toLowerCase().includes(req.query.item.toLowerCase())
        })
        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
   
})

app.get('/api/inventory/:index', (req, res) => {
    let {index} = req.params
    console.log(req.params)
    let item = inventory[index]
    res.status(200).send(item)
}) 

app.listen(5050, () => console.log('server is running on 5050!'))
/*
3000-3005
4000-4005
5000-5005
1234
8080
8081
*/


