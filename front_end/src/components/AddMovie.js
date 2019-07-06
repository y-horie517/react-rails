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
      url: ""
    }
  }

  render() {
    const { title, description, url } = this.state
    return (
      <div>
        <h2>AddMovie</h2>
        <form onSubmit={this.handleOnSubmit}>
          <label>動画タイトル
            <input
              required={true}
              onChange={event => this.handleOnChange(event, "title")}
              value={title}
            />
          </label><br />
          <label>動画詳細
            <input
              onChange={event => this.handleOnChange(event, "description")}
              value={description}
            />
          </label><br />
          <label>URL
            <input
              onChange={event => this.handleOnChange(event, "url")}
              value={url}
            />
          </label><br />
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
    alert('submitted: ' + this.state);
    // this.props.OnSubmitTitle(this.state)
    // this.setState(this.initial_state())
  }
}

export default AddMovie