import { makeStyles } from '@material-ui/styles';

import colors from '../../../themes/colors';

interface CardProps {
  type: 'income' | 'expense';
}

const useFinancialCardStyles = makeStyles({
  cardTitle: {
    color: colors.fadedText,
  },
  cardAmount: {
    width: '100%',
    textAlign: 'center',
    color: ({ type }: CardProps) => (type === 'income' ? colors.success : colors.danger),
  },
});

export default useFinancialCardStyles;
