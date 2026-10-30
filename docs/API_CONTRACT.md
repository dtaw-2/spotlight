# Spotlight API Contract

## Primary Resource: Stylists

The primary resource for Spotlight is the hairstylist profile.

A stylist profile will contain information such as the stylist's name, location, specialties, and bio. Customers will eventually use the React front end to search for stylists and view their information.

For Milestone 2, stylist data will be stored in memory or in a JSON file instead of a database.

### Example Stylist

```json
{
  "id": 1,
  "name": "Berry Hands",
  "location": "Sharon, MA",
  "specialties": ["Braids"],
  "bio": "Protective styling and braiding services."
}

## GET /api/stylists

Returns a list of all stylists.

### Request

No request body is required.

### Success Response

**Status:** `200 OK`

```json
{
  "data": [
    {
      "id": 1,
      "name": "Berry Hands",
      "location": "Sharon, MA",
      "specialties": ["Braids"],
      "bio": "Protective styling and braiding services."
    }
  ]
}
{
  "error": {
    "code": "SERVER_ERROR",
    "message": "Unable to retrieve stylists."
  }
}
## GET /api/stylists/:id

Returns one stylist based on the stylist's ID.

### Request

No request body is required.

The stylist ID is included in the URL.

Example:

`GET /api/stylists/1`

### Success Response

**Status:** `200 OK`

```json
{
  "data": {
    "id": 1,
    "name": "Berry Hands",
    "location": "Sharon, MA",
    "specialties": ["Braids"],
    "bio": "Protective styling and braiding services."
  }
}
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Stylist not found."
  }
}
## POST /api/stylists

Creates a new stylist.

### Request

**Content-Type:** `application/json`

```json
{
  "name": "Nia Styles",
  "location": "Boston, MA",
  "specialties": ["Braids", "Natural Hair"],
  "bio": "Braiding and natural hair services."
}
{
  "data": {
    "id": 2,
    "name": "Nia Styles",
    "location": "Boston, MA",
    "specialties": ["Braids", "Natural Hair"],
    "bio": "Braiding and natural hair services."
  }
}
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Name, location, and specialties are required."
  }
}
## PATCH /api/stylists/:id

Updates one or more fields for an existing stylist.

### Request

**Content-Type:** `application/json`

Example:

```json
{
  "location": "Cambridge, MA",
  "specialties": ["Braids", "Locs"]
}
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Stylist not found."
  }
}
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Stylist not found."
  }
}
## DELETE /api/stylists/:id

Deletes an existing stylist.

### Request

No request body is required.

The stylist ID is included in the URL.

Example:

`DELETE /api/stylists/1`

### Success Response

**Status:** `204 No Content`

No response body is returned.

### Error Response

**Status:** `404 Not Found`

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Stylist not found."
  }
}
