import React from 'react';
import {
    Route,
    Link,
    Redirect
} from "react-router-dom";

const PrivateLink = ({
        path: Component,
        ...rest
    }) => {
        if (localStorage.getItem('user') && localStorage.getItem('token')) {
            return <Link {
                ...rest
            }
            />}
            else {
                return <
                    Redirect to = {
                        {
                            pathname: '/',
                            state: {
                                from: rest.location
                            }
                        }
                    }
                />;}
            }
            export default PrivateLink;