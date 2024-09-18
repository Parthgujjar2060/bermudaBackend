const prisma = require('../models/prismaClient');

const createData = async (req, res) => {
  try {
    const { destination, description, username } = req.body;
    const newData = await prisma.userData.create({
      data: {
        destination,
        description,
        username,
      },
    });
    res.status(201).json({ id: newData.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data' });
  }
};

const getData = async (req, res) => {
  try {
    res.status(200).json({ data: 'Data fetched' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

module.exports = { createData, getData };