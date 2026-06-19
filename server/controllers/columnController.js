import Column from "../models/Column.js";


// CREATE COLUMN

export const createColumn = async(req,res)=>{

try{

const {
title,
boardId
}=req.body;


const column = await Column.create({

title,

board:boardId

});


res.status(201).json(column);


}
catch(error){

res.status(500).json({
message:error.message
});

}

};




// GET COLUMNS

export const getColumns = async(req,res)=>{

try{

const columns =
await Column.find({
board:req.params.boardId
})
.sort("order");


res.json(columns);


}
catch(error){

res.status(500).json({
message:error.message
});

}

};