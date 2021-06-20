const express = require('express');

const studentRoute = express()

studentRoute.get('/', (req, res) => {
    res.send('Hello World!')
})
studentRoute.get('/demo', (req, res) => {
    res.send('demo!')
})
//create api user management
const userList = [
    {id: 1, name: "name 1", email: "email 1"},
    {id: 2, name: "name 2", email: "email 2"},
]
studentRoute.get('/api/user', (req, res) => {
    res.send(userList)
})
// lay chi tiet nguoi dung (can id)
studentRoute.get('/api/user/:id', (req, res) => {
    const {id} = req.params;
    const user = userList.find(user => user.id == id)
    if(user){
        res.send(user)
    } else {
        res.status(404).send("not found")
    }
})
// API thêm người dùng
// method: POST 
// urrl: http://localhost.com/api/user
// body: {name, email}
studentRoute.post('/api/user', (req, res) => {
    const {name, email} = req.body
    const newUser = {
        id: Math.random().toString(), name , email
    }
    console.log(req.body)
    userList.push(newUser)
    res.send(newUser)
})
// API xóa người dùng
studentRoute.delete('/api/user/:id', (req, res) => {
    const { id } = req.params;
    const index = userList.findIndex( user => user.id == id)

    console.log(id)
    console.log(index)
    if ( index !== -1 ) {
        const deletedUser = userList[index]
        userList.splice(index, 1)
        res.send(deletedUser)
    }else{
        res.status(404).send('user not found')
    }
})
// update moi user 
studentRoute.put('/api/user/:id', (req, res) => {
    const { id } = req.params;
    const { name, email }= req.body;
    const index = userList.findIndex( user => user.id == id)
    if (index !== -1){
        const user = userList[index];
        const userUpdate  = { ...user, email, name}
        userList[index] = userUpdate;
        res.send(userUpdate)
    }else{
        res.send('notfound')
    }
})

module.exports = studentRoute;