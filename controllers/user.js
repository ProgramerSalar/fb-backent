exports.home = (req, res) => {
  res.status(200).json({
    message: "user page",
    error: "error",
  });
};
