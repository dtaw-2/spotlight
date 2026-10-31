import express from "express";
import {
    getAllStylists,
    getStylistById,
    createStylist,
    updateStylist,
    deleteStylist
} from "../controllers/stylistsController.js";

const router = express.Router();

router.get("/", getAllStylists);
router.get("/:id", getStylistById);
router.post("/", createStylist);
router.patch("/:id", updateStylist);
router.delete("/:id", deleteStylist);

export default router;