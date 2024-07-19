import app from '../app.js'
import {getUserTasks, getUser, updateUser , searchUsers} from "../services/user.service.js"

app.post('/users' , getUser)

app.post('/searchusers' , searchUsers)

app.put('/user', updateUser)

app.post('/usertasks' , getUserTasks)