import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['buy', 'sell'] },
    car_code: String,
    company: String,
    model: String,
    price: Number,
    timestamp: Number,
    id: { type: Number, autoIncrement: true, unique: true, index: true },
  },
  { timestamps: false, versionKey: false }
);

carSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret._id;
  },
});

export default mongoose.model('Car', carSchema);
