import React, { Component } from 'react';
import * as TodoActions from '../actions/todoActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import TodoTable from '../components/todoTable';

export class TodoContainer extends Component {

    createTodo = (todo) => {
        this.props.actions.createTodo(todo)
    }

    startEditing = (id) => {
        this.props.actions.startEditing(id)
    }
    cancelEditing = (id) => {
        this.props.actions.cancelEditing(id)
    }
    editTodo = (todo) => {
        this.props.actions.updateTodo(todo)
    }
    completeTodo = (todo) => {
        this.props.actions.updateTodo({ ...todo, status: !todo.status })
    }

    deleteTodo = (todo) => {
        this.props.actions.deleteTodo(todo)
    }

    getBuckets() {
        let allBuckets = new Set(this.props.todos.map(e => e.bucket));
        allBuckets.delete('Default');
        var finalBucketList = [...allBuckets].sort();
        finalBucketList.unshift('Default');
        return finalBucketList.map((e, _i) => { return { key: _i, text: e, value: e, } })
    }

    renderBuckets() {
        let buckets = this.getBuckets();
        return buckets.map(e => {
            return <TodoTable
                key={e.key}
                todosStatus={e.text}
                todos={this.props.todos.filter(todo => todo.bucket === e.text)}
                startEditing={this.startEditing}
                cancelEditing={this.cancelEditing}
                editTodo={this.editTodo}
                completeTodo={this.completeTodo}
                deleteTodo={this.deleteTodo}
                buckets={buckets}
            />
        })
    }


    render() {
        return (
            <div className="todo-container">
                <TodoTable isCreateMode={true} createTodo={this.createTodo} buckets={this.getBuckets()}/>
                <br />
                {this.renderBuckets()}
                <br />
            </div>
        );
    }
}

TodoContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);