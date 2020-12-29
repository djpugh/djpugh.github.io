import React, {useContext} from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import {
  author,
  socialLinks
} from 'data/config';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>{author}</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()}
        </span>
      </Details>
      <Links>
        {socialLinks.map(({ id, name, link, icon }) => (
        <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
        </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>)
        }
