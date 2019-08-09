import { makeStyles } from '@material-ui/core';

const useAppTitleStyles = makeStyles({
  titleSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  title: {
    width: 220,
  },
});

export default useAppTitleStyles;
