const create = (req, res) => {
  res.send({ message: "Create handler" });
};

const findOne = (req, res) => {
  res.send({ message: "Find one handler" });
};

const update = (req, res) => {
  res.send({ message: "Update handler" });
};

const remove = (req, res) => {
  res.send({ message: "Delete handler" });
};

const deleteAll = (req, res) => {
  res.send({ message: "Delete all handler" });
};

const findAllFavorite = (req, res) => {
  res.send({ message: "Find all favorite handler" });
};

export default {
  create,
  findOne,
  update,
  remove,
  deleteAll,
  findAllFavorite,
};

