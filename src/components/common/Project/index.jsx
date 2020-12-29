import React, { useContext } from 'react';

import Fork from 'components/common/Icons/Fork';
import License from 'components/common/Icons/License';
import Release from 'components/common/Icons/Release';
import Star from 'components/common/Icons/Star';
import { Card, TitleWrap } from 'components/common/Card';
import { Item, Content, Stats, Languages, ReleaseDate } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';


export let Project = (node) => {
    const { theme } = useContext(ThemeContext);
    if (!(["djpugh", "djpugh.github.io", "probabilisticgraphicalmodels", "sphinx-gh-changelog", "azureml-private-wheel-bug"]).includes(node.name))
    {
        return (
            <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
                <Card theme={theme}>
                    <Content>
                    <h4>{node.name}</h4>
                    <p>{node.description}</p>
                    </Content>
                    <TitleWrap>
                    <Stats theme={theme}>
                        <div>
                        <Star color={theme === "light" ? "#000" : "#fff"} />
                        <span>{node.stargazers.totalCount}</span>
                        </div>
                        <div>
                        <Fork color={theme === "light" ? "#000" : "#fff"} />
                        <span>{node.forkCount}</span>
                        </div>
                    </Stats>
                    <Stats theme={theme}>
                        <div>
                        <License color={theme === "light" ? "#000" : "#fff"} />
                        <span>{ node.licenseInfo? (node.licenseInfo.name): (<i>Unknown</i>)}</span>
                        </div>
                    </Stats>
                    </TitleWrap>
                    <TitleWrap>
                    <Stats theme={theme}>
                       {node.releases.nodes[0] ?(
                        <div>
                            <Release color={theme === "light" ? "#000" : "#fff"} />
                            <span key={node.releases.nodes[0].name}>
                                {node.releases.nodes[0].name}<ReleaseDate>{node.releases.nodes[0].publishedAt}</ReleaseDate>
                            </span>
                        </div>) : ("")
                        }
                    </Stats>
                    <Stats theme={theme}>
                        <Languages>
                        {
                            node.languages.nodes.map(({ id, name }) => (
                            <span key={id}>
                                {name}
                            </span>
                            ))
                        }
                        </Languages>
                    </Stats>
                    </TitleWrap>
                </Card>
            </Item>
        )
    }
}
