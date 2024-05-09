const Subscriber = require('../models/subscriber')

// Retrieve All subscribers
const handleGetAllSubscriber =  async (req, res)=>{
  try {
    const subscribers = await Subscriber.find({})
    return res.status(200).json({success: true, subscribers})
  } catch (error) {
    res.status(500).json({
      success : false,
      error:error.message
    })
  }
}

// Retrieve subscribers data which include name and subscribedChannel
const handleGetSubscriberByName = async(req,res)=>{
  try {
    const subscriber = await Subscriber.find({},
      {_id:0, name:1, subscribedChannel:1}
    )
    return res.status(200).json({
      success:true,
      subscriber
    })
  } catch (error) {
    res.status(500).json({
      success : false,
      error:error.message
    })
  }
}

// Retrieve specific subscriber by Id
const handleGetSubscriberById = async (req, res) => {
  try {
      const id = req.params.id;
      const subscriber = await Subscriber.findById(id);
      
      if (!subscriber) {
          return res.status(404).json({ error: 'Subscriber not found' });
      }
      
      return res.status(200).json({success:true, subscriber});
  } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Adding New Subscriber
const handleAddSubscriber = async (req, res) => {
  try {
      const newSubscriber = new Subscriber(req.body);
      await newSubscriber.save();
      res.status(200).json({
          success: true,
          newSubscriber,
          message: "New subscribed data saved successfully",
      });
  } catch (error) {
      console.error("Error saving new subscriber:", error);
      res.status(500).json({
          success: false,
          message: "Failed to save new subscriber data",
          error: error.message
      });
  }
};



//To Updating an exiting Subscriber
const handleUpdateSubscriber = async (req, res)=>{
  try{
    const id = req.params.id
    const updatedSubsriber = await Subscriber.findByIdAndUpdate(id, req.body)
    if(!updatedSubsriber){
      return res.status(404).json({success: false, err :"Subscriber not Found"})
    }
    return res.json({success:true,
    updatedSubsriber,
    massage:"Subscriber Updated Successfully"
  })
  }catch(error){
    res.status(400).json({
      success :false,
      error : error.massage
    })
  }
}


// To Deleting an exiting Subscriber
const hanndleDeleteSubscriber = async(req, res)=>{
  try {
    const id= req.params.id
    const deletedSubscriber = await Subscriber.findByIdAndDelete(id)
    if(!deletedSubscriber){
      return res.status(404).json({
        success:false,
        massage : "Subscriber not found"
      })
    }
    return res.json({success : true, massage: "Deleted Successfully"})
  } catch (error) {
     res.status(500).json({
      success:false,
      error : error.massage
     })
  }
}






module.exports = {
  handleGetAllSubscriber,
  handleGetSubscriberByName,
  handleGetSubscriberById,
  handleAddSubscriber,
  handleUpdateSubscriber,
  hanndleDeleteSubscriber

}