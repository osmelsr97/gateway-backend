import mongoose from 'mongoose'

export const initializeDB = (): void => {
  const DATABASE_URL = process.env.DATABASE_URL as string
  mongoose.connect(DATABASE_URL).then(() => {
    console.log('DB connected!')
  }).catch((error) => {
    console.error(error)
  })
}
