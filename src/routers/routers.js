import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/Homepage')),
    },
    {
        path: '/blog',
        component: lazy(() => import('@components/Blog/Blog')),
    },
    {
        path: '/shop',
        component: lazy(() => import('@pages/OurShop/OurShop')),
    },
    {
        path: '/cart',
        component: lazy(() => import('@pages/Cart/Cart')),
    },
    {
        path: '/about-us',
        component: lazy(() => import('@pages/about-us/About_us')),
    },
];

export default routers;
