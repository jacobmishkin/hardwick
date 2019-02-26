import styled from 'styled-components';

const Square = styled.div`
  width: 180px;
  height: 180px;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  border-radius: 5px;
  box-shadow: 14px 11px 34px -6px rgba(46, 46, 46, 0.27);
  background: linear-gradient(
    217deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.3) 78.71%
  );
`;
export default Square;
