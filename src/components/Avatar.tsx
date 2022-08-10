import React from 'react';
import styled from "@emotion/styled";

interface AvatarProps {
    avatar: string;
    name: string;
    role: string;
}

const StyledAvatar = styled.div`
  display: grid;
  grid:'avatar name name'
          'avatar role role';
  column-gap: 10px;
  row-gap: 3px;
  width: 200px;

  .avatar {
    grid-area: avatar;

    img {
      vertical-align: middle;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

  .name {
    grid-area: name;
    color: #353535;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0.02em;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 250px;
  }

  .role {
    grid-area: role;
    color: #8E8E8E;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 150px;
  }
`
export const Avatar = ({
                           avatar = 'https://avatars.githubusercontent.com/u/97145056?v=4',
                           name = 'Abdur Rehman',
                           role = 'React Engineer'
                       }: AvatarProps) => {
    return (
        <StyledAvatar>
            <div className="avatar">
                <img src={avatar} alt="User Avatar"/>
            </div>
            <div className="name">{name}</div>
            <div className="role">{role}</div>
        </StyledAvatar>
    );
}

