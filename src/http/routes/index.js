export const routes = async(app) => {
    app.get('/', () => console.log('Oi galerinha 😜'))
    // app.get('/produtos/:id', (request, response) =>{
    //     console.log(request.params)

    //     return response.status(200).send({ message: "Requisição enviada com sucesso!" })
    // })
}