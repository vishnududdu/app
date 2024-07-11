// const Habit = require('../models/habit');
import { Habit } from "../models/habit.js";

export const getHabits = async (req, res) => {
    const habits = await Habit.find({});
    res.render('index', { habits });
};

export const addHabit = async (req, res) => {
    const newHabit = new Habit({
        name: req.body.name,
        track: {}
    });
    await newHabit.save();
    res.redirect('/');
};

export const updateHabitStatus = async (req, res) => {
    const { habitId, date, status } = req.body;
    const habit = await Habit.findById(habitId);
    habit.track.set(date, status);
    await habit.save();
    res.redirect('/');
};
