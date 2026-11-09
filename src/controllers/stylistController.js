//Importing the stylist data that our API will work with
import stylists from "../data/stylists.js";

//Returns every stylist in the lists.
export function getAllStylists(req, res) {
    res.status(200).json({
        data: stylists
    });
}

//Finds and returns one stylist using the ID from the URL
export function getStylistById(req, res) {
    const id = Number(req.params.id);
    const stylist = stylists.find((stylist) => stylist.id === id);

    //If the ID does not match the ID from the URL will return Stylist not Found
    if (!stylist) {
        return res.status(404).json({
            error: {
                code: "NOT_FOUND",
                message: "Stylist not found."
            }
        });
    }

    //Creates a new stylist using the JSON sent in the request body
    res.status(200).json({
        data: stylist
    });
}

export function createStylist(req, res) {
    const { name, location, specialties, bio } = req.body;


    //Name, location, and specialty is required to making the stylist
    if (!name || !location || !Array.isArray(specialties)) {
        return res.status(400).json({
            error: {
                code: "INVALID_REQUEST",
                message: "Name, location, and specialties are required."
            }
        });
    }
    //Creates a new ID by finding the largest current ID and adding 1
    const newStylist = {
        id: stylists.length > 0
            ? Math.max(...stylists.map((stylist) => stylist.id)) + 1
            : 1,
        name,
        location,
        specialties,
        bio: bio || ""
    };
    //Adds the new stylist to our temporary data
    stylists.push(newStylist);

    res.status(201).json({
        data: newStylist
    });
}

//Updates an existing stylist using the fields sent in the request
export function updateStylist(req, res) {
    const id = Number(req.params.id);
    const stylist = stylists.find((stylist) => stylist.id === id);

    //Return 404 if the stylist doesn't exist
    if (!stylist) {
        return res.status(404).json({
            error: {
                code: "NOT_FOUND",
                message: "Stylist not found."
            }
        });
    }

    const { name, location, specialties, bio } = req.body;

    //Specialties must be in an array if it is being updated
   if (specialties !== undefined && !Array.isArray(specialties)) {
        return res.status(400).json({
            error: {
                code: "INVALID_REQUEST",
                message: "Specialties must be an array."
            }
        });
    }

   //Only updates fields that were actually sent
    if (name !== undefined) stylist.name = name;
    if (location !== undefined) stylist.location = location;
    if (specialties !== undefined) stylist.specialties = specialties;
    if (bio !== undefined) stylist.bio = bio;

    res.status(200).json({
        data: stylist
    });
}

//Deletes stylist using the ID from the URL
export function deleteStylist(req, res) {
    const id = Number(req.params.id);
    const stylistIndex = stylists.findIndex((stylist) => stylist.id === id);

    //Return 404 if the stylist doesn't exist
    if (stylistIndex === -1) {
        return res.status(404).json({
            error: {
                code: "NOT_FOUND",
                message: "Stylist not found."
            }
        });
    }

    //Removes 1 stylist from the array
    stylists.splice(stylistIndex, 1);

    //Successful deletion.
    // 204 means the delete work and no response body needed
    res.status(204).send();
}
