import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// import '../index.css'
export default function Header(props) {
    return (
        <div >
            <nav className="bg-dark navbar navbar-expand-lg" style={{
                position: 'fixed',
                width: '100%',
                zIndex: 1000,
                fontSize: '25px',
                fontWeight: '700',
                padding: '1.0rem 0'
            }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ color: 'white' }} >{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: '#ef0f0f'  }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white' }}>Home</Link>
                                {/* <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Home</a> */}
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to='/to-do' style={{ color: 'white' }}>Todos</Link>
                                {/* <a className="nav-link" href="#todos-section" style={{ color: 'white' }}>Todos</a> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{ color: 'white' }}>About</Link>
                                {/* <a className="nav-link"  href="about"style={{ color: 'white' }}>About</a> */}
                            </li>
                        </ul>
                        {props.searchBar ? <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> : ""}
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    title: "The title is added here",
    searchBar: true
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    searchBar: PropTypes.bool
}
// This ensures that the title prop is not only expected to be of type string but also is required for the Header component to function properly.