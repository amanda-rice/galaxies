import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxiesService {
  async getAll(query = {}) {
    return await dbContext.Galaxies.find(query)
  }

  async getById(id) {
    const galaxy = await dbContext.Galaxies.findById(id)
    if (!galaxy) {
      throw new BadRequest('Invalid Id')
    }
    return galaxy
  }

  async create(body) {
    return await dbContext.Galaxies.create(body)
  }
}

export const galaxiesService = new GalaxiesService()
