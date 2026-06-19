import express from "express";


import {

createTask,
getTasks,
updateTask,
deleteTask

}
from "../controllers/taskController.js";


import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();



// CREATE TASK

router.post(
"/",
authMiddleware,
createTask
);



// GET TASKS

router.get(
"/:columnId",
authMiddleware,
getTasks
);



// UPDATE TASK

router.put(
"/:id",
authMiddleware,
updateTask
);



// DELETE TASK

router.delete(
"/:id",
authMiddleware,
deleteTask
);



export default router;