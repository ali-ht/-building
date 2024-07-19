import mongoose from "mongoose";
import User from "../models/User.js";
import { errorHandler, getIdByToken } from "./auxiliary.service.js";
import Task from "../models/Task.js";

const getUser = async (req, res) => {
    const userId = await getIdByToken(req.body.token)
    const foundedUser = await User.findById(userId)
    res.send(foundedUser)
}

const updateUser = async (req, res) => {
    try {
        const filter = {_id: req.body.body.id}
        const update = (req.body.body)
        delete(update.id)
        await User.findByIdAndUpdate(filter, update)
        const updatedUser = await User.findOne(filter)
        res.send({
            type: "UPDATE_USER",
            body:{updatedUser}
        })
        
    } catch (error) {
        res.send({
            type: "ERROR",
            body: {txt : errorHandler(error)}
        })   
    }
}

const searchUsers  = async (req, res) => {
    const value = req.body.body.value
    let users = await User.find({ $or: [
        {firstname: { "$regex": value, "$options": "i" } },
        {lastname: { "$regex": value, "$options": "i" }},
        {username:{ "$regex": value, "$options": "i" }}
    ] })

    users = users.map(user => {
        return {
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username
        }})
    
    res.send({
        type : "SEARCH_USERS",
        body: users
    })
}

const getUserTasks = async (req, res) => {
    const userId = req.body.body.userId
    const tasks = await Task.find({ownerId : userId})
    const tasks2 = await Task.find({assignees : {"$in" : [userId]}})


}


export {
    getUser,
    updateUser,
    searchUsers,
    getUserTasks
}