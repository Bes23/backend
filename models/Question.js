const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true},
    answers: [
      {
        answerText: { type: String, required: true },
        isAnswerCorrect: { type: Boolean, required: true },
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.mongoose.model('Question', questionSchema)
