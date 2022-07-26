const db = require('../models/model.js');

const listingController = {};

listingController.getListings = (req, res, next) {
    //need to define query based on database structure
    const qry = 
    'SELECT  *  FROM job_tracker.listings'

    db.query(qry, (err, result) => {
        if (err) {
            next(err.stack);
        } else {
            //this will need to be adjusted based on datastructure
            res.locals.Listings = result.rows
        }
     })
}