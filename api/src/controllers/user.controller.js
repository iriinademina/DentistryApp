const service = require('../services/user.service')

async function create (req, res) {
    res.send(await service.create(req.body))
  }

async function getUser (req, res) {
  console.log('req', req)

 res.send(await service.getUserById(req.params.id))
}

  module.exports = {
    create,
    getUser
  }
  