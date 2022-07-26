const db = require('../models/model.js');

const listingController = {};

listingController.getListings = (req, res, next) => {
    //need to define query based on database structure
    const qry = 
    'SELECT  *  FROM job_tracker.listings'

    db.query(qry, (err, result) => {
        if (err) {
            next(err.stack);
        } else {
            //this will need to be adjusted based on datastructure
            res.locals.Listings = result.rows
            next();
        }
     })
}
listingController.getAppliedListings = (req, res, next) => {
    //need to define query based on database structure
    const qry = 
    `SELECT * FROM job_tracker.listings WHERE status='Applied'`

    db.query(qry, (err, result) => {
        if (err) {
            next(err.stack);
        } else {
            //this will need to be adjusted based on datastructure
            res.locals.Listings = result.rows
            next();
        }
     })
}
listingController.getCallbackListings = (req, res, next) => {
    //need to define query based on database structure
    const qry = 
    `SELECT * FROM job_tracker.listings WHERE status='Callback'`

    db.query(qry, (err, result) => {
        if (err) {
            next(err.stack);
        } else {
            //this will need to be adjusted based on datastructure
            res.locals.Listings = result.rows
            next();
        }
     })
}
listingController.UpdateListings = (req, res, next) => {
    //need to define query based on database structure
    const qry = 
    `UPDATE job_tracker.listings 
    SET status='Applied'
    WHERE _id=1
    `

    db.queryreturn (qry, (err, result) => {
        if (err) {
            next(err.stack);

            return next()        } else {
            //this will need to be adjusted based on datastructure
            res.locals.Listings = result.rows
            next();
        }
     })
}

module.exports = listingController;
