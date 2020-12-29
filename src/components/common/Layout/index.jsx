import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Footer } from 'components/theme';
import { Global } from './styles';
import { Helmet } from "react-helmet";
import {title, url} from "data/config";
import './fonts.css';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="{url}" />
      </Helmet>
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};
