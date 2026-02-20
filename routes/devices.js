const express = require('express');
const router = express.Router();
const Device = require('..models/device');

router.get('/', async (req, res) => {
    try {
        const devices = await Device.find();
        res.json(devices);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

router.post('/', async (req, res) => {
    const device = new Device({
        marca: req.body.marca,
        modelo: req.body.modelo,
        precio: req.body.precio,
        sistemaOperativ: req.body.sistemaOperativo
    });
    try{
        const newDevice = await device.save();
        res.status(201).json(newDevice);
    } catch (error){
        res.status(400).json({ message: error.message});
    }
});

router.put ('/:id', async (req, res) => {
    try {
        const updateDevice = await Device.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updateDevice);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Device.findByIdAndDelete(req.params.id);
        res.json({message: 'Dispositivo eliminado'});
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

module.export = router; 

