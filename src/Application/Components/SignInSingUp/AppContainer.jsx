import React from 'react'
import styled from "styled-components";
import { AccountBox } from './AccountBox';

const AppContaineri = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AppContainer = () => {
    return (
        <AppContaineri>
            <AccountBox/>
        </AppContaineri>
    )
}

export default AppContainer
