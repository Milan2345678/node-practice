const getUser = (req, res) => {
  const userId = req.params.id;
  const role = req.query.role;

  res.json({ userId, role });
};

const postData = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "Name is required"
    });
  }

  await new Promise(resolve => setTimeout(resolve, 500));

  res.status(200).json({
    message: `Hello ${name}!`,
    status: "success"
  });
};

module.exports = { getUser, postData };