import { Router } from 'express'
import TaskController from './app/controllers/TaskController'

const routes = Router()

routes.get('/tasks', TaskController.index)
routes.get('/tasks/:id', TaskController.find)

export default routes
