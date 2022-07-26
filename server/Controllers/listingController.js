const { Pool } = require('pg');
const db = require('../models/model.js');

const listingController = {};

listingController.getListings = (req, res, next) => {
    //need to define query based on database structure
    const qry = 
    'SELECT  *  FROM job_tracker.listings'

    db.query(qry, (err, result) => {
        if (err) {
            return next(err.stack);
        } else {
            //this will need to be adjusted based on datastructure
            res.locals.listings = result.rows
            return next();
        }
     })
}

listingController.getAppliedListings = async (req, res, next) => {
    try {
        const appListings = await db.query(`SELECT * FROM job_tracker.listings WHERE status='Applied'`);
        res.locals.listings = appListings.rows;
        console.log('getAppliedListings', appListings.rows);
        return next();
    } catch (error) {
        return next({
            log: 'Error in listingController.getAppliedListings',
            status: 400,
            message: {
              error: `Error in listingController.getAppliedListings ${error}`,
            },
        });
    }
    // //need to define query based on database structure
    // const qry = 
    // `SELECT * FROM job_tracker.listings WHERE status='Applied'`

    // db.query(qry, (err, result) => {
    //     if (err) {
    //         return next(err.stack);
    //     } else {
    //         //this will need to be adjusted based on datastructure
    //         res.locals.listings = result.rows
    //         return next();
    //     }
    //  })
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
            res.locals.listings = result.rows
            next();
        }
     })
}
listingController.updateListings = (req, res, next) => {
    //need to define query based on database structure
    const qry = 
    `UPDATE job_tracker.listings 
    SET status='Applied'
    WHERE _id=1
    `

    db.queryreturn (qry, (err, result) => {
        if (err) {
            next(err.stack);

            return next()        
        } else {
            //this will need to be adjusted based on datastructure
            res.locals.listings = result.rows
            next();
        }
     })
}
listingController.deleteListings = (req, res, next) => {
    //need to define query based on database structure
    const qry = 
    `Delete from job_tracker.listings where _id=1`

    db.query(qry, (err, result) => {
        if (err) {
            next(err.stack);
        } else {
            //this will need to be adjusted based on datastructure
            res.locals.listings = result.rows
            next();
        }
     })
}

module.exports = listingController;
