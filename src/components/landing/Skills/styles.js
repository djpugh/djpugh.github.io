import styled from 'styled-components';

export const Wrapper = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  li:first-of-type {
    margin-top: 1.5em;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const SkillsBubbles = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const SkillBubble = styled.div`
  display:inline-block;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-right: 0.2em;
  background-color: ${({ theme }) => (theme === 'light' ? '#ccc' : '#555')};
  color: ${({ theme }) => (theme === 'light' ? '#222' : '#eee')};
  width: auto;
  text-align: center;
  border: 2px solid  ${({ theme }) => (theme === 'light' ? '#666' : '#333')};
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  -webkit-box-shadow: 2px 2px 4px  ${({ theme }) => (theme === 'light' ? '#888' : '#222')};
  -moz-box-shadow: 2px 2px 4px  ${({ theme }) => (theme === 'light' ? '#888' : '#222')};
  box-shadow: 2px 2px 4px  ${({ theme }) => (theme === 'light' ? '#888' : '#222')};
`;

export const LearningBubble = styled.div`
  display:inline-block;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-right: 0.2em;
  background-color: ${({ theme }) => (theme === 'light' ? '#eee' : '#333')};
  color: ${({ theme }) => (theme === 'light' ? '#222' : '#eee')};
  width: auto;
  text-align: center;
  border: 2px solid  ${({ theme }) => (theme === 'light' ? '#666' : '#333')};
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  -webkit-box-shadow: 2px 2px 4px  ${({ theme }) => (theme === 'light' ? '#888' : '#222')};
  -moz-box-shadow: 2px 2px 4px  ${({ theme }) => (theme === 'light' ? '#888' : '#222')};
  box-shadow: 2px 2px 4px  ${({ theme }) => (theme === 'light' ? '#888' : '#222')};
`;
