import { expect, test, vi } from 'vitest'
import stylists from './src/data/stylists.js'
import { getAllStylists } from './src/controllers/stylistController.js'

test('Returns every stylist in the lists', () => {
  const res = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
  }

  getAllStylists({}, res)

  expect(res.status).toHaveBeenCalledWith(200)
  expect(res.json).toHaveBeenCalledWith({ data: stylists })
})
