import React, {FC} from 'react';
import {IPost} from "../../../interfaces/postInterface";

interface IProps {
    postDetails: IPost
}

const PostDetailsComponent:FC<IProps> = ({postDetails}) => {

    const {id, title, userId, body} = postDetails

    return (
        <div>
            <h3>id: {id}</h3>
            <h3>title: {title}</h3>
            <h3>userId: {userId}</h3>
            <p>body: {body}</p>
        </div>
    );
};

export default PostDetailsComponent;