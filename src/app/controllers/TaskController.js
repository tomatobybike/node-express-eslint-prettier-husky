import Fake from '../../data/TaskFake'

const data = Fake

const TaskController = {
  index: (req, res) => {
    return res.json(data)
  },
  find: (req, res) => {
    const { id } = req.params

    return res.json(data.filter(value => value.id === parseInt(id, 10)))
  }
}

export default TaskController
