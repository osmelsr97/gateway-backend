import { IDevice, TError } from 'types'

export const ASSOCIATED_DEVICE_LIMIT = 10

export const handleError = (error: unknown): TError => ({ message: (error as TError).message })

export const hasExceededLimit = (associatedDevices: IDevice[]): boolean => associatedDevices.length <= ASSOCIATED_DEVICE_LIMIT
