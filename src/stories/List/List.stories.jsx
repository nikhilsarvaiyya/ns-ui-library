// YourComponent.stories.js | YourComponent.stories.jsx

import React from 'react';

import { List } from './List';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'List',
  component: List,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <List {...args} />;

export const Default = Template.bind({});

Default.args = {
  /*๐ The args you need here will depend on your component */
};