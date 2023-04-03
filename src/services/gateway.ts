import { IGateway } from 'types'
import { GatewayModel } from '@models/Gateway'

export const findAll = async (): Promise<IGateway[]> => {
  return await GatewayModel.find()
}

export const findByID = async (_id: string): Promise<IGateway | null> => {
  return await GatewayModel.findOne({ _id })
}

export const create = async (gateway: IGateway): Promise<IGateway> => {
  const newGateway = new GatewayModel(gateway)
  return await newGateway.save()
}

export const update = async ({ _id, ...restProps }: IGateway): Promise<IGateway | null> => {
  return await GatewayModel.findByIdAndUpdate(_id, { ...restProps })
}

export const Delete = async (_id: string): Promise<IGateway | null> => {
  return await GatewayModel.findOneAndRemove({ _id })
}
