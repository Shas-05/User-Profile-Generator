exports.generateProfile = (req, res) => {
  const { name, bio, image } = req.body;

  if (!name || !bio || !image) {
    return res.status(400).json({
      message: "All fields are required.",
    });
  }

  const profile = {
    name,
    bio,
    image,
  };

  res.status(200).json(profile);
};
