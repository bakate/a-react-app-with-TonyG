import styled from 'styled-components';

const ButtonStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  button {
    border-radius: 5px;
    text-transform: capitalize;
    width: auto;
    background: midnightblue;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
`;
export default ButtonStyles;
