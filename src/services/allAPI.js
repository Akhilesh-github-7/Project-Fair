import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";

//  registerAPI called by auth

export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

//  loginAPI called by auth component when user clicked on login button

export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}


//  addProjectAPI called by add component when user clicked on add-project button

export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}

//  getHomeProjectAPI called by home component when page loaded in browser (useEffect())

export const getHomeProjectAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-project`,{})
}

//  allProjectAPI called by project component when page loaded in browser (useEffect())

export const allProjectAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-project?search=${searchKey}`,{},reqHeader)
}

//  userProjectAPI called by view component when page loaded in browser (useEffect())

export const userProjectAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-project`,{},reqHeader)
}

//  updateProjectAPI called by edit component when user clicked on edit button 

export const updateProjectAPI = async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/projects/${id}/edit`,reqBody,reqHeader)
}


//  userProjectAPI called by view component when page loaded in browser (useEffect())

export const userProjectRemoveAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/projects/${id}/remove`,{},reqHeader)
}




//  updateUserAPI called by profile component when user clicked on update button

export const updateUserAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-user`,reqBody,reqHeader)
}
