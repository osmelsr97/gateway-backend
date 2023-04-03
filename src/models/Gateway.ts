import { model, Schema } from 'mongoose'
import { IGateway } from 'types'
import { ASSOCIATED_DEVICE_LIMIT, hasExceededLimit } from '@utils/error'
import { DeviceModel, DeviceSchema } from '@models/Devices'

const GatewaySchema = new Schema<IGateway>({
  name: { type: String, required: true },
  ipv4: { type: String, required: true },
  associatedDevices: {
    type: [DeviceSchema],
    ref: DeviceModel,
    required: true,
    validate: [hasExceededLimit, `{PATH} exceeds the limit of ${ASSOCIATED_DEVICE_LIMIT}`]
  }
})

export const GatewayModel = model('Gateway', GatewaySchema)
