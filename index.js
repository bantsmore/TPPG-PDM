import React, { Component } from 'react';
import { render } from 'react-dom';

import headstyles from './header.css';
import styles from './styles.css';

import List from './List';
import Input from './Input';


class Header extends Component {
	render(){
		return(
		<div className={headstyles.header}>
		T&PPG PDM
		<img src={require('C:/Users/dpadmore/Pictures/jlrlogo.png')} className={headstyles.headerimg}/>
		<div className={headstyles.headerline}/>
		</div>
		)
	}
}

class App extends Component{
	
	state = {
	todos: ['Splitting on knuckle', 'Wrinkling on flange', 'Infeasible to automate', 'Tool manufacture infeasible']
	}

	onAddTodo = (text) => {
		const {todos} = this.state
		this.setState({
			todos: [text, ...todos],
		})
	}

	onRemoveTodo = (index) => {
		const {todos} = this.state
		this.setState({
			todos: todos.filter((todo, i) => i !== index),
		})
	}
	
	styles = {
		container: {
			display: 'flex',
			flexDirection: 'column'
		}
	}
	
	render(){
		
		const {todos} = this.state
		
		return(
		
		<div>
			<Header />
			<Input
				placeholder={'Describe new issue & enter'}
				onSubmitEditing={this.onAddTodo}
			/>
			<List
				list={todos}
				onClickItem={this.onRemoveTodo}
			/>
		</div>
		)
	}
}

render(<App />, document.querySelector('#app'))


/* LOAD OF STUFF USED IN APP FOR TESTS
<Counter color={color} size={32}/>
			<Counter color={color} size={16}/>
			<Counter color={color} size={8}/>
			<Counter color={color} size={4}/>
			<input type={'button'} value={'Colour'} onClick={this.randomizeColor} />*/