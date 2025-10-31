import { Router } from "express";
import { ListAllModels } from "../../controllers/models/models.controller";
const router = Router();

// get all models info
router.get("/models", ListAllModels);

export default router;
