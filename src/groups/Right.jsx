import React from 'react';
import '../../src/App.css';

import { TS } from '../components/icons/TS';
import { PG } from '../components/icons/PostgreSQL';
import { AWS } from '../components/icons/AWS';
import { Node } from '../components/icons/Node';
import { Webstorm } from "../components/icons/Webstorm";


export const Right = () => (
    <div className="right">
        <TS />
        <PG />
        <AWS />
        <Node />
        <Webstorm />
    </div>
);