const express = require("express");
const port = 7000;
const app = express();
/// all requires--------
const{userMongodbUri}=require('./connection/config')
const {mongodbConnect}= require("./connection/mongodb")
const userRouter = require("./routes/register")
const loginRouter =require("./routes/login");
const searchRouter =require("./routes/search");
const adminRouter =require("./routes/tour")
const tourRouter =require("./routes/userTour")

//middleware 
app.use(express.json())

//db connect
mongodbConnect(userMongodbUri);


app.use('/api/register',userRouter);
app.use("/api/login",loginRouter);
app.use("/api/users/profile",searchRouter);

app.use("/api/admin/tours",adminRouter);
app.use("/api/tours",tourRouter);

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}/`);
})