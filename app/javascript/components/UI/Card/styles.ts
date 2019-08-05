import { makeStyles } from '@material-ui/styles';

import styleConstants from '../../../themes/constants';

interface CardProps {
  fullHeight?: boolean;
  noPadding?: boolean;
}

const useCardStyles = makeStyles({
  card: ({ fullHeight }: CardProps) => ({
    height: fullHeight ? '100%' : undefined,
    boxShadow: styleConstants.boxShadow,
  }),
  cardContent: ({ noPadding }) => ({
    padding: noPadding ? 0 : undefined,
  }),
});

export default useCardStyles;
