import React from 'react'

class Filter extends React.Component {
  state = {
    videos: [
      { title: 'React', length: 30 },
      { title: 'Redux', length: 20 },
      { title: 'React Router', length: 10 },
      { title: 'Testing', length: 40 },
      { title: 'Material UI', length: 50 },
    ]
  }

  filter = () => this.setState({filtered: true})

  unfilter = () => this.setState({filtered: false})

  render() {
    const videos = this.state.filtered ?
      this.state.videos.filter(video => video.length >= 30) :
      this.state.videos

    const button = this.state.filtered ?
      <button onClick={ this.unfilter }>Remove Filter</button> :
      <button onClick={ this.filter }>Filter</button>

    return (
      <div>
        { button }
        { videos.map( (video, i) => <div key={i}>{ video.title }</div>) }
      </div>
    );
  }
}

export default Filter
