import React from 'react';
import { Grid, Button, Hidden, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import TransactionListCard from '../../components/Cards/TransactionListCard';
import FinancialSummaryCard from '../../components/Cards/FinancialSummaryCard';
import FinancialSummaryGraphCard from '../../components/Cards/FinancialSummaryGraphCard';

import colors from '../../themes/colors';
import usePageStyles from './styles';
import TransactionCreationDialog from '../../components/TransactionCreationDialog';

const BalancePage: React.FC = () => {
  const classNames = usePageStyles({});
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const transactionsArray = [...Array(5).keys()];

  const data = {
    labels: ['Expenses', 'Income'],
    datasets: [
      {
        label: 'Income/Expense',
        data: [800, 100],
        backgroundColor: [colors.darkBlue, colors.primaryBlue],
        borderColor: [colors.darkBlue, colors.primaryBlue],
        borderWidth: 1,
      },
    ],
  };

  return (
    <React.Fragment>
      {/* First Column */}
      <Grid item xs={12} md={5}>
        <TransactionListCard transactions={transactionsArray} />
      </Grid>

      {/* Second column */}
      <Grid item container xs={12} md={7} alignContent="flex-start">
        <Grid item xs={12} className={classNames.secondColTopRow}>
          <FinancialSummaryCard title="Balance" type="income" amount={1500} />
        </Grid>

        <Grid item container spacing={1}>
          <Grid item xs={6}>
            <FinancialSummaryCard title="Income" type="income" amount={100} />
          </Grid>

          <Grid item xs={6}>
            <FinancialSummaryCard title="Expenses" type="expense" amount={400} />
          </Grid>
        </Grid>

        <Hidden smDown>
          <Grid item xs={12} className={classNames.secondColActionBtnRow}>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              onClick={() => setIsDialogOpen(true)}
            >
              <AddIcon /> New transaction
            </Button>
          </Grid>
        </Hidden>

        <Hidden mdUp>
          <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            className={classNames.floatingActionBtn}
            onClick={() => setIsDialogOpen(true)}
          >
            <AddIcon /> New transaction
          </Fab>
        </Hidden>

        <Hidden smDown>
          <Grid item xs={12}>
            <FinancialSummaryGraphCard data={data} />
          </Grid>
        </Hidden>
      </Grid>

      <TransactionCreationDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </React.Fragment>
  );
};

export default BalancePage;
