import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import { Links } from 'components/theme/Footer/styles';
import { Wrapper, IntroWrapper, Details } from './styles';
import {
  defaultDescription,
  socialLinks
} from 'data/config';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>{defaultDescription}</h4>
          <p>Get in touch with me on Github or LinkedIn:</p>
          <Links>
            {socialLinks.map(({ id, name, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
                <img width="24" src={icon} alt={name} />
            </a>
            ))}
          </Links>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
