import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import Post from "../getpizza/Post";
import UseFetch from "../hooks/UseFetch";

export default function Setpizza() {
  const {data,isLoader,error} = UseFetch("http://forkify-api.jonas.io/api/v2/recipes?search=pizza")
    if(isLoader) return <Loader />;
    if(error) return <h2>{response.error}</h2>


  return (
    <section className="posts mb-3 py-2">
      <div className="container">
        <h2 className="text-center mt-3 mp-2 py-3" fontSize={'35px'}>Pizza Menu</h2>
        <div className="row gap-4">
        {data.map((post) => (
            <Post post={post} key={post.id}/>
          ))}
          </div>
        </div>
    </section>
  );
}
