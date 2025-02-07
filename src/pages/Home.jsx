import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Img1 from '../assets/img1.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { getHomeProjectAPI } from '../services/allAPI'

const Home = () => {

const [allHomeProjects,setAllHomeProjects] = useState([])

const navigate = useNavigate()

useEffect(()=>{
  getAllHomeProjects()
},[])

const getAllHomeProjects = async ()=>{
  try{
    const result = await getHomeProjectAPI()
    if(result.status==200){
      setAllHomeProjects(result.data)
    }
  }catch(err){
    console.log(err);
    
  }
}

const handleProjects =()=>{
  if(sessionStorage.getItem("token")){
    navigate('/projects')
  }else{
    alert("Please login to get full access")
  }
}

  return (
    <>
    <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <h1 style={{fontSize:'60px'}}><i class="fa-brands fa-docker me-3">Project Fair</i></h1>
            <p style={{textAlign:'justify'}}>One Stop Destination for all software Development Projects.Where user can add and manage their projects.As well as access all projects available in our website.... what are you waiting for!!</p>
           {
            sessionStorage.getItem("token")?
             <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>
             :
             <Link to={'/login'} className='btn btn-warning'>START TO EXPLORE</Link>
           }

          </div>
          <div className='col-lg-6'>
            <img className='img-fluid' src={Img1} alt="landing" />

          </div>
        </div>
        
      </div>

    </div>
    <div className='mt-5 text-center'>
      <h1 className='mb-5'>Explore Our Projects</h1>
      <marquee>
        <div className='d-flex'>
          {
            allHomeProjects?.map(projects=>(
              <div className='me-5'>
            <ProjectCard displayData ={projects}/>
          </div>
            ))
          }
        </div>
      </marquee>
      <button onClick={handleProjects} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS....</button>

    </div>
    <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
      <h1>Our Testimonials</h1>
      <div className='d-flex justify-content-evenly align-items-center mt-3 w-100'>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center flex-column'> <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png" alt="" /> Max Miller</Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-center mb-1'>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>
          </div>
          <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate quidem autem sit accusantium magni delectus? At nostrum ut </p>
        </Card.Text>
      </Card.Body>
    </Card>

      </div>
    </div>
    </>
  )
}

export default Home