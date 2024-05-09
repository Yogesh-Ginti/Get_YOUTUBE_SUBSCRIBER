const express = require('express')
const router = express.Router()

// importing all Controllers
const {
  handleGetAllSubscriber,
  handleGetSubscriberByName,
  handleGetSubscriberById,
  handleAddSubscriber,
  handleUpdateSubscriber,
  hanndleDeleteSubscriber
} = require('../controllers/subscriber')


// Rotue to make a "Get"  request for Retrieve all subscribers
router.get('/', handleGetAllSubscriber)

// Rotue to make a "Get" request for Retrieve all subscribers with name and subscribedChanel fields.
router.get('/names', handleGetSubscriberByName)

// Rotue to make a "Get" request for Retrieve a specific subscriber by id
router.get('/:id', handleGetSubscriberById )

// Rotue to make a "POST" request for Adding a new subscriber
router.post('/add', handleAddSubscriber)

// Rotue to make a "PATCH" request for Updating a specific subscriber by id
router.patch('/update/:id', handleUpdateSubscriber)

// Rotue to make a "Delete" request for Deleting a specific subscriber by id
router.delete('/delete/:id', hanndleDeleteSubscriber)



module.exports = router;