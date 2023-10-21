import React, {useEffect, useState} from 'react';

import {IPost} from "../../../interfaces/postInterface";
import {postService} from "../../../services/postService";
import PostComponent from "../Post/PostComponent";
import PostDetailsComponent from "../PostDetails/PostDetailsComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [postDetails, setPostDetails] = useState<IPost | null>(null);

    useEffect(()=>{
        postService.getAll().then(({data})=> setPosts(data));
    }, [])

    const click = async (id:number): Promise<void> => {
        const {data} = await postService.getByID(id)
        setPostDetails(data)
    }



    return (
        <div>
            {postDetails && <PostDetailsComponent postDetails={postDetails}/>}
            {posts.map(post => <PostComponent post={post} click={click} key={post.id}/>)}
        </div>
    );
};


export default PostsComponent;