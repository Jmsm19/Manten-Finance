import React from 'react';
import { Card as MaterialCard, CardContent } from '@material-ui/core';
import { CardProps } from '@material-ui/core/Card';

import useCardStyles from './styles';

interface Props extends CardProps {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  noPadding?: boolean;
  contentStyle?: React.CSSProperties;
}

const Card: React.FC<Props> = ({
  children,
  className,
  fullHeight,
  noPadding,
  contentStyle,
  ...props
}) => {
  const classNames = useCardStyles({ noPadding, fullHeight });

  return (
    <MaterialCard className={`${classNames.card} ${className}`} {...props}>
      <CardContent className={classNames.cardContent} style={contentStyle}>
        {children}
      </CardContent>
    </MaterialCard>
  );
};

Card.defaultProps = {
  fullHeight: false,
  noPadding: false,
  contentStyle: {},
};

export default Card;
