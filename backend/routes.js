const express = require('express');
const router  = express.Router();

const FabricanteController = require('./controller/FabricanteController');
const ModeloController     = require('./controller/ModeloController');
const PeliculasController  = require('./controller/PeliculaController');

router.get('/fabricante',FabricanteController.index);
router.get('/fabricante/:id',FabricanteController.findOne);
router.post('/fabricante',FabricanteController.store);
router.put('/fabricante',FabricanteController.update);
router.delete('/fabricante/:id',FabricanteController.delete);

router.get('/modelo',ModeloController.index);
router.get('/modelo/:id',ModeloController.findOne);
router.post('/modelo',ModeloController.store);
router.put('/modelo',ModeloController.update);
router.delete('/modelo/:id',ModeloController.remove);

router.get('/peliculas',PeliculasController.index);
router.get('/peliculas/:id',PeliculasController.findById);
router.post('/peliculas',PeliculasController.store);
router.put('/peliculas',PeliculasController.update);
router.delete('/peliculas/:id',PeliculasController.delete);


router.get('/',(req,res) => {
    res.send()
})
module.exports = router;