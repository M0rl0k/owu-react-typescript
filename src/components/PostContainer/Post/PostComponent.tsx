import React, {FC} from 'react';
import {IPost} from "../../../interfaces/postInterface";

interface IProps {
    post: IPost
    click : (id:number) => Promise<void>
}

const PostComponent: FC<IProps> = ({post, click}) => {

    const {id, title} = post

    return (
        <div>
            <h3>ID: {id}</h3>
            <h3>Name: {title}</h3>
            <button onClick={()=> click(id)}>Details</button>
        </div>
    );
};

export default PostComponent;