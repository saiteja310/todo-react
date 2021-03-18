import { render, screen, queryByAttribute, queryby } from '@testing-library/react';
import TodoTable from './todoTable';

const todos = [{ _id: 0, title: 'title', description: 'Desc', bucket: "Default", status: true }]
const buckets = [{ key: 0, text: "Default", value: "Default" }]

test('renders Create Mode table', () => {
  render(<TodoTable isCreateMode buckets={buckets}/>);
  expect(screen.getByText('Title')).toBeInTheDocument();
  expect(screen.getByText('Description')).toBeInTheDocument();
  expect(screen.getByText('Bucket')).toBeInTheDocument();
  expect(screen.getByText('Options')).toBeInTheDocument();
});

test('renders Bucket table', () => {
  render(<TodoTable todosStatus={'Bucket'} todos={todos} buckets={buckets}/>);
  expect(screen.getByText('Bucket')).toBeInTheDocument();
});