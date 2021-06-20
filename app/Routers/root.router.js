const express = require('express')
const studentRoute = require('./student.router')
const router = express();

router.use('/api/user',studentRoute)

module.exports = router