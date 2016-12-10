import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as TodosActions from './actions/todos';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import '../css/style.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos
        };
    }

    render() {
        const { todos, todosActions } = this.props;
        return (
            <div>
                <h1 className={classNames('title')}>React Todo List</h1>
                <TodoAdd addTask={todosActions.addTask} />
                <TodoList
                    todos={todos}
                    saveTask={todosActions.editTask}
                    deleteTask={todosActions.deleteTask}
                    completeTask={todosActions.toggleTask}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.filter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        todosActions: bindActionCreators(TodosActions, dispatch)
    };
}

const TodoAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default TodoAppContainer;
