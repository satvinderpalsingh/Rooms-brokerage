import React from 'react';
const Dashboard=()=>(
    <div>dashboard_component</div>
);
export default {
    routeProps: {
        path: '/',
        exact:true,
        component: Dashboard
    },
    name: 'Dashboard',
};