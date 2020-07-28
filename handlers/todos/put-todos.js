const todoModels = require("../../db/models/todos.js")

function putTodo(req, res, next) {
    // add error handling
    const { users_id, body } = req
    const {id, todo, completed} = body
    if (!(id && todo && completed)) {
        const err = new Error("id, todo content and completed status are required.")
        err.code = 400
        return next(err)
    }
    todoModels.putTodo({...body, users_id})
        .then(() => {
            res.status(200).send()
        })
        .catch(next)
}

module.exports = putTodo