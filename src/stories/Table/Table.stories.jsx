// YourComponent.stories.js | YourComponent.stories.jsx

import React from 'react';

import { Table } from './Table';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'Table',
  component: Table,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  /*๐ The args you need here will depend on your component */
};