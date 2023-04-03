import { GatewayModel } from '@models/Gateway'
import { create, Delete, findAll, findByID, update } from '@services/gateway'
import { ASSOCIATED_DEVICE_LIMIT, handleError } from '@utils/error'
import { IDevice, IGateway } from 'types'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mockingoose = require('mockingoose')

beforeEach(() => {
  mockingoose.resetAll()
})

const doc: IGateway = {
  _id: '6429c55e450c26382f97f239',
  name: 'MyFirstGateway',
  ipv4: '127.0.0.1',
  associatedDevices: [
    {
      vendor: 'Apple',
      status: true
    }
  ]
}

describe('Test mongoose gateway model', () => {
  it('should return the all gateway available', async () => {
    mockingoose(GatewayModel).toReturn(doc, 'find')
    const response = await findAll()
    expect(JSON.parse(JSON.stringify(response))).toMatchObject(doc)
  })

  it('should return a gateway by id', async () => {
    mockingoose(GatewayModel).toReturn(doc, 'findOne')
    const response = await findByID('6429c55e450c26382f97f239')
    expect(JSON.parse(JSON.stringify(response))).toMatchObject(doc)
  })

  it('should update the gateway', async () => {
    mockingoose(GatewayModel).toReturn(doc, 'findOneAndUpdate')

    const response = await update({
      ...doc, name: 'Acer'
    })
    expect(JSON.parse(JSON.stringify(response))).toMatchObject(doc)
  })

  it('should created gateway', async () => {
    mockingoose(GatewayModel).toReturn(doc, 'save')

    const response = await create(doc)
    expect(JSON.parse(JSON.stringify(response))).toMatchObject(doc)
  })

  it('should return an error when creating the gateway for exceeding the limit of 10 associated devices', async () => {
    const associatedDevices: IDevice[] = Array
      .from({ length: ASSOCIATED_DEVICE_LIMIT + 1 })
      .map((_, index) => ({ vendor: `Test${index}`, status: true }))

    const { _id, associatedDevices: _associatedDevices, ...restProps } = doc

    const newDoc = { ...restProps, associatedDevices }

    try {
      await create(newDoc)
    } catch (error) {
      expect(handleError(error).message)
        .toBe(`Gateway validation failed: associatedDevices: associatedDevices exceeds the limit of ${ASSOCIATED_DEVICE_LIMIT}`)
    }
  })

  it('should deleted a gateway ', async () => {
    mockingoose(GatewayModel).toReturn(doc, 'findOneAndRemove')

    const response = await Delete('6429c55e450c26382f97f239')
    expect(JSON.parse(JSON.stringify(response))).toMatchObject(doc)
  })
})
