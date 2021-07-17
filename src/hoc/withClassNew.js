import React from 'react';

const withClassNew = (WrappedCompoent, className) => {
    return props => (<div className={className}>
        <WrappedCompoent />
    </div>)
}

export default withClassNew;