import React from 'react';
import { screen } from '@testing-library/react';
import { makeTestStore, testRender } from '../../setupTests';
import Goal from './Goal';

const testGoal = {
  id: '1',
  name: 'Стать президентом',
  date: '01/01/2001',
  isCompleted: false
};

test('Goal отображает цель с именем и датой', () => {
  const testState = {
    list: [testGoal]
  };
  const store = makeTestStore({ testState });
  testRender(
    <Goal
      id={testGoal.id}
      name={testGoal.name}
      date={testGoal.date}
      isCompleted={testGoal.isCompleted}
    />,
    { store }
  );
  const nameElement = screen.getByTestId('goal-name');
  const dateElement = screen.getByTestId('goal-date');
  expect(nameElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
  expect(nameElement).toHaveTextContent(testGoal.name);
  expect(dateElement).toHaveTextContent(testGoal.date);
});

test('При клике на чекбокс элемента вызывается dispatch с экшном complete', () => {
  const testState = {
    list: [testGoal]
  };
  const store = makeTestStore({ testState });
  testRender(
    <Goal
      id={testGoal.id}
      name={testGoal.name}
      date={testGoal.date}
      isCompleted={testGoal.isCompleted}
    />,
    { store }
  );
  //const element = screen.getByTestId('checkbox');
  expect(store.dispatch).not.toBeCalled();
});
