const express = require('express')
const studentRoute = require('./student.router')
const router = express();

router.use(studentRoute)

module.exports = router