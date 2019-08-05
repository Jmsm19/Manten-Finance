import { makeStyles } from '@material-ui/styles';

import colors from '../../themes/colors';

const useTransactionListStyles = makeStyles({
  list: {
    paddingLeft: 0,
    paddingBottom: 0,
    maxHeight: '75vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    marginRight: -15,
  },
  listSubtitle: {
    padding: 16,
    color: colors.primaryBlue,
    backgroundColor: colors.fadedBlue,
  },
  listItemDivider: {
    marginRight: 31,
  },
  listItem: {
    paddingRight: 31,
  },
  listItemContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemAmount: {
    color: colors.success,
  },
});

export default useTransactionListStyles;
