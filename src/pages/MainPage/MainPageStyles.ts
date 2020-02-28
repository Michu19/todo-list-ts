
import styled from 'styled-components';
import { myTheme } from '../../styles/theme';

export const Container = styled.section`
display: ${myTheme.display.flex};
align-items: ${myTheme.centerItems};
width: ${myTheme.width.w60p};
margin-left: ${myTheme.margin.auto};
margin-right: ${myTheme.margin.auto};
height: ${myTheme.height.h100vh};
justify-content: ${myTheme.centerItems};
`

export const BoxItems = styled.div`
color: ${myTheme.colors.main};
display: ${myTheme.display.flex};
margin: ${myTheme.margin.m10};
border-radius: ${myTheme.borderRadius};
box-shadow: ${myTheme.shadow};
justify-content: ${myTheme.spaceBetween};
align-items: ${myTheme.centerItems};
background: ${myTheme.colors.white};

:hover {
transform: ${myTheme.transform.scale};
}
transition: ${myTheme.transition.all05};
span {
display: ${myTheme.display.flex};
}
div {
  margin: ${myTheme.margin.m10};
  cursor: ${myTheme.cursor};
}
p {
  margin: ${myTheme.margin.m10};
  cursor: ${myTheme.cursor};
  overflow-wrap: ${myTheme.overflow.breakWord};
}
`
export const FlexCenter = styled.div`
display: ${myTheme.display.flex};
justify-content: ${myTheme.centerItems};
`
export const Grid = styled.div`
display: ${myTheme.display.grid};
grid-template-columns: ${myTheme.gridTemplateColumns.huge};
color: ${myTheme.colors.main};
justify-content: ${myTheme.centerItems};
align-items: ${myTheme.centerItems};
h1 {
  text-align: ${myTheme.centerItems};
}
> div {
  box-shadow: ${myTheme.shadow};
  margin: ${myTheme.margin.m10};
  border-radius: ${myTheme.borderRadius};
  height: ${myTheme.height.h500};
  overflow-x: ${myTheme.overflow.hidden};
  @media (max-width: 768px) {
    height: ${myTheme.height.h300};
}
::-webkit-scrollbar {
  width: ${myTheme.width.w3};
}
::-webkit-scrollbar-thumb {
  background: ${myTheme.colors.gray};
}
::-webkit-scrollbar-thumb:hover {
  background: ${myTheme.colors.brown};
}
::-moz-scrollbar {
  width: ${myTheme.width.w3};
}
::-moz-scrollbar-thumb {
  background: ${myTheme.colors.gray};
}
::-moz-scrollbar-thumb:hover {
  background: ${myTheme.colors.brown};
}
}
@media (max-width: 768px) {
  display: ${myTheme.display.flex};
  flex-wrap: ${myTheme.wrap};
}
`