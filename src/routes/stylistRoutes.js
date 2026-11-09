//express router lets us keep the stylist seperate from the app.js
import { Router } from "express";

//importing the controller functions that handle each request
import {
    getAllStylists,
    getStylistById,
    createStylist,
    updateStylist,
    deleteStylist
} from "../controllers/stylistsController.js";

const router = Router();

//All stylists
router.get("/", getAllStylists);

//Returns stylists by their ID
router.get("/:id", getStylistById);

//Creates a new stylist
router.post("/", createStylist);

//Updates an existing stylist
router.patch("/:id", updateStylist);

//Deletes a stylist
router.delete("/:id", deleteStylist);

export default router;
