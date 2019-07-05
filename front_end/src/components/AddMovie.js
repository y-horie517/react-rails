import React from "react"

class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initial_state()
  }

  initial_state = () => {
    return {
      title: "無題",
      description: "",
      url: "",
      // deadline:
    }
  }

  render() {
    const { title, description, url } = this.state
    return (
      <div>
        <h2>AddMovie</h2>
        <form onSubmit={this.handleOnSubmit}>
          <input
            required={true}
            onChange={event => this.handleOnChange(event, "title")}
            value={title}
          />
          <input
            onChange={event => this.handleOnChange(event, "description")}
            value={description}
          />
          <input
            onChange={event => this.handleOnChange(event, "url")}
            value={url}
          />
          <input type="submit" value="登録" />
        </form>
      </div>
    )
  }

  handleOnChange = (event, key) => {
    this.setState({ [key]: event.target.value })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.OnSubmitTitle(this.state)
    this.setState(this.initial_state())
  }
}

export default AddMovie