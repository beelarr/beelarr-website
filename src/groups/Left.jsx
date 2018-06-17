import React from 'react';
import '../../src/App.css'

import { FacebookReact } from '../components/icons/React';
import { Mongo } from '../components/icons/Mongo';
import { GitHub } from '../components/icons/GitHub';
import { Jira } from '../components/icons/Jira';
import { JS } from '../components/icons/JS';

export const Left = () => (
    <div className="left">
        <FacebookReact />
        <Mongo />
        <GitHub />
        <Jira />
        <JS />
    </div>
);
