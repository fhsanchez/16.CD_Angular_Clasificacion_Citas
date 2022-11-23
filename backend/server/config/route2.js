    app.post('/nuevoAutor', function (req, res) {
            controller.nuevoAutor(req,res);
        });
    
    

 app.get('/buscarTodosAutores', function (req, res) {
        controller.buscarTodosAutores(req,res);
    });


    app.get('/buscarAutor/:id', function (req, res) {
        controller.buscarAutor(req,res);
    });

    app.put('/actualizarAutor/:id', function (req, res) {
        controller.actualizarAutor(req,res);
    });


/*************************************** */
    app.get('/buscarTodasCitas/:id', function (req, res) {
            controller.buscarTodasCitas(req,res);
        });
    
        app.put('/nuevaCita/:id', function (req, res) {
            controller.nuevaCita(req,res);
        });

    
    app.put('/actualizarVotosCita/:id', function (req, res) {
        controller.actualizarVotosCita(req,res);
    });

    app.put('/borrarCita/:id', function (req, res) {
        controller.borrarCita(req,res);
    });



-- Nueva cita

const nuevaCita = async (req, res) => {

    const id = req.params.id;

    const {textoCita, votosCita} = req.body;

    console.log('body', req.body);

    BaseDatos.updateOne({ _id: id}, {$push:{citas: {textoCita, votosCita}}} )

        .then(data => res.json(data))

        .catch(err => res.json(err));


        [16:35] Ahumada Toro Rodrigo
    const actualizarVotosCita = async (req, res) => {
        const idCita = req.params.id;
        const votosCita = req.body.votosCita;
        console.log(votosCita);
        console.log(idCita);
        BaseDatos.updateOne({'citas._id': idCita},{$set:{'citas.$.votosCita':votosCita}})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

[16:55] 
16:55 Llamada finalizada 2h 11m 44s




-- Evento delete Cita -- PATCH
const borrarCita = async (req, res) => {

    let idCita = req.params.id;

    let idAutor = req.body.id;

    console.log(idCita);

    BaseDatos.updateOne({ _id: idAutor}, {$pull: {citas: {_id: idCita}}} )

    .then(data => res.json(data))

    .catch(err => res.json(err));


    -- 

    const actualizarAutor = async (req, res) => {

        const id = req.params.id;

        const body = req.body.nombreAutor;

        BaseDatos.updateOne({ _id: id}, {nombreAutor: body})

            .then(data => res.json(data))

            .catch(err => res.json(err));

    }