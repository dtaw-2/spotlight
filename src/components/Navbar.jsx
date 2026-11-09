import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

const stylists = [
    {
        id: 1,
        name: "Berry Hands",
        location: "Sharon, MA",
        specialties: ["Braids"],
        profilePage: "profiles/berryhands.html"
    },
    {
        id: 2,
        name: "Miss Laverne's",
        location: "Boston, MA",
        specialties: ["Natural Hair", "Locks", "Braids"],
        profilePage:"profiles/misslavernes.html"
    },
    {
        id: 3,
        name: "Dane's Unisex Salon",
        location: "Cambridge, MA",
        specialties: ["Barber", "Braids", "Natural Hair", "Extensions", "Haircuts"],
        profilePage: "profiles/danesunisex.html"
    },

    {
        id: 4,
        name: "Professional Image Salon and Suites",
        location: "Worcester, MA",
        specialties: ["Bridal", "Color", "Natural Hair", "Extensions", "Haircuts"],
        profilePage: "profiles/professionalimage.html"
    },
    {
        id: 3,
        name: "Dream Cuts",
        location: "Cambridge, MA",
        specialties: ["Barber", "Haircuts"],
        profilePage: "profiles/dreamcuts.html"
    },

]
export default function navbar() {

  const [query, setQuery] = useState("");

    // Lowercase and trim the typed text
    const searchText = query.toLowerCase().trim();

    // Dropdown is open whenever there is text in the box
    const isOpen = searchText !== "";

    // Filter by name, location, or any specialty
    const filteredStylists = useMemo(() => {
      if (searchText === "") return [];

      return stylists.filter(
        (stylist) =>
          stylist.name.toLowerCase().includes(searchText) ||
          stylist.location.toLowerCase().includes(searchText) ||
          stylist.specialties.join(" ").toLowerCase().includes(searchText)
      );
    }, [searchText]);

  return (
    <header>
          <div className="navbar sticky">
            <nav className="nav-left" aria-label="Main">
              <b>Spotlight</b>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
            </nav>

            <div className="search-wrapper nav-center" role="search">
              <input
                type="text"
                id="stylist-search"
                placeholder="Search stylists or services..."
                className="input-control border"
                autoComplete="off"
                role="combobox"
                aria-expanded={isOpen}
                aria-controls="search-results"
                aria-autocomplete="list"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <ul
                id="search-results"
                className="search-results rounded-lg"
                role="listbox"
                aria-label="Search results"
                hidden={!isOpen}
              >
                {isOpen &&
                  (filteredStylists.length === 0 ? (
                    <li role="option" aria-disabled="true" aria-selected="false">
                      No stylists found
                    </li>
                  ) : (
                    filteredStylists.map((stylist) => (
                      <li key={stylist.id} role="option" aria-selected="false">
                        <a
                          href={stylist.profilePage}
                          onClick={() => setQuery("")}
                        >
                          <strong>{stylist.name}</strong>
                          <span>
                            {stylist.location} - {stylist.specialties.join(", ")}
                          </span>
                        </a>
                      </li>
                    ))
                  ))}
              </ul>
            </div>

            <nav className="nav-right" aria-label="login-register">
              <NavLink to="/login" className="text-white">
                Login
              </NavLink>
              <button className="btn btn-white rounded-xl border">
                <NavLink to="/register" className="text-black">
                  Register
                </NavLink>
              </button>
            </nav>
          </div>
        </header>
  )

}
