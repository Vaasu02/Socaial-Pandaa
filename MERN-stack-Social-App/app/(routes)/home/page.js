"use client"
import React, { useContext, useEffect, useState } from 'react'
import Banner from './_components/Banner'
import { useUser } from '@clerk/nextjs'
import WritePost from './_components/WritePost';
import PostList from './_components/PostList';
import GlobalApi from '@/app/_utils/GlobalApi';
import { UserDetailContext } from '@/app/_context/UserDetailContext';

function Home() {
  const {user}=useUser();
  const {userDetail}=useContext(UserDetailContext);
  const [postList,setPostList]=useState([]);
  useEffect(()=>{
      getAllPost();
  },[])
  const getAllPost=()=>{
      GlobalApi.getAllPost().then(resp=>{
          setPostList(resp.data)
      })
  }
  return (
    <div className='p-5 px-10'>
     {!user? <Banner/>
     : !userDetail? 
       <div className='p-4 text-gray-500'>Loading your profile...</div>
     : <WritePost getAllPost={()=>getAllPost()} />}

    <PostList postList={postList}
    updatePostList={()=>getAllPost()} />
    </div>
  )
}

export default Home