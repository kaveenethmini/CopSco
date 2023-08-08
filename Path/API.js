const express = require('express');
const router = express.Router();
const pool = require('../database.js');
const { get } = require('lodash');
// const rmv = require('./database.js');  //RMV database connection


router.get('/getvehicledetails', async (req, res) => {

    const {
        VehicleNo,
    } = req.body;


    try {
        //check vehicle details
        const vehicledetails = await pool.query(
            'SELECT * FROM public.vehicledetails'
            // 'SELECT * FROM public.vehicledetails WHERE vehicledetails.VehicleNo = $1', [VehicleNo]
        );

        if (vehicledetails.rows.length === 0) {
            return res.status(401).json({ error: "Vehicle not found, please check the vehicle number" });
        }
        else {
            // return Object.values(JSON.parse(JSON.stringify(vehicledetails)));
            return res.send(vehicledetails)
        }
    }

    catch (err) {
        console.error(err.message);
    }

});



module.exports = router;