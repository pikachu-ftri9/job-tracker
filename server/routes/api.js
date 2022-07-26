const express = require('express');

const listingController = require('../controllers/listingController.js');

const router = express.Router();

router.get('/', 
    listingController.getListings,
    (req, res) => {
        res.status(200).json(res.locals.Listings)
    })

router.get('/Applied', 
    listingController.getAppliedListings,
    (req, res) => {
        res.status(200).json(res.locals.Listings)
})

router.get('/callback', 
    listingController.getCallbackListings,
    (req, res) => {
        res.status(200).json(res.locals.Listings)
})
//
router.post('/update', 
    listingController.UpdateListings,
    (req, res) => {
        res.status(200).json(res.locals.Listings)
})

module.exports = router;

