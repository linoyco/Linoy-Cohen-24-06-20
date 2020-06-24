import React from 'react';

const HeaderBar: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => (
    <div>HeaderBar
        <div>{children}</div>
    </div>
);

export default HeaderBar;
