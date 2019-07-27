let index;
let lastIndex;

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:
        '"You can never cross the ocean until you have the courage to lose sight of the shore."',
      author: "- Christopher Columbus"
    };
    this.changeQuote = this.changeQuote.bind(this);
  }
  
  
  changeQuote() {
    
    let quotes = [
      "Everything has beauty, but not everyone can see.",
      "Strive not to be a success, but rather to be of value.",
      "Every child is an artist. The problem is how to remain an artist once he grows up.",
      "Whether you think you can or you think you can’t, you’re right.",
      "Either write something worth reading or do something worth writing.",
      "We must balance conspicuous consumption with conscious capitalism.",
      "Your time is limited, so don’t waste it living someone else’s life.",
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.",
      "Happiness is not something readymade. It comes from your own actions.",
      "Everything you’ve ever wanted is on the other side of fear."
    ];
    let authors = [
      "- Confucius",
      "- Albert Einstein",
      "- Pablo Picasso",
      "- Henry Ford",
      "- Benjamin Franklin",
      "- Kevin Kruse",
      "- Steve Jobs",
      "- Joshua J. Marine",
      "- Zig Ziglar",
      "- Dalai Lama",
      "- George Addair"
    ];
    let colors = [
      "#FA6964",
      "#27AE61",
      "#BFBA9A",
      "#16A086",
      "#E84C3D",
      "#EE82EE",
      "#DA70D6",
      "#FF00FF",
      "#00FFFF",
      "#7FFF00"
    ];
    
    index = Math.ceil(Math.random() * 10);
    
    if (index == lastIndex) {
      if (index != 10) {
        index++;
      } else {
        index--;
      }
    }

    lastIndex = index;
    
    document.getElementById("text").style.color = colors[index];
    document.getElementById("author").style.color = colors[index];
    document.body.style.background = colors[index];
    document.getElementById("new-quote").style.background = colors[index];

    this.setState({
      quote: quotes[index],
      author: authors[index]
    });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.quote}</div>
        <div id="author">{this.state.author}</div>
        <div id="new-quote" onClick={this.changeQuote}>
          New quote
        </div>
        <a href="twitter.com/intent/tweet" target="blank" id="tweet-quote">
          <img
            src="https://help.twitter.com/content/dam/help-twitter/twitter-logo.png"
            id="tweet-img"
          />
        </a>
      </div>
    );
  }
}

ReactDOM.render(<Generator />, document.getElementById("app"));
