import { model, Schema } from 'mongoose'
import { IDevice } from 'types'

export const DeviceSchema = new Schema<IDevice>({
  vendor: { type: String, required: true },
  createDate: { type: Date, required: true, default: Date.now() },
  status: { type: Boolean, required: true }
})

export const DeviceModel = model('Devices', DeviceSchema)
