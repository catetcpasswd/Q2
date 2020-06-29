module.exports = {
  create: function(req, res) {
    console.log("POST /auth ");
    res.status(201).send();
  },

  getAll: function(req, res) {
    console.log("GET /auth");
    res.json([{ id: 1, name: "QA Test App" }]);
  },

  getById: function(req, res) {
    console.log("GET /auth/123");
    res.json({ id: 1, name: "QA Test App" });
  }
};
