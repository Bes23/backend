const Question = require('../models/Question')
const router = require('express').Router()

// Create question

router.post('/questions', async (req, res) => {
  const newQuestion = new Question(req.body)
  try {
    const savedQuestion = await newQuestion.save()
    res.status(200).json(savedQuestion)
  } catch (error) {
    res.status(500).json(error)
  }
})

// Get all questions

router.get('/questions', async (req, res) => {
  const qNew = req.query.new
  try {
    let questions
    if (qNew) {
      questions = await Question.find().sort({ createdAt: -1 }).limit(5)
    } else {
      questions = await Question.find()
    }
    res.status(200).json(questions)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
