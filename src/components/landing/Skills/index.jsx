import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Links } from 'components/theme/Footer/styles';
import { Wrapper, SkillsWrapper, Details, SkillsBubbles, SkillBubble } from './styles';
import {
  skills,
  detail,
  socialLinks
} from 'data/config';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p dangerouslySetInnerHTML={{__html: detail}}>
          </p>
          <h2>Skills</h2>
          <br/>
          <SkillsBubbles>
            {skills.map(skill => (
              <SkillBubble key={skill} theme={theme}>
                {skill}
              </SkillBubble>
            ))}
          </SkillsBubbles>
          <br/>
          <Links>
            {socialLinks.map(({ id, name, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
                <img width="24" src={icon} alt={name} />
            </a>
            ))}
          </Links>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
