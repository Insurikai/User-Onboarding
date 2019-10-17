import React from 'react';
export default (props) => (
    <div className="user-list-container">
        {props.list.map((user)=>(
            <div class="user">
                <h1 class="username">{user.username}</h1>
                <p class="email">{user.email}</p>
            </div>
        ))}
    </div>
)