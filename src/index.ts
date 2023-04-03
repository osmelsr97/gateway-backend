import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { initializeDB } from '@config/database'

import gatewayRouter from '@routes/gateway'

dotenv.config({})
const PORT = +(process.env.SERVER_PORT as string)
const app = express()
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3001' }))

/**
 * Setup Database
 */
initializeDB()

/**
 * Setup Routers
 */
app.use('/api/gateway', gatewayRouter)

/**
 * Setup Server
 */
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
