import React, { Component } from 'react'
import { render } from 'react-dom'

const randomColor = () => '#' + Math.random().toString(16).substr(-6)

class Counter extends Component {
	state = {count: 1}
	componentDidMount(){
		setInterval(() => {
			this.setState({count: this.state.count * 1.1})
	}, 1)
}

render(){
	const {count} = this.state
	const {color, size} = this.props
	
	return(
	<div style={{color, fontSize: size}}>
		{count}
		</div>
		)
	}
}

class App extends Component{
	
	randomizeColor = () => this.setState({color: randomColor()})
	
	state = {
		color: randomColor
	}
	
	render(){
		const {color} = this.state
		
		const style = {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		}
		
		return(
		<div style={style}>
			<Counter color={color} size={32}/>
			<Counter color={color} size={16}/>
			<Counter color={color} size={80}/>
			<Counter color={color} size={60}/>
			<input type={'button'} value={'Colour'} onClick={this.randomizeColor} />
		</div>
		)
	}
}

render(<App />, document.querySelector('#app'))
