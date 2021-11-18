import React, {Component} from "react";
import PropTypes from 'prop-types';



class Task extends Component{
    StyleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            TextDecoration: this.props.task.done ? 'overline' : 'none'
        } 
    }

    render(){
        const {task} = this.props;
// ! toma cada uno de eso dato y lo pintamos en una etiqueta o div
        return <div style={this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" 
            onChange={this.props.checkDone.bind(this, task.id)}/>
            <button style={btnDelete}
            onClick={this.props.deleteTask.bind(this, task.id)}>
                x
            </button>
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',

}

export default Task;

// ! una aplicacion que divide los dato en multiple componente puesdes esta en el mismo archico