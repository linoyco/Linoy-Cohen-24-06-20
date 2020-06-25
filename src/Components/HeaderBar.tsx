import React from 'react';
import styled from 'styled-components';

const StyledDiv: any = styled.div`
    background-color: #4E5D89;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    padding: 1%;
`;

const HeaderBar: React.FunctionComponent = () => (
    <div>
        <StyledDiv>HeaderBar</StyledDiv>
    </div>
);

export default HeaderBar;
