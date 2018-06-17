import React from 'react';
import '../../src/App.css';

import { TS } from '../components/icons/TS';
import { PG } from '../components/icons/PostgreSQL';
import { Rails } from '../components/icons/Rails';
import { Ruby } from '../components/icons/Ruby';
import { Webstorm } from "../components/icons/Webstorm";


export const Right = () => (
    <div className="right">
        <TS />
        <PG />
        <Rails />
        <Ruby />
        <Webstorm />
    </div>
);