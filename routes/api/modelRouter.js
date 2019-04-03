const router = require("express").Router();
const logic = require("../../middleware/logic");



// Matches with "/api/advertisements"

router.route("/")
  .get((req, res) => {
   logic.doSomething()
      .then(dbresults => {
        res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  // router.route("/")
  // .post((req, res) => {
  //   advertisements.create(req.body)
  //     .then(dbresults => res.json(dbresults))
  //     .catch(err => res.status(422).json(err))
  // });

  // router.route("/:company")
  // .get((req, res) => {
  //   model.findByCompany(req.params.company)
  //   .then(dbresults => {
  //     res.json(dbresults)})
  //     .catch(err => res.status(422).json(err))
  // });

  // router.route("/:company")
  // .put((req, res) => {
  //   model.update(req.params.company, req.body)
  //     .then(dbresults => res.json(dbresults))
  //     .catch(err => res.status(422).json(err))
  // });

  // router.route("/:company")
  // .delete((req, res) => {
  //   model.remove(req.params.company)
  //     .then(dbresults => res.json(dbresults))
  //     .catch(err => res.status(422).json(err))
  // });

  // router.route("/keywords")
  // .get((req, res) => {
  //   model.findAll()
  //     .then(dbresults => {
  //       res.json(dbresults)})
  //     .catch(err => res.status(422).json(err))
  // });


module.exports = router;





