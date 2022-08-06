import React from 'react';
import './testimonial.css'
import {Avatar} from "./Avatar";

export const Testimonial = ({}) => {
    return (
        <div className="container-1">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam consequuntur culpa dolorum, fuga
                hic ipsa itaque nesciunt perspiciatis porro possimus ratione saepe sint tempore, totam. Ad cum eius
                similique!
            </div>
            <div>
                <Avatar avatar={'https://avatars.githubusercontent.com/u/97145056?v=4'} name={'Abdur Rehman'}
                        role={'React Engineer'}/>
            </div>
        </div>
    );
};