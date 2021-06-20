const express = require('express');
const router = require('./Routers/root.router')
const app = express()
const PORT = 7000
app.use(router)
// set up app  sử dụng dạng JSON 
app.use(express.json())// chuyển hết tất cả mọi req gửi lên về dạng JSON
//method: get
//url: localhost:port/

app.listen(PORT, () => {
    console.log(`app running ${PORT} `);
})// có nghĩa là nếu cái app kết nối được port 3000 thì sẽ chạy cái hàm 