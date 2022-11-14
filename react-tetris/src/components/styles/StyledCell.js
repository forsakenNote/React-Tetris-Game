import styled from 'styled-components';

export const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color}, 0.8);
    border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
    border-bottom-solor: rgba(${props => props.color}, 0.1);
    border-right-bottom-solor: rgba(${props => props.color}, 0.1);
    border-top-bottom-solor: rgba(${props => props.color}, 0.1);
    border-left-bottom-solor: rgba(${props => props.color}, 0.3);
`