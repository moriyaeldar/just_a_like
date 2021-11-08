import { Router } from "express";
const router = Router();
const teamController = require("./teamController");

router.get("/", teamController.index);
router.get("/:id", teamController.show);
router.post("/", teamController.create);
router.delete("/:id", teamController.delete);
router.put("/:id", teamController.update);
router.get("/:uid", teamController.getAssociatedTeams);
router.get("/:pid", teamController.getAssociatedTeamsInProject);

module.exports = router;
