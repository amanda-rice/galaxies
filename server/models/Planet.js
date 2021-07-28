import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Planet = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, enum: ['terrestrial', 'gas giants', 'dwarfs'] },
    starId: { type: ObjectId, ref: 'Star' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Planet
