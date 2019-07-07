import React from "react"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <header>
            <h1>お気に入りのYouTube動画リスト</h1>
        </header>
      </div>
    )
  }

}

export default Header