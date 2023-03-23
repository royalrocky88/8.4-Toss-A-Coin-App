// Write your code here

import './index.css'

import {Component} from 'react'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImg: headImg,
    head: 0,
    tail: 0,
  }

  tossCoin = () => {
    const {head, tail} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    console.log(tossResult)

    let tossImage = ''
    let headCount = head
    let tailCount = tail

    if (tossResult === 0) {
      tossImage = headImg
      headCount += 1
    } else {
      tossImage = tailImg
      tailCount += 1
    }
    this.setState({
      tossImg: tossImage,
      head: headCount,
      tail: tailCount,
    })
  }

  render() {
    const {tossImg, head, tail} = this.state
    const total = head + tail
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="header-card">Coin Toss Game</h1>
          <p className="text-card">Heads (or) Tails</p>
          <img src={tossImg} alt="toss result" className="img-card" />
          <button type="button" className="btn" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="result-card">
            <p className="p-card">Total: {total}</p>
            <p className="p-card">Heads: {head} </p>
            <p className="p-card">Tails: {tail} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
