import React from 'react';
import { Button, Table } from 'semantic-ui-react'

const TodoRow = (props) => {
    return (
        <Table.Row className={getClassName(props)}>
            <Table.Cell>{props.todo.title}</Table.Cell>
            <Table.Cell>{props.todo.description}</Table.Cell>
            <Table.Cell>{props.todo.bucket}</Table.Cell>
            <Table.Cell className="options">
                {
                    <Button className="option-buttons" color={ props.todo.status !== true ? 'green' : 'red'} onClick={props.completeTodo} title={ props.todo.status !== true ? 'Mark as Done' : 'Mark as Undone'}>
                        { props.todo.status !== true ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i> }
                    </Button>
                }
                <Button className="option-buttons" color='blue' onClick={props.startEditing}>
                    <i className="fa fa-pencil"></i>
                </Button>
                <Button className="option-buttons" color='red' onClick={props.deleteTodo}>
                    <i className="fa fa-trash"></i>
                </Button>
            </Table.Cell>
        </Table.Row>
    );
}


const getClassName = (props) => {
    return `
    ${props.todo.updating ? "updating" : ""}
    ${props.todo.status === true ? "done" : ""}
    ${props.todo.deleting ? "deleting" : ""}
    `
}

export default TodoRow;