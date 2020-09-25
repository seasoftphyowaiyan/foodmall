import React from 'react';
import {
    Route,
    Link,
    Redirect
} from "react-router-dom";

const PrivateLink = ({
    path: Component,
    ...rest
}) => ( <
    Link {
        ...rest
    }
    render = {
        props => (
            localStorage.getItem('user') && localStorage.getItem('token') ?
            <
            Component {
                ...props
            }
            /> : <
            Redirect to = {
                {
                    pathname: '/login',
                    state: {
                        from: props.location
                    }
                }
            }
            />
        )
    }
    />
)

export default PrivateLink;