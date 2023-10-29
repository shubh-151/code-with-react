import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  return (
    <div>
      <Container>
        {posts.map((post) => (
          <PostCard key={post.$id} post={post} />
        ))}
      </Container>
    </div>
  );
};

export default AllPosts;
