  import React from 'react';
  import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
  import { Component } from 'react';
  import './App.css';
  import tasks from './ejemplo/tasts.json';
  // !COMPONETES
  import Tasks from './componests/Tasks';
  import Taskforms from "./componests/Taskforms";
  import Posts from './componests/posts'
  

  class App extends Component{

    // ! creamos una aplicacion en el state tiene algunas tareas de pruevas que son dato / datos lo queremos pasar por pantalla usamos el metodo render
    state = {
      tasks: tasks
    }

    addTask = (title, description) => {
      const newTask = {
        title: title,
        description: description,
        id: this.state.tasks.length
      }
      this.setState({
        tasks: [...this.state.tasks, newTask]
      })
    }

    deleteTask = (id) => {
      const newTasks = this.state.tasks.filter(task => task.id !== id)
      this.setState({tasks: newTasks})
    }

    checkDone = (id) => {
      const newTasks = this.state.tasks.map(task => {
        if (task.id === id) {
          task.done = !task.done
        }
        return task;
      });
      this.setState({tasks: newTasks})
    }
    // * usando render para mostrar los datos por pantalla cogiendo lo dato de state  
    render() {      
      return (
        // ! estado se lo pasamos a otro componeste llamado Tasks en espa;or tarea 
        <div>
          <Router>
          <Link to="/">Home</Link>
            <br/>
            <br/>
            <Link to="/posts">Posts</Link>
          <Routes>
            
              <Route exact path="/" render={() => {
                return <div>
                          <Taskforms addTask={this.addTask} />
                          <Tasks tasks={this.state.tasks} 
                          deleteTask={this.deleteTask} 
                          checkDone={this.checkDone}/>
                      </div>
              }}>
          </Route>
          <Route path='/posts' component={Posts}/>
        </Routes> 
        </Router>         
          <Posts/>
        </div>
      );
    }
  }
  export default App;
