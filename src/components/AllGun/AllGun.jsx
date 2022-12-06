import React, {useState,useEffect} from 'react';
import SingleGun from '../SIngleGun/SingleGun';
import './AllGun.css';

const AllGun = () => {
  const [guns, setGuns] = useState([]);
  useEffect(()=>{
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
    .then(res => res.json())
    .then(data => setGuns(data))
  },[]);

  return (
    <div className='mt-5'>
      <h1 className="text-4xl text-center font-bold mt-6">Welcome to <span className='gun-text'>Gun Store</span></h1>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
      {
        guns.map((gun) => (
          <SingleGun gun={gun} key={gun.id}/>
        ))
      }
      </div>
    </div>
  );
};

export default AllGun;