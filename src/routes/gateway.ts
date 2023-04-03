import express from 'express'
import { IGateway } from 'types'
import { handleError as handleResponseError } from '@utils/error'
import { create, Delete, findAll, findByID, update } from '@services/gateway'

const router = express.Router()

/**
 * Get All gateways
 */
router.get('/', (_, res) => {
  void (async () => {
    try {
      const gateways = await findAll()
      res.status(200).json(gateways)
    } catch (error) {
      res.status(400).json(handleResponseError(error))
    }
  })()
})

/**
 * Get gateway by ID
 */
router.get('/:id', (req, res) => {
  void (async () => {
    const gatewayId = req.params.id

    try {
      const gateways = await findByID(gatewayId)
      res.status(200).json(gateways)
    } catch (error) {
      res.status(400).json(handleResponseError(error))
    }
  })()
})

/**
 * Create gateway
 */
router.post('/', (req, res) => {
  void (async () => {
    const newGateway: IGateway = req.body.gateway
    console.log(req.body)

    try {
      const result = await create(newGateway)
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json(handleResponseError(error))
    }
  })()
})

/**
 * Update gateway
 */
router.patch('/', (req, res) => {
  void (async () => {
    try {
      const gatewayToUpdate: IGateway = req.body.gateway
      if (!gatewayToUpdate?._id) throw new Error('Invalid data! Please provide _id parameter')

      const result = await update(gatewayToUpdate)
      res.status(200).json(result)
    } catch (error) {
      console.log(handleResponseError(error))
      res.status(400).json(handleResponseError(error))
    }
  })()
})

/**
 * Delete gateway
 */
router.delete('/:id', (req, res) => {
  void (async () => {
    const gatewayId = req.params.id
    try {
      const result = await Delete(gatewayId)
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json(handleResponseError(error))
    }
  })()
})

export default router
