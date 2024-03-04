import styled, { css } from "styled-components";

const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    margin: 2rem;
    background-color: ${(props) => 
    props.$background-color === "black" ? "var(--color-black)" : "var(--color-green)"
    };

${(props) =>
props.$variant === "black" &&
css` 
background-color: black;
`}

${(props) => 
props.$variant === "green" &&
css`
background-color: green;
`}

&:hover {
    background-color: red;
}
`;
    
  
  
  

export default StyledBox;