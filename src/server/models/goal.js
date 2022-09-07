import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    duration: {
      type: String,
      required: [true, 'Please add a duration value'],
    },
  },
  {
    timestamps: true,
  },
);

const GoalModel = mongoose.model('Goal', goalSchema);

export default GoalModel;
