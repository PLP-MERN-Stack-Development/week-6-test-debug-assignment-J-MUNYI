import Bug from '../models/Bug.js';

// Get all bugs
export const getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a bug
export const createBug = async (req, res) => {
  try {
    const { title, description } = req.body;
    const bug = new Bug({ title, description });
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a bug status
export const updateBug = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedBug = await Bug.findByIdAndUpdate(id, { status }, { new: true });
    res.json(updatedBug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a bug
export const deleteBug = async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bug deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
