import Board from "../models/Board.js";


// CREATE BOARD

export const createBoard = async(req,res)=>{

    try{

        const {
            title,
            description
        } = req.body;


        const board = await Board.create({

            title,
            description,

            owner:req.user.id,

            members:[
                req.user.id
            ]

        });


        res.status(201).json(board);


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// GET ALL BOARDS OF USER

export const getBoards = async(req,res)=>{

    try{

        const boards = await Board.find({

            members:req.user.id

        });


        res.json(boards);


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};