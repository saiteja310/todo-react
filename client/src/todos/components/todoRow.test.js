import { render, screen, queryByAttribute, queryby } from '@testing-library/react';
import { Table } from 'semantic-ui-react';
import TodoRow from './todoRow';

const todos = { title: 'title', description: 'Desc', bucket: "Default", status: true }

test('renders Display Todo row', () => {
  render(<Table>
    <Table.Body>
      <TodoRow todo={todos} />
    </Table.Body>
  </Table>);
  expect(screen.getByText('title')).toBeInTheDocument();
  expect(screen.getByText('Desc')).toBeInTheDocument();
  expect(screen.getByText('Default')).toBeInTheDocument();
});

test('renders Display Todo row validate cells', () => {
  const dom = render(<Table>
    <Table.Body>
      <TodoRow todo={todos} />
    </Table.Body>
  </Table>);
  expect(dom.container.querySelector('tr')).not.toBeNull();
  expect(dom.container.querySelectorAll('tr').length).toBe(1);
});