import React, {Component} from "react";


// ! componente
import Task from "./Task";
import "./Task.css"
import PropTypes from 'prop-types'


class Tasks extends Component{
    render(){
        // ! este componeste tasks lo que hacer es recorer cada una de esa tareas por cada recorido generar una unica tarea
        return this.props.tasks.map(task => 
        <Task task={task} 
        key={task.id} 
        deleteTask={this.props.deleteTask} 
        checkDone={this.props.checkDone}
        />);
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;