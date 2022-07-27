const { Pool } = require('pg');
const db = require('../models/model.js');

const listingController = {};

listingController.getListings = async (req, res, next) => {
    // need to define query based on database structure
    const qry = 'SELECT  *  FROM job_tracker.listings';
    db.query(qry, (err, result) => {
        if (err) {
            return next(err.stack);
        } else {
            //this will need to be adjusted based on datastructure
            console.log('getListings', result.rows);
            res.locals.listings = result.rows
            return next();
        }
     })
}

listingController.getAppliedListings = async (req, res, next) => {
  try {
    const appListings = await db.query(
      `SELECT * FROM job_tracker.listings WHERE status='Applied'`
    );
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
listingController.getCallbackListings = async (req, res, next) => {
    //need to define query based on database structure
    const qry = 
    `SELECT * FROM job_tracker.listings WHERE status='Callback'`

    try {
        const appListings = await db.query(`SELECT  *  FROM job_tracker.listings WHERE status='Callback'`);
        res.locals.listings = appListings.rows;
        console.log('listingController.getListings', appListings.rows);
        return next();
    } catch (error) {
        return next({
            log: 'Error in listingController.getListings',
            status: 400,
            message: {
              error: `Error in listingController.getListings ${error}`,
            },
        });
    }
}
listingController.getInterviewListings = async (req, res, next) => {
    //need to define query based on database structure
    const qry = 
    `SELECT * FROM job_tracker.listings WHERE status='Interview'`

    try {
        const appListings = await db.query(`SELECT  *  FROM job_tracker.listings WHERE status='Interview'`);
        res.locals.listings = appListings.rows;
        console.log('listingController.getListings', appListings.rows);
        return next();
    } catch (error) {
        return next({
            log: 'Error in listingController.getListings',
            status: 400,
            message: {
              error: `Error in listingController.getListings ${error}`,
            },
        });
    }
}
listingController.getConsideringListings = async (req, res, next) => {
    //need to define query based on database structure
    const qry = 
    `SELECT * FROM job_tracker.listings WHERE status='Considering'`

    try {
        const appListings = await db.query(`SELECT  *  FROM job_tracker.listings WHERE status='Considering'`);
        res.locals.listings = appListings.rows;
        console.log('listingController.getListings', appListings.rows);
        return next();
    } catch (error) {
        return next({
            log: 'Error in listingController.getListings',
            status: 400,
            message: {
              error: `Error in listingController.getListings ${error}`,
            },
        });
    }
}
listingController.getOfferListings = async (req, res, next) => {
    //need to define query based on database structure
    const qry = 
    `SELECT * FROM job_tracker.listings WHERE status='Offer'`

    try {
        const appListings = await db.query(`SELECT  *  FROM job_tracker.listings WHERE status='Offer'`);
        res.locals.listings = appListings.rows;
        console.log('listingController.getListings', appListings.rows);
        return next();
    } catch (error) {
        return next({
            log: 'Error in listingController.getListings',
            status: 400,
            message: {
              error: `Error in listingController.getListings ${error}`,
            },
        });
    }
}
listingController.addNewJob = async (req, res, next) => {
    //need to define query based on database structure
    const { title, url, company } = req.body;
    console.log('here is request info', title, url, company)
    const VALUES = [title, url, company, "Applied"]
    const qry = 
    `INSERT INTO job_tracker.listings (title, url, company, status)
     VALUES ($1, $2, $3, $4) RETURNING *`;
    // `INSERT INTO job_tracker.listings (title, url, company, status)
    //  VALUES  (request.title, request.url, request.company, "Applied")`;
    // `INSERT INTO employeedetails (title, url, company, status)
    // VALUES  ('"request.title + request.url + request.company + 'Applied'"');`

    try {
        const appListings = await db.query(qry, VALUES);
        res.locals.listings = appListings.rows;
        console.log('listingController.addNewJob', appListings.rows);
        return next();
    } catch (error) {
        return next({
            log: 'Error in listingController.addNewJob',
            status: 400,
            message: {
              error: `Error in listingController.addNewJob ${error}`,
            },
        });
    }
}

listingController.updateListings = async (req, res, next) => {
  //need to define query based on database structure
  const {_id, status} = req.body;
  const obj = {Applied:1, Callback:1, Offer:1,Interview:1,Considering:1 } 
  const qry = `UPDATE job_tracker.listings 
    SET status=$1
    WHERE _id=$2
    RETURNING *
    `;
  const VALUES = [ status, _id ]
  try {
    if (obj[status]) {
        const updatedListing = await db.query(qry, VALUES);
        res.locals.updatedListing = updatedListing.rows;
        return next();
    }
    else { 
        next({
            log: 'not valid Status string try ',
            status: 400,
            message: {
            error: 'Error in updateListing not valid Status',
            }
        })
    }
  } catch (error) {
        return next({
            log: 'Error in updateListing',
            status: 400,
            message: {
                error: 'Error in updateListing ${error}',
            }
        })
  
  }
  
//   db.query(qry, (err, result) => {
//     if (err) {
//       next(err.stack);

//       return next();
//     } else {
//       //this will need to be adjusted based on datastructure
//       res.locals.listings = result.rows;
//       next();
//     }
//   });
//             }
//         })
  
//   }
  
//   db.query(qry, (err, result) => {
//     if (err) {
//       next(err.stack);

//       return next();
//     } else {
//       //this will need to be adjusted based on datastructure
//       res.locals.listings = result.rows;
//       next();
//     }
//   });
};
listingController.deleteListings = (req, res, next) => {
  //need to define query based on database structure
  const qry = `Delete from job_tracker.listings where _id=1`;

  db.query(qry, (err, result) => {
    if (err) {
      next(err.stack);
    } else {
      //this will need to be adjusted based on datastructure
      res.locals.listings = result.rows;
      next();
    }
  });
};

module.exports = listingController;
