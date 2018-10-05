module.exports = {

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_houses()
        .then( (response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log(err);
        })
    },

    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, address, city, state, zip} = req.body;
        dbInstance.create_houses([name, address, city, state, zip])
        .then( (response) => {
            res.Status(200).send(response);
            console.log(response)
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log(err);
        })
    }, 

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        dbInstance.delete_houses(params.id)
        .then( () => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log(err);
        })
    } 

   


    // getOne: (req, res) => {
    //     const dbInstance = req.app.get('db');
    //     const {params} = req;
    //     dbInstance.read_product([ params.id ])
    //     .then( (response) => {
    //         res.sendStatus(200).send(response)
    //     })
    //     .catch((err) => {
    //         res.sendStatus(500);
    //         console.log(err);
    //     })
    // },
}