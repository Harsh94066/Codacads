import React from 'react';
import { Switch, useDarkreader } from 'react-darkreader';

export default () => {
    const [isDark, { toggle }] = useDarkreader(true);

    return <Switch checked={isDark} onChange={toggle} />;
};