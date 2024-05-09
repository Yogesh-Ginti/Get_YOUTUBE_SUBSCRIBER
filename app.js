const express = require("express")
const app = express()

const subscriberRouter = require('./src/routes/subscriber')


//App level Middleware
app.use(express.urlencoded({extended:false}))  //for url encoding.
app.use(express.json());  //for handling JSON requests


//Routes
app.use('/subscribers', subscriberRouter)

app.get('/',(req, res)=>{
	res.setHeader("X-Author", "yogesh_ginti")
  return res.json({
    success: true,
		routes: [
			{ "/subscribers": "Fetch all subscriber" },
			{
				"/subscribers/names":
					"Fetch all subscriber data with an array of name and channel name fields",
			},
			{
				"/subscribers/:id":
					"Fetch specific subscriber using the provided ID",
			},
			{
				"/subscribers/add":
					"Use Postman to send a POST request with the request body requiring two values: name and subscribedChannel",
			},
			{
				"/subscribers/update/:id":
					"Use Postman to send a PATCH request with the request parameter 'id' and a request body requiring any value for either 'name' or 'subscribedChannel'",
			},
			{
				"/subscribers/delete/:id":
					"Use Postman to send a DELETE request with the request parameter 'id' to delete subscribed channel data",
			},
		],
	});
})


module.exports = app;


