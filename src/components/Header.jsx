import React, { useContext } from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/AuthContextAPI'

const Header = (insideDashboard) => {
  const navigate = useNavigate()
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
  const logout = () =>{
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }
  return (
    <Navbar style={{zIndex:1}} className="border ronded position-fixed w-100">
      <Container>
        <Link to={'/'} style={{textDecoration:'none'}}>
        <Navbar.Brand style={{color:'white'}} className=' fw-bolder'>
        <i class="fa-brands fa-docker me-2"></i>
        Project Fair
          </Navbar.Brand>
          </Link>
          {
            insideDashboard &&
            <div className='ms-auto'>
             {
              isAuthorised &&
              <button onClick={logout} className='btn btn-link'>Logout<i className='fa-solid fa-right-from-bracket'></i></button>
             }
            </div>
          }
      </Container>
    </Navbar>
  )
}

export default Header