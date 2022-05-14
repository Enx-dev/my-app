import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --font-size_home: 14px;
    --font-size_Details: 16px;
    --font-family:"Nunito Sans", sans-serif;
    --tablet: 768px;
    --laptop:1024px;
}
body{
    min-height:100vh;
}
html{
    scroll-behavior: smooth;
}
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
`;
