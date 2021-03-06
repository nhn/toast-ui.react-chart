import React from 'react';
import TuiChart from 'tui-chart';
import 'tui-chart/dist/tui-chart.min.css';
import {storiesOf} from '@storybook/react';
import {withKnobs, radios} from '@storybook/addon-knobs';

import {ColumnChart} from '../../src/index';
import {commonTheme} from '../theme';
import {basicChartDummy} from './dummyData';

const stories = storiesOf('ColumnChart', module).addDecorator(withKnobs);

stories.add('basic with theme', () => {
  const {data, options} = basicChartDummy;
  const themeOptions = {
    normal: 'normal',
    myTheme: 'myTheme'
  };
  const theme = radios('Theme', themeOptions, 'normal');

  const Story = () => {
    if (theme === themeOptions.myTheme) {
      TuiChart.registerTheme('myTheme', commonTheme);
      options.theme = 'myTheme';
    }

    return <ColumnChart data={data} options={options} />;
  };

  return <Story />;
});
