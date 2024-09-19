const prisma = require('../models/prismaClient');

const createData = async (req, res) => {
  try {
    const { link, description, userName } = req.body.userData;

    if (!link || !description || !userName) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    

    const newData = await prisma.userData.create({
      data: {
        link,
        description,
        userName,
      },
    });

    res.status(201).json({ id: newData.id });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
};

// Get data based on ID
const getData = async (req, res) => {
  try {
    const { id } = req.body.userData;

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }

    const data = await prisma.userData.findUnique({
      where: { id: (id) },
    });

    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

module.exports = { createData, getData };
