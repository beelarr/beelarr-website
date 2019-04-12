import React from 'react';
import '../../src/App.css'

import { FacebookReact } from '../components/icons/React';
import { Python } from '../components/icons/Python';
import { GitHub } from '../components/icons/GitHub';
import { Jira } from '../components/icons/Jira';
import { JS } from '../components/icons/JS';

export const Left = () => (
    <div className="left">
        <FacebookReact />
        <Python />
        <GitHub />
        <Jira />
        <JS />
    </div>
);
