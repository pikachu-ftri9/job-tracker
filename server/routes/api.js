const express = require('express');

const listingController = require('../controllers/listingController.js');

const router = express.Router();

router.get('/', 
    listingController.getListings,
    (req, res) => {
        res.status(200).json(res.locals.getLists)
    })

router.get('/applied', 
    listingController.getAppliedListings,
    (req, res) => {
        res.status(200).json(res.locals.listings)
})

router.get('/callback', 
    listingController.getCallbackListings,
    // listingController.getCallbackListings,
    (req, res) => {
        res.status(200).json(res.locals.listings)
})
//
router.post('/update', 
    listingController.updateListings,
    (req, res) => {
        res.status(200).json(res.locals.listings)
})
router.delete('/delete', 
    listingController.deleteListings,
    (req, res) => {
        res.status(200).json(res.locals.listings)
})
module.exports = router;

