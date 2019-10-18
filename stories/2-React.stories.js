import React from 'react';
// import { linkTo } from '@storybook/addon-links';
import App from '../src/App';

export default {
  title: 'React',
};

export const toStorybook = () => <App />;

toStorybook.story = {
  name: 'to story',
};
