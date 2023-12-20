const router = require("express").Router();
const {
  AddHeadExpense,
  ExpenseHeadById,
  UpadateHeadExpense,
  DeleteById,
 GetAllExpenseHead,
} = require("../../Controllers/ExpensesControllers/ExpenseHeadControllers");
const {
  AddCollection,
  GetAllCollections,
  DeleteCollectionByID,
  DeletaAllCollections,
  UpdateCollectionData,
} = require("../../Controllers/ExpensesControllers/ExpenseCollectionControllers");
const {
  AddExpense,
  GetAllExpense,
  DeleteExpById,
  DeleteAllExpenses,
  UpdateExpenseById,
} = require("../../Controllers/ExpensesControllers/AddExpenseController");

// Expense Head Api
router.post("/expense-head/add", AddHeadExpense);
router.get("/expense-head/:id", ExpenseHeadById);
router.get("/expense-head", GetAllExpenseHead);
router.put("/expense-head/:id", UpadateHeadExpense);
router.delete("/expense-head/:id", DeleteById);
// delte all the expense head
// router.delete("/deleteall", DeletaAll);

// collection Operation Apis
router.post("/addcollection", AddCollection);
// getAll the collection
router.get("/getallcollection", GetAllCollections);
// update the collection data
router.patch("/updatecollection", UpdateCollectionData);
// delete the collection by id
router.get("/deletecollection/:id", DeleteCollectionByID);
// delete all the collections
router.delete("/deleteallcollection", DeletaAllCollections);

// Add Expenses Apis
router.post("/addexpense", AddExpense);
// get the Expenses
router.get("/getallexpenses", GetAllExpense);
// delete by id
router.get("/deleteexpense/:id", DeleteExpById);
// delete all
router.get("/deleteallexpense", DeleteAllExpenses);
// update the expense
router.patch("/updateexpense", UpdateExpenseById);

module.exports = router;
