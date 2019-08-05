import React from 'react';
import { defaults, Doughnut } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';

import Card from '../../UI/Card';

import theme from '../../../themes/materialTheme';
import colors from '../../../themes/colors';
import useGraphCardStyles, { cardContentStyle } from './styles';

// @ts-ignore
defaults.global.defaultFontColor = colors.text;
// @ts-ignore
defaults.global.defaultFontSize = 17.5;
// @ts-ignore
defaults.global.defaultFontFamily = theme.typography.fontFamily;

interface Props {
  data: object;
}

const FinancialSummaryGraphCard: React.FC<Props> = ({ data }) => {
  const classNames = useGraphCardStyles({});

  return (
    <Card fullHeight contentStyle={cardContentStyle}>
      <Typography variant="body2" className={classNames.cardTitle}>
        How are you using your money
      </Typography>

      <div className={classNames.graphWrapper}>
        <Doughnut data={data} />
      </div>
    </Card>
  );
};

export default FinancialSummaryGraphCard;
