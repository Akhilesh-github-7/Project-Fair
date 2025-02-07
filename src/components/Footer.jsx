import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mt-5 shadow' style={{width:'100%' , height:'300px'}}>
      <div className='footer mt-5 container w-100'>
        <div className='d-flex justify-content-between'>
          {/* intro */}
          <div style={{width:'400px'}}>
            <h4 className='fw-bolder text-light'><i class="fa-brands fa-docker me-2"></i>
            Project Fair</h4>
            <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
            <h6>Code licensed MIT, docs CC BY 3.0.</h6>
            <h6>Currently v5.3.3.</h6>
          </div>
          {/* links */}
          <div className='d-flex flex-column'>
            <h5 className='fw-bold'>Links</h5>
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
            <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>Login Page</Link>
            <Link to={'/register'} style={{textDecoration:'none', color:'white'}}>Register Page</Link>
          </div>
          {/* guides */}
          <div className='d-flex flex-column'>
            <h5 className='fw-bold'>Guides</h5>
            <a href="https://react.dev/" style={{textDecoration:'none', color:'white'}} target="_blank">React</a>
            <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none', color:'white'}} target="_blank">React Bootstrap</a>
            <a href="https://www.npmjs.com/package/react-router-dom" style={{textDecoration:'none', color:'white'}} target="_blank">React Router</a>
          </div>
          {/* contacts */}
          <div className='d-flex flex-column'>
            <h5 className='fw-bold'>Contacts</h5>
            <div className="d-flex">
              <input type="text" placeholder='Enter your email here..' className='form-control me-2' />
              <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <a href="https://en.wikipedia.org/wiki/Twitter" style={{textDecoration:'none', color:'white'}} target="_blank"><i class="fa-brands fa-twitter"></i></a>
              <a href="https://www.instagram.com/" style={{textDecoration:'none', color:'white'}} target="_blank"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/" style={{textDecoration:'none', color:'white'}} target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com" style={{textDecoration:'none', color:'white'}} target="_blank"><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/" style={{textDecoration:'none', color:'white'}} target="_blank"><i class="fa-brands fa-github"></i></a>
              <a href="https://github.com/" style={{textDecoration:'none', color:'white'}} target="_blank"><i class="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>
        <p className='text-center mt-5'>Copyright &copy; Agust 2024 Batch. Project Fair Created with react </p>
      </div> 
    </div>
  )
}

export default Footer
