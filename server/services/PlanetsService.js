import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PlanetsService {
  async create(body) {
    return await dbContext.Planets.create(body)
  }

  async getById(id) {
    const planet = await dbContext.Planets.findById(id)
    if (!planet) {
      throw new BadRequest('Invalid Id')
    }
    return planet
  }

  async getAll(query = {}) {
    return await dbContext.Planets.find(query)
  }
}

export const planetsService = new PlanetsService()
