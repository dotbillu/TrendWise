
import mongoose, { Document, Schema } from 'mongoose';

export interface ITrend extends Document {
  title: string;
  url: string;
  description: string;
  createdAt: Date;
}

const TrendSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  url: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now, expires: '1h' }, // Automatically delete after 1 hour
});

export default mongoose.models.Trend || mongoose.model<ITrend>('Trend', TrendSchema);
