import { Link } from "react-router-dom";
export const Menu = ()=>{
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                All User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/thanks">
                Thanks for watching
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}