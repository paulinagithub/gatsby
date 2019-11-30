import React from 'react';
import { Header } from '../component/header';
import { Foother } from '../component/foother';

export const Layout = ({ children }) =>
<>
<Header />
{children}
<Foother />
</>