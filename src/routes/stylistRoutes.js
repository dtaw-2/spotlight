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
router.get("api/", getAllStylists);

//Returns stylists by their ID
router.get("api/:id", getStylistById);

//Creates a new stylist
router.post("api/", createStylist);

//Updates an existing stylist
router.patch("api/:id", updateStylist);

//Deletes a stylist
router.delete("api/:id", deleteStylist);

export default router;
