import React from "react";
import useFetch from "../hooks/UseFetch";
import Loader from "../loader/Loader";
import Post from "../posts/Post";

export default function CarrotMenu() {
  const { data, isLoader, error } = useFetch(
    "http://forkify-api.jonas.io/api/v2/recipes?search=carrot",
  );
  if (isLoader) return <Loader />;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <section className="posts mb-3 py-2">
      <div className="container">
        <h2 className="text-center mt-3 mp-2 py-3" fontSize={"35px"}>
          Carrot Recipes Menu
        </h2>
        <div className="row gap-4">
          {data.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
