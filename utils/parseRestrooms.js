const parseRestrooms = restroomsArray => {

    restroomsParsed = restroomsArray.map(restroom => {
        const { id: reference, name, comment: description, street, city, state, country, directions: indications, changing_table, accessible, unisex, latitude, longitude, downvote: down, upvote: up } = restroom

        const restroomObject = {

            reference,
            name,
            description,
            address: {
                street,
                city,
                state,
                country,
                indications,
            },
            features: {
                changing_table,
                accessible,
                unisex,
            },
            location: {
                type: 'Point',
                coordinates: [latitude, longitude]
            },
            votes: {
                down,
                up,
                votes: []
            },
            comments: []
        }

        return restroomObject
    })
    return restroomsParsed
}

module.exports = parseRestrooms
