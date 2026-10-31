import stylists from "../data/stylists.js";

export function getAllStylists(req, res) {
    res.status(200).json({
        data: stylists
    });
}

export function getStylistById(req, res) {
    const id = Number(req.params.id);
    const stylist = stylists.find((stylist) => stylist.id === id);

    if (!stylist) {
        return res.status(404).json({
            error: {
                code: "NOT_FOUND",
                message: "Stylist not found."
            }
        });
    }

    res.status(200).json({
        data: stylist
    });
}

export function createStylist(req, res) {
    const { name, location, specialties, bio } = req.body;

    if (!name || !location || !Array.isArray(specialties)) {
        return res.status(400).json({
            error: {
                code: "INVALID_REQUEST",
                message: "Name, location, and specialties are required."
            }
        });
    }

    const newStylist = {
        id: stylists.length > 0
            ? Math.max(...stylists.map((stylist) => stylist.id)) + 1
            : 1,
        name,
        location,
        specialties,
        bio: bio || ""
    };

    stylists.push(newStylist);

    res.status(201).json({
        data: newStylist
    });
}

export function updateStylist(req, res) {
    const id = Number(req.params.id);
    const stylist = stylists.find((stylist) => stylist.id === id);

    if (!stylist) {
        return res.status(404).json({
            error: {
                code: "NOT_FOUND",
                message: "Stylist not found."
            }
        });
    }

    const { name, location, specialties, bio } = req.body;

    if (specialties !== undefined && !Array.isArray(specialties)) {
        return res.status(400).json({
            error: {
                code: "INVALID_REQUEST",
                message: "Specialties must be an array."
            }
        });
    }

    if (name !== undefined) stylist.name = name;
    if (location !== undefined) stylist.location = location;
    if (specialties !== undefined) stylist.specialties = specialties;
    if (bio !== undefined) stylist.bio = bio;

    res.status(200).json({
        data: stylist
    });
}

export function deleteStylist(req, res) {
    const id = Number(req.params.id);
    const stylistIndex = stylists.findIndex((stylist) => stylist.id === id);

    if (stylistIndex === -1) {
        return res.status(404).json({
            error: {
                code: "NOT_FOUND",
                message: "Stylist not found."
            }
        });
    }

    stylists.splice(stylistIndex, 1);

    res.status(204).send();
}