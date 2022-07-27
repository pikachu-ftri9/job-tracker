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
router.get('/interviews', 
    listingController.getInterviewListings,
    (req, res) => {
        res.status(200).json(res.locals.listings)
})
router.get('/considering', 
    listingController.getConsideringListings,
    (req, res) => {
        res.status(200).json(res.locals.listings)
})
router.get('/offers', 
    listingController.getOfferListings,
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
router.patch('/update', 
    listingController.updateListings,
    (req, res) => {
        console.log('result', res.locals.updatedListing)
        res.status(200).json(res.locals.updatedListing)
})
router.post('/addNewJob', 
    listingController.addNewJob,
    (req, res) => {
        res.status(200).json(res.locals.listings)
})
router.delete('/delete', 
    listingController.deleteListings,
    (req, res) => {
        res.status(200).json(res.locals.listings)
})
module.exports = router;

