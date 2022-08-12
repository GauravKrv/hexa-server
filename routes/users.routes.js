module.exports = (app) => {
    const users = require('../controllers/user.controller')
    app.get('/',users.home);
    
    app.get('/users',users.details);
    app.post('/adduser',users.adduser);

}