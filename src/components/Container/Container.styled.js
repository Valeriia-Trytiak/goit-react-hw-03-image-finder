import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${p => p.theme.spacing(4)};
  padding-bottom: ${p => p.theme.spacing(6)};
`;
