const express = require('express')
const router = express.Router()
const uuid = require('uuid')
let users = require('../../users')

// get all users
router.get('/', (req , res) => {
    res.json(users);
});

// get users by id

router.get('/:id', (req , res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))

    if(found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else 
    res.sendStatus(400)
})

// create a new user 
router.post('/', (req , res) => {
    const newuser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }
    if(!newuser.name || !newuser.email){
        return res.sendStatus(400)
    }
    users.push(newuser)
    res.json(users)
})

// update users
router.put('/:id', (req , res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))

    if(found){
        const updateuser = req.body;
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)) {
                user.name = updateuser.name ? updateuser.name: user.name
                user.email = updateuser.email ? updateuser.email: user.email
                res.json({msg: 'user updated', user})
            }
        })
    }
})

// deleted user
router.delete('/:id', (req , res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if(found){
        users = users.filter(user => user.id !== parseInt(req.params.id))
        res.json({
            msg: "user deleted",
            users
        })
    }else{
        res.sendStatus(400)
    }
})


module.exports = router