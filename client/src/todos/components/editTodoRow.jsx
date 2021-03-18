import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'
import { Input, Dropdown } from 'semantic-ui-react'

class EditTodoRow extends Component {

    constructor(props) {
        super(props);
        if (this.props.todo) {
            this.state = { ...this.props.todo }
        } else {
            this.state = { ...this.emptyTodo() }
        }
    }

    emptyTodo = () => {
        return { title: "", description: "", status: false, bucket: 'Default', buckets: this.props.buckets || ['Default'] }
    }
    resetTodo = () => {
        this.setState({ title: "", description: "", status: false, bucket: 'Default', buckets: this.props.buckets || ['Default'] })
    }

    changeNewTitle = (event) => {
        this.setState({ title: event.target.value })
    }

    changeNewDescription = (event) => {
        this.setState({ description: event.target.value })
    }

    changeNewBucket = (event) => {
        this.setState({ bucket: event.target.textContent })
    }

    createTodo = () => {
        this.resetTodo()
        this.props.createTodo(this.state)
    }

    editTodo = () => {
        this.props.editTodo(this.state)
    }

    cancelEditing = () => {
        this.props.cancelEditing();
    }

    handleAddition = (e, { value }) => {
        let keys = this.state.buckets.length;
        this.setState({ buckets : this.state.buckets.push({key: keys + 1, text: value, value: value}), bucket: value})
    }

    static getDerivedStateFromProps(props, state){
        state.buckets = props.buckets;
        return state;
    }

    render() {
        return (
            <Table.Row>
                <Table.Cell>
                    <Input style={{ width: '100%' }} placeholder='Title' value={this.state.title} onChange={this.changeNewTitle} />
                </Table.Cell>

                <Table.Cell>
                    <Input style={{ width: '100%' }} placeholder='Description' value={this.state.description} onChange={this.changeNewDescription} />
                </Table.Cell>

                <Table.Cell>
                    <Dropdown value={this.state.bucket} allowAdditions search fluid selection onChange={this.changeNewBucket} options={this.state.buckets} onAddItem={this.handleAddition}/>
                </Table.Cell>

                <AddEditOptions todo={this.props.todo}
                    editTodo={this.editTodo}
                    createTodo={this.createTodo}
                    resetTodo={this.resetTodo}
                    cancelEdit={this.cancelEditing}
                />

            </Table.Row>
        )
    }
}

export default EditTodoRow;


// The option component decides the component usage

const AddEditOptions = (props) => {
    if (props.todo && props.todo.editing) {
        return (
            <Table.Cell>
                <Button color='green' onClick={props.editTodo} title="Edit Todo">
                    Edit
                </Button>
                < Button color='blue' onClick={props.cancelEdit} title="Cancel Edit">
                    Cancel
                </Button>
            </Table.Cell>
        )
    } else {
        return (
            <Table.Cell>
                <Button color='green' onClick={props.createTodo} title="Create Todo">
                    Create
                </Button>
                < Button color='blue' onClick={props.resetTodo} title="Reset">
                    Reset
                </Button>
            </Table.Cell>
        );
    }
}