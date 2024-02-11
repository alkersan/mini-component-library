import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);

    return (<Wrapper tabIndex={0}>
            <NativeSelect value={value} onChange={onChange}>
                {children}
            </NativeSelect>
            {displayedValue}
            <IconWrapper>
                <Icon id="chevron-down" strokeWidth={2} size={12} />
            </IconWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: fit-content;
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    color: ${COLORS.gray700};
    background-color: ${COLORS.transparentGray15};
    
    &:hover {
        color: ${COLORS.black};
    }
`;

const NativeSelect = styled.select`
    opacity: 0;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
`;

const IconWrapper = styled.div`
    display: inline-block;
    margin-left: 24px;
    vertical-align: middle;
`;

export default Select;
