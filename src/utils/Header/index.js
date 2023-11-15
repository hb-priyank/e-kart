import Link from "next/link";
import { appRoutes } from "../globalContants";

export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" href={appRoutes.HOME}>Eshop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${'active'}`} aria-current="page" href={appRoutes.HOME}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={appRoutes.ABOUTUS}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={appRoutes.PRICING}>Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <Link className="mx-2" href={appRoutes.LOGIN}>Login</Link>
          <Link className="mx-2" href={appRoutes.SIGNUP}>SignUp</Link>
        </div>
      </div>
    </header>
  )
}