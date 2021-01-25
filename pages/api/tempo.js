function tempo(request, response) {
    const dynanicDate = new Date()

    response.json({
        date: dynanicDate.toGMTString()
    })
}

export default tempo