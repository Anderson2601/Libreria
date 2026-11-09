import { Router } from "express";
import { GenersController } from "./geners.controller";
import { asyncHandler } from "../../shared/middlewares/asyncHandler";

const router = Router();
const controller = new GenersController();


router.post("/", asyncHandler(controller.create));
router.get("/", asyncHandler(controller.findAll));
router.put("/:id", asyncHandler(controller.update));
router.delete("/:id", asyncHandler(controller.delete));

export default router;
