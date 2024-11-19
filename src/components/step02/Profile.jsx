import React from 'react';
import Avatar from './Avatar';

function Profile() {
    return (
        <div>
            <Avatar size={30} person={{name: 'hong', imageId: 'YfeOqp2'}}  />
            <Avatar size={60} person={{name: 'hong', imageId: 'OKS67lh'}}  />
            <Avatar size={90} person={{name: 'hong',  imageId: '1bX5QH6'}}  />
        </div>
    ); 
}

export default Profile;