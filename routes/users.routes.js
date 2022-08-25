module.exports = (app) => {
    const users = require('../controllers/user.controller')
    app.get('/',users.home);
    
    app.get('/users',users.details);
    app.get('/users/:id',users.detailId);

    app.post('/adduser',users.adduser);

}