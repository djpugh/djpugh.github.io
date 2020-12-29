import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  color: #828282;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.25rem;
    margin-right: 0.5em;
    img {
      margin: 0;
    }
  }

  a:hover {
    color: #828282;
  }
`;

export const Details = styled.div`
  h2,
  a,
  span {
    color: #828282;

  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;
