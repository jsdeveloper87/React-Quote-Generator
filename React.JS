let index;
let lastIndex;

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:
        '"You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe."',
      author: "- Morpheus"
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    let quotes = [
      "All that we're asking in return is your cooperation in bringing a known terrorist to justice.",
      "You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes.",
      "Oh my god Persephone, how could you do this? You betrayed me.",
      "You're not human, are you?",
      "On my mark, give me full power, ninety degrees to lower left starboard.",
      "The machines don't care how old I am. They'll kill me just the same.",
      "Ever have that feeling where you’re not sure if you’re awake or dreaming?",
      "You are here because you know something. What you know, you can’t explain. But you feel it",
      "It is the question that drives us",
      "Time is always against us",
      "What is “real”? How do you define “real”?"
    ];
    let authors = [
      "- Agent Smith",
      "- Morpheus",
      "- Merovingian",
      "- Neo",
      "- Niobe",
      "- Kid",
      "- Neo",
      "- Morpheus",
      "- Trinity",
      "- Morpheus",
      "- Morpheus"
    ];
    let colors = [
      "#27AE61",
      "#FA6964",
      "#BFBA9A",
      "#16A086",
      "#E84C3D",
      "#EE82EE",
      "#DA70D6",
      "#FF00FF",
      "#00FFFF",
      "#7FFF00"
    ];

    let images = [
      "url(https://store-images.s-microsoft.com/image/apps.53029.9007199266525955.8c4385ac-fc48-4b5c-89e7-f1d71f13d5a4.e7cc24ff-3a7a-4062-bdcf-c2003317ebc3?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg)",
      "url(https://www.pcclean.io/wp-content/uploads/2019/05/QQ%E6%88%AA%E5%9B%BE20190504184227.png)",
      "url(https://static.vecteezy.com/system/resources/previews/000/151/795/non_2x/hallway-matrix-background-vector.jpg)",
      "url(https://store-images.s-microsoft.com/image/apps.53029.9007199266525955.8c4385ac-fc48-4b5c-89e7-f1d71f13d5a4.e7cc24ff-3a7a-4062-bdcf-c2003317ebc3?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg)",
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqcbbs677S6b43PG6oMYF1-oN_AhqJAAm-Ha1OSbHSqMLliYm)",
      "url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/rVDbiYwweiyehotmi/videoblocks-binary-code-black-and-green-background-with-digits-moving-on-screen-concept-of-digital-age-algorithm-binary-data-code-decryption-and-encoding-row-matrix-background_sapjg-2_m_thumbnail-full01.png)",
      "url(http://www.textures4photoshop.com/tex/thumbs/glitch-in-the-matrix-system-texture-sci-fi-background-714.jpg)",
      "url(https://codepen.io/P3R0/pen/MwgoKv/image/large.png)",
      "url(https://stmed.net/sites/default/files/the-matrix-revolutions-wallpapers-30077-3940339.jpg)",
      "url(https://wallup.net/wp-content/uploads/2016/01/184070-The_Matrix-Neo-quote-748x421.jpg)"
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

    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundImage = images[index];

    var op = 1; // initial opacity
    var timer = setInterval(function() {
      if (op <= 0.1) {
        clearInterval(timer);
        //document.getElementById("text").style.display = 'none';
        document.getElementById("text").style.color = colors[index];
        document.getElementById("author").style.color = colors[index];
        document.getElementById("new-quote").style.background = colors[index];
      }
      document.getElementById("text").style.opacity = op;
      document.getElementById("text").style.filter =
        "alpha(opacity=" + op * 100 + ")";
      document.getElementById("author").style.opacity = op;
      document.getElementById("author").style.filter =
        "alpha(opacity=" + op * 100 + ")";
      op -= op * 0.1;
    }, 50);

    setTimeout(() => {
      var op = 0.1; // initial opacity
      document.getElementById("text").style.display = "block";
      var timer = setInterval(function() {
        if (op >= 1) {
          clearInterval(timer);
        }
        document.getElementById("text").style.opacity = op;
        document.getElementById("text").style.filter =
          "alpha(opacity=" + op * 100 + ")";
        document.getElementById("author").style.opacity = op;
        document.getElementById("author").style.filter =
          "alpha(opacity=" + op * 100 + ")";
        op += op * 0.1;
      }, 10);
    }, 1000);

    setTimeout(() => {
      this.setState({
        quote: quotes[index],
        author: authors[index]
      });
    }, 1000);
  }

  render() {
    return (
      <div id="quote-box">
        <div className="container" id="text-border">
          <div id="text">{this.state.quote}</div>
        </div>
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
