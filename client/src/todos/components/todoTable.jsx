import React from 'react';
import { Table } from 'semantic-ui-react'
import TodoRow from './todoRow'
import EditTodoRow from './editTodoRow'

const TodoTable = (props) => {
    if (!props.isCreateMode && props.todos.length === 0) return null;
    return (

        <Table celled>
            <colgroup>
                <col width="30%" />
                <col width="30%" />
                <col width="20%" />
                <col width="20%" />
            </colgroup>
            <Table.Header>
                {renderTableHeaderRow(props)}
            </Table.Header>
            <Table.Body>
                {renderTableBody(props)}
            </Table.Body>

        </Table>
    )
}

const renderTableHeaderRow = (props) => {
    return props.isCreateMode ?
        (
            <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell >
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Bucket</Table.HeaderCell>
                <Table.HeaderCell>Options</Table.HeaderCell>
            </Table.Row >
        )
        :
        (
            <Table.Row>
                <Table.HeaderCell colSpan="4">{props.todosStatus}</Table.HeaderCell>
            </Table.Row >
        )

}

const renderTableBody = (props) => {
    return props.isCreateMode ?
        <EditTodoRow createTodo={props.createTodo}  buckets={props.buckets}/>
        :
        props.todos.map(t => {

            if (t.editing) {
                return <EditTodoRow
                    editTodo={props.editTodo}
                    cancelEditing={e => props.cancelEditing(t._id)}
                    key={t._id}
                    todo={t}
                    buckets={props.buckets}
                />
            } else {
                return <TodoRow
                    todo={t}
                    key={t._id}
                    completeTodo={e => props.completeTodo(t)}
                    startEditing={e => props.startEditing(t._id)}
                    deleteTodo={e => props.deleteTodo(t)}
                />
            }
        })
}

export default TodoTable;