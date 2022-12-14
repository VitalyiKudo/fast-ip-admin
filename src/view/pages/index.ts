// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Register = lazy(() => import(/* webpackChunkName: "Main" */ './Register'));
export const Login = lazy(() => import(/* webpackChunkName: "Main" */ './Login'));
