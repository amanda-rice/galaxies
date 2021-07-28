import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class MoonsService {
  async getAll(query = {}) {
    return await dbContext.Moons.find(query)
  }

  async getById(id) {
    const moon = await dbContext.Moons.findById(id)
    if (!moon) {
      throw new BadRequest('Invalid Id')
    }
    return moon
  }

  async create(body) {
    return await dbContext.Moons.create(body)
  }
}

export const moonsService = new MoonsService()
