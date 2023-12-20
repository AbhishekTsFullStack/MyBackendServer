const Joi = require("joi");
const HeadExpModel = require("../../Models/ExpenseModels/AddHeadExpenseModel");
const validation = Joi.object({
  name: Joi.string().required(),
});
const AddHeadExpense = async (req, res) => {
  const formData = req.body;
  try {
    const { error } = validation.validate(formData);
    let errors = [];
    if (error) {
      error.details.map((item) => {
        errors.push({ [item.path]: item.message.replace(/['"]/g, "") });
      });
    }
    if (error) {
      return res.status(422).json({errors});
    }
    const isAdded = await HeadExpModel.findOne({ name: formData.name });
    if (isAdded)
      return res
        .status(422)
        .json({ error: [{ name: "Name is Already Registered" }] });
    const result = await new HeadExpModel(formData).save();
    if (!result)
      return res
        .status(422)
        .json({ error: true, message: "Something went wrong. Try Again" });
    res.status(200).json({
      error: false,
      data: result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
const ExpenseHeadById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await HeadExpModel.findById(id);
    if (!data) {
      return res.status(404).json({error:"No Data Found"});
    } else {
      res.status(200).json({error:false,data});
    }
  } catch (error) {
    res.status(500).json({ error: error }); 
  }
};

const GetAllExpenseHead = async (req, res) => {
  try {
    const result = await HeadExpModel.find();
    if (!result)
      return res.status(404).json({ error: true, message: "No Data Found" });

    res.status(200).json({ error: false, data: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const UpadateHeadExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const formData = req.body;
    const { error } = validation.validate(formData);
    let errors = [];
    if (error) {
      error.details.map((item) => {
        errors.push({ [item.path]: item.message.replace(/['"]/g, "") });
      });
    }
    if (error) {
      return res.status(422).json({errors});
    }
    const isAdded = await HeadExpModel.findOne({ name: formData.name });
    if (isAdded)
      return res
        .status(422)
        .json({ error: [{ name: "Name is Already Registered" }] });
    const result = await HeadExpModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!result)
      return res.status(422).json({ error:"NO Data Found" });

    res.status(200).json({ error: false, data: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const DeleteById = async (req, res) => {
  const id = req.params.id;
  HeadExpModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ error: false, message: "Deleted Successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error:error });
    });
};

// delete all the expenses head
// const DeletaAll = async (req, res) => {
//   // delete the data

//   HeadExpModel.deleteMany({})
//     .then(() => {
//       res.status(200).json({ error: false, message: "Deleted Successfully" });
//     })
//     .catch((error) => {
//       res.status(500).json({ error: true, error });
//     });
// };

module.exports = {
  AddHeadExpense,
  ExpenseHeadById,
  DeleteById,
  GetAllExpenseHead,
  UpadateHeadExpense,
};
