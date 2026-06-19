import express from "express";

import {
createColumn,
getColumns
}
from "../controllers/columnController.js";


import authMiddleware from "../middleware/authMiddleware.js";


const router=express.Router();



router.post(
"/",
authMiddleware,
createColumn
);



router.get(
"/:boardId",
authMiddleware,
getColumns
);



export default router;