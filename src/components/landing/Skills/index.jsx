import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Links } from 'components/theme/Footer/styles';
import { Wrapper, SkillsWrapper, Details, SkillsBubbles, SkillBubble, LearningBubble } from './styles';
import {
  skills,
  detail,
  tools,
  learning,
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
          <SkillsBubbles>
            {skills.map(skill => (
              <SkillBubble key={skill} theme={theme}>
                {skill}
              </SkillBubble>
            ))}
          </SkillsBubbles>
          <br/>
          <h2>Tools</h2>
          <SkillsBubbles>
            {tools.map(skill => (
              <SkillBubble key={skill} theme={theme}>
                {skill}
              </SkillBubble>
            ))}
          </SkillsBubbles>
          <br/>
          <br/>
          <br/>
          <h2>Learning</h2>
          <SkillsBubbles>
            {learning.map(skill => (
              <LearningBubble key={skill} theme={theme}>
                {skill}
              </LearningBubble>
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
