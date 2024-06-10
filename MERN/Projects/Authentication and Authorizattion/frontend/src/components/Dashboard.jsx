import React,{useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify';
import { useParams } from 'react-router-dom';
const Dashboard = () => {
  const {token}=useParams();
  const navigate=useNavigate();
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:80/auth/verify').then(res=>{
      if(res.data.status){

        toast.success(res.data.msg);
      }
      else{
        toast.error(res.data.msg);
        navigate('/signin')
      }
    })
  })
  return (
    <div className="p-4 flex-1 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-md">Card 1</div>
        <div className="bg-white p-4 rounded shadow-md">Card 2</div>
        <div className="bg-white p-4 rounded shadow-md">Card 3</div>
        <div className="bg-white p-4 rounded shadow-md">Card 4</div>
        <div className="bg-white p-4 rounded shadow-md">Card 5</div>
        <div className="bg-white p-4 rounded shadow-md">Card 6</div>
      </div>
    </div>
  );
}

export default Dashboard;
