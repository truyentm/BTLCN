const express = require('express');
const app = express();
const port = 3000;
var router = express.Router();



// Cấu hình Express.js để phục vụ tệp tĩnh từ thư mục 'public'
app.use(express.static('public'));

// Sử dụng EJS làm view engine
app.set('view engine', 'ejs');

// Sử dụng route '/index' từ tệp routes/index.js
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.get('/about',(req,res) =>{
  res.render('./about.ejs',)
})

app.get('/booking',(req,res) =>{
  res.render('./booking.ejs',)

})
app.get('/login',(req,res) =>{
  res.render('./login.ejs',)

})
/*
const routes = require('./routes/booking');
app.use('/booking', routes);
*/
// Bắt đầu máy chủ
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
