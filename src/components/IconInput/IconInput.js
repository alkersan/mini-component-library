import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        'height': 24,
        'offsetLeft': 24,
        'offsetTop': 4,
        'offsetBottom': 4,
        'iconSize': 16,
        'fontSize': 14 / 16,
    },
    large: {
        'height': 36,
        'offsetLeft': 36,
        'offsetTop': 8,
        'offsetBottom': 7,
        'iconSize': 24,
        'fontSize': 18 / 16,
    }
}

const IconInput = ({label, icon, width = 250, size, placeholder}) => {
    let style = SIZES[size]
    if (!style) {
        throw new Error(`Unknown size was specified ${size}`);
    }
    return (
        <Wrapper style={{
            '--offsetLeft': style.offsetLeft + 'px',
            '--offsetTop': style.offsetTop + 'px',
            '--offsetBottom': style.offsetBottom + 'px',
        }}>
            <Input
                type="text"
                placeholder={placeholder}
                style={{
                    '--height': style.height + 'px',
                    '--offset': style.height + 'px',
                    '--fontSize': style.fontSize + 'rem',
                    '--width': width + 'px',
                }}>
            </Input>
            <IconWrapper style={{
                '--iconSize': style.iconSize + 'px',
            }}>
                <Icon id={icon} size={style.iconSize}/>
            </IconWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    color: ${COLORS.gray700};
`;

const Input = styled.input`
    border: none;
    border-bottom: 2px solid ${COLORS.black};
    padding-left: var(--offsetLeft);
    padding-top: var(--offsetTop);
    padding-bottom: var(--offsetBottom);
    height: var(--height);
    width: var(--width);
    
    font-weight: bold;
    color: inherit;
    font-size: var(--fontSize);
    
    &::placeholder {
        color: ${COLORS.gray500};
        font-weight: normal;
        height: 100%;
    }
    &:focus {
        outline-offset: 2px;
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: var(--iconSize);
    height: var(--iconSize);
    pointer-events: none;
`;

export default IconInput;
