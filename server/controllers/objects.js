const fs = require("fs");
const rawdata = fs.readFileSync("./assets/data/data.json");
const objects = JSON.parse(rawdata);

exports.getAllObjects = (req, res) => {
  if (req) {
    return res.status(200).json({
      message: "Objects are fetched",
      objectsData: objects
    });
  } else {
    res.status(404).json({
      message: "An Error occured!"
    });
  }
};
