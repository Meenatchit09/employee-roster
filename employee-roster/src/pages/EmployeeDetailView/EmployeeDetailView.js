import React from 'react';
import logo from '../../logo.svg'

export const EmployeeDetailView = props => {
    const { empDetails } = props;
    const { firstName, lastName, jobTitle, age, bio, dateJoined } = empDetails;
    return (
        <>
            <div className='header'>
                <div className='profile' style={{ width: '20%' }}>
                    <img className='profile-pic' src={logo} alt='pic' />
                    <h3>{jobTitle}</h3>
                    <span>{age}</span>
                    <span>{dateJoined.split("T")[0]?.split("-")?.reverse().join('-')}</span>
                </div>
                <div className='profile'>
                    <h2 className='name-alignment'>{firstName} {lastName}</h2>
                    <span>{bio}</span>
                </div>
            </div>
        </>
    )
}