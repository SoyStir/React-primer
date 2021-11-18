import React, { Component } from 'react'

export default class componentName extends Component {

    state = {
        posts: []
    }

    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        this.setState({posts: data})
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(posts => {
                        return <div key={posts.id}>
                            <h1>{posts.title}</h1>
                            <p>{posts.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
