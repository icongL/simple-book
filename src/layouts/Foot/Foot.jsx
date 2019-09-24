import React,{ PureComponent } from 'react'

 
class Foot extends PureComponent {
	constructor (props) {
		super(props)
		this.state = {
			renderError: false
		}

	}
	static getDerivedStateFromProps (state, props) {
		return state
	}

	render () {
		if (this.state.renderError) { 
		 	return <div>Heade render error</div>
		}

		return (<div>
				Foot
			</div>)
	}
	componentDidMount () {

	}
	getSnapshotBeforeUpdate () {

		return null
	}
	componentDidUpdate () {

	}
	componentWillUnmount () {

	}
	static getDerivedStateFromError (error) {
		return {
      renderError: true
    }
	}
}

export default Foot