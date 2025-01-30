
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom'

function AdminProtect({ children }) {
  let user = useSelector(state => state.user);
  console.log("user ", user.user);
  let isAdmin = user.user?.isAdmin;
  console.log("is admin ", isAdmin);
  if(!isAdmin)
  {
    return <Navigate to="/login" />;
  }else{
    return children;
  }
}

export default AdminProtect