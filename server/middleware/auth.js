const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  Promise.resolve(req.cookies['shortlyid'])
    .then((result) => {
      console.log('I am here!');
    })
    .catch(() => {
      return models.Sessions.create()
        .then((session) => {
          console.log('I am over here!');
          let id = session.userId;
          return models.Session.get({ id: id });
        })
        .then((result) => {
          req.session = result;
          next();
        });
    });
  // .then((data) => {
  //   console.log(data);
  // })
  // .then((session) => {
  //   req.session = session;
  //   next();
  // });
  // Promise.resolve(req.cookies)
  //   .then(result => {

  //   });
  // console.log(req.cookies);
  // if (!req.cookies) {
  // models.Sessions.create();
  // }
  // next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

