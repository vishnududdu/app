import express from "express";
// const express = require('express');
const router = express.Router();
import { getHabits,addHabit,updateHabitStatus } from "../controllers/habitController.js";
// const habitController = require('../controllers/habitController');

router.get('/', getHabits);
router.post('/add', addHabit);
router.post('/update',updateHabitStatus);

export default router;
