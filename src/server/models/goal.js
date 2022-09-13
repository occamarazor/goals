import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
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
