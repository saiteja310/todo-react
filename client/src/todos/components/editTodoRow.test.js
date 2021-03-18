import { render, screen, queryByAttribute, queryby } from '@testing-library/react';
import { Table } from 'semantic-ui-react';
import EditTodoRow from './editTodoRow';

test('renders Add Todo row', () => {
  render(<Table>
    <Table.Body>
      <EditTodoRow buckets={[{ key: 0, text: "Default", value: "Default" }]} />
    </Table.Body>
  </Table>);
  expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
  expect(screen.getByTitle('Bucket')).toBeInTheDocument();
  expect(screen.getByTitle('Create Todo')).toBeInTheDocument();
  expect(screen.getByTitle('Reset')).toBeInTheDocument();
});

test('renders Add Todo row and validate cells', () => {
  const dom = render(<Table>
    <Table.Body>
      <EditTodoRow buckets={[{ key: 0, text: "Default", value: "Default" }]} />
    </Table.Body>
  </Table>);
  let elements = dom.container.getElementsByTagName('td');
  expect(elements[0].querySelector('input').title).toEqual('Title');
  expect(elements[1].querySelector('input').title).toEqual('Description');
  expect(elements[2].querySelector('.text').textContent).toEqual('Default');
  expect(elements[3].querySelectorAll('button')[0].textContent).toEqual('Create');
  expect(elements[3].querySelectorAll('button')[1].textContent).toEqual('Reset');
});

test('validate Dropdown options in Create', () => {
  const dom = render(<Table>
    <Table.Body>
      <EditTodoRow buckets={[{ key: 0, text: "Default", value: "Default" }, { key: 1, text: "1", value: "1" }]} />
    </Table.Body>
  </Table>);
  let elements = dom.container.getElementsByTagName('td')[2].querySelectorAll('.menu .item');
  expect(elements.length).toBe(2);
});