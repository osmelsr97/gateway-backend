/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Env types
 */
namespace NodeJS {
  interface ProcessEnv {
    readonly DATABASE_URL: string
    readonly SERVER_PORT: string
  }
}

export interface IGateway {
  _id?: string
  name: string
  ipv4: string
  associatedDevices: IDevice[] | []
}

export interface IDevice {
  _id?: string
  vendor: string
  createDate?: Date
  status: boolean
}

export interface TError { message: string }
