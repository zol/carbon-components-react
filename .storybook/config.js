import chromatic from 'react-chromatic';
import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { checkA11y } from 'storybook-addon-a11y';
import Container from './Container';
import storybookRuntime from 'react-chromatic/dist/assets/runtimes/storybook';

// addDecorator(checkA11y);
addDecorator(story => <Container story={story} />);
setAddon(infoAddon);

function loadStories() {
  const req = require.context('./components', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

chromatic({
  noWidget: true,
  runtimes: [storybookRuntime],
});
