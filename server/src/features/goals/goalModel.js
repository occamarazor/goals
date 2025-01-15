import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    duration: {
      type: String,
      required: [true, 'Please add duration'],
    },
  },
  {
    timestamps: true,
  },
);

const GoalModel = mongoose.model('Goal', goalSchema);

export default GoalModel;
