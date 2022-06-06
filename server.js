const express = require('express')
const app = express()
const PORT = 8000


const rappers = {
    '21 savage': {
        'birthName' : 'Sheyaa Bin Abraham-Joseph',
        'age' : 29,
        'birthLocation' : 'London,England'
    },

    'chance the rapper' : {
        'birthName' : 'Chancelor Bennett',
        'age' : 29,
        'birthLocation' : 'Chicago,Illinois'
    },
    'unknown' : {
        'birthName' : 'unknown',
        'age' : 0,
        'birthLocation' : 'unknown'
    },
}
    app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})


app.get('/api/:name', (request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}! You better go catch it!`)
})
