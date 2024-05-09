const mongoose = require('mongoose')

const subscriberSchema = mongoose.Schema({
  name:{
    type:String
  },
  subscribedChannel:{
    type:String
  }
},{timestamps:true})

const subscriber = mongoose.model('subscribers', subscriberSchema )

module.exports = subscriber;
