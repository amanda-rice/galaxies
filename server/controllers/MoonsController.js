import { moonsService } from '../services/MoonsService'
import BaseController from '../utils/BaseController'

export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
  }

  async create(req, res, next) {
    try {
      const moons = await moonsService.create(req.body)
      res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const moon = await moonsService.getById(req.params.id)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const moons = await moonsService.getAll(req.query)
      res.send(moons)
    } catch (error) {
      next(error)
    }
  }
}
