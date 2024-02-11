/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        '--height': '8px',
        '--radius': '4px',
        '--padding': '0',
    },
    medium: {
        '--height': '12px',
        '--radius': '4px',
        '--padding': '0',
    },
    large: {
        '--height': '24px',
        '--radius': '8px',
        '--padding': '4px',
    },
}
const ProgressBar = ({value, size}) => {
    // Trim value to be in range [0..100]
    value = Math.max(value, 0)
    value = Math.min(value, 100)
    const styles = SIZES[size]

    let width = {
        '--width': value + '%'
    };
    return (
        <Wrapper style={styles} role="progressbar" aria-valuenow={value}>
            <ProgressValue style={width}></ProgressValue>
            <VisuallyHidden>{value}%</VisuallyHidden>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: var(--height);
    width: 370px;
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius);
    padding: var(--padding);
`;

const ProgressValue = styled.div`
    border-radius: 4px;
    height: 100%;
    width: 100%;
    background: linear-gradient(
            to right,
            ${COLORS.primary} var(--width),
            transparent var(--width));
`;

export default ProgressBar;
