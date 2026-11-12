//express router lets us keep the stylist seperate from the app.js
import express from "express";

//importing the controller functions that handle each request
import {
    getAllStylists,
    getStylistById,
    createStylist,
    updateStylist,
    deleteStylist
} from "../controllers/stylistsController.js";

const router = express.Router();

//GET /api/stylists
//Retuns all stylists
router.get("/", getAllStylists);

//GET /apit/stylists/:id
//Returns stylists by their ID
router.get("/:id", getStylistById);

//POST /api/stylists
//Creates a new stylist
router.post("/", createStylist);

//PATCH /api/stylists
//Updates an existing stylist
router.patch("/:id", updateStylist);

//DELETE /api/stylists
//Deletes a stylist
router.delete("/:id", deleteStylist);

//Make the route available to app.js
export default router;