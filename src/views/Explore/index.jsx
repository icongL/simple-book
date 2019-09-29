import React, { PureComponent } from 'react'

export default class Explore extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static getDerivedStateFromProps(props, state) {
    return state
  }
  render() {
    return <div>Explore</div>
  }
  componnetDidMount() {}
  getSnapshotBeforeUpdate() {
    return null
  }
  componentDidUpdate() {}
  componentDidWillUnmount() {}
}
