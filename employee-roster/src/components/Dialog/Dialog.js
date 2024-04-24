import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/App.css';

export const Dialog = props => {
    const { isDialogOpen, closeDialog, child } = props;
    return (
        <>
            {isDialogOpen && (
                <div className='overlay center'>
                <dialog open >
                    <div className='align-right' onClick={closeDialog}>X</div>
                    {child}
                </dialog>
                </div>
            )}
        </>
    )
}

Dialog.propTypes = {
    isDialogOpen:PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
    child: PropTypes.any.isRequired
}
    
