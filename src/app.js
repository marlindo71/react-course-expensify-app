import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'; 
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({description: 'Marlon', amount: 1500, createdAt: 1 }));
store.dispatch(addExpense({description: 'MLuana', amount: 300, createdAt: 2 }));
store.dispatch(setTextFilter(''));

const state = store.getState();
const visible = getVisibleExpenses(state.expenses, state.filters);
console.log(visible);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
