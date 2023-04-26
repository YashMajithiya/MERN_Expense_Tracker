const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://yash:vzo1W3CUwVDCh5lK@crud.5tsu0wo.mongodb.net/Expense?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`DB connected Successfully`);
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
