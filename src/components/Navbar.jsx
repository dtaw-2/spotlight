import { NavLink } from "react-router-dom";

export default function navbar() {
  return (
  <header>
      <div class="navbar sticky">
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
                      autocomplete="off"
                      role="combobox"
                      aria-expanded="false"
                      aria-controls="search-results"
                      aria-autocomplete="list"
                      />
              <ul
                      id="search-results"
                      className="search-results"
                      role="listbox"
                      aria-label="Search results"
                      hidden
                      >
              </ul>
          </div>

          <nav className="nav-right" aria-label="login-register">
                  <NavLink to="/login" className="text-white">Login</NavLink>
              <button
                      className="btn btn-white rounded-xl border"
              >
                  <NavLink to="/register" className="text-black">Register</NavLink>
              </button>
          </nav>
      </div>
    </header>
  )

}
