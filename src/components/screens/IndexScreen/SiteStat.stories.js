import React from 'react';
import { storiesOf } from '@storybook/react';
import SiteStat from './SiteStat';

storiesOf('Screens|IndexScreen/SiteStat', module)
  .addParameters({ component: SiteStat })
  .add('default', () => (
    <SiteStat
      heading="6 guides"
      message="Professional walkthroughs made for frontend devs. Updated all the time."
    />
  ));
