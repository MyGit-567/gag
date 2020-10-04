import React, { Component } from 'react';
import './App.css';
import ButtonWithLabelAndCounter from './ButtonWithLabelAndCounter';
import like from './images/like-icon.png'
import dislike from './images/dislike-icon.png'
import count from './images/click-icon.png'

class App extends Component {
    constructor() {
      super();
      this.state = {
        likeCount: 0,
        dislikeCount: 0,
        clickOnImageCount: 0,
        likeButtonClicked: false, 
        dislikeButtonClicked: false,
      };
      this.clickLike = this.clickLike.bind(this);
      this.clickDislike = this.clickDislike.bind(this);
      this.clickOnImage = this.clickOnImage.bind(this);
    }
    //this function undoes a like by the user by decrementing the like count and setting its clicked status to false
    undoLike() {
      this.setState({
        likeCount: this.state.likeCount - 1,
        likeButtonClicked: false
      });
    }
    //this function undoes a dislike by the user by decrementing the dislike count and setting its clicked status to false
    undoDislike() {
      this.setState({
        dislikeCount: this.state.dislikeCount - 1, 
        dislikeButtonClicked: false
      });
    }

    //this function is invoked within the LikeButton component when the user clicks on the like button
    clickLike() {
      /*if like has not been clicked yet, then increment like count, 
      set its clicked status to true*/
      if (!this.state.likeButtonClicked) {
        this.setState({
          likeCount: this.state.likeCount + 1,
          likeButtonClicked: true
        });

        /*if the user clicks like after having previosuly clicked dislike, 
        the dislike is undone*/
        if (this.state.dislikeButtonClicked) this.undoDislike();
      } else {
        //if the user clicks like after previously clicking like, the like is undone
        this.undoLike();
      }
    }

    //just like the functionality of clickLike, but flipped
    clickDislike() {
      if (!this.state.dislikeButtonClicked) {
        this.setState({
          dislikeCount: this.state.dislikeCount + 1,
          dislikeButtonClicked: true
        });
        if (this.state.likeButtonClicked) this.undoLike();
      } else {
        this.undoDislike();
      }
    }

    clickOnImage() {
        this.setState({
          clickOnImageCount: this.state.clickOnImageCount + 1,
        });
    }

  render() {
    return (
      <div>
          <div>
            <div className="myButton-display">
            {/*LIKE BUTTON: generic button function component with label and counter is passed relevant props for like functionality*/}
              <ButtonWithLabelAndCounter
                buttonLabel={<img src={like} alt=""/>}
                countValue={this.state.likeCount}
                className="like-button"
                clickedClass="liked"
                clickedStatus={this.state.likeButtonClicked}
                clickFunction={this.clickLike}>
              </ButtonWithLabelAndCounter>
            {/*DISLIKE BUTTON: generic button function component with label and counter is passed relevant props for dislike and dislike functionality*/}
              <ButtonWithLabelAndCounter
                buttonLabel={<altimg src={dislike} alt=""/>}
                countValue={this.state.dislikeCount}
                className="dislike-button"
                clickedClass="disliked"
                clickedStatus={this.state.dislikeButtonClicked}
                clickFunction={this.clickDislike}>
              </ButtonWithLabelAndCounter>
              <ButtonWithLabelAndCounter
                buttonLabel={<img src={count} alt=""/>}
                countValue={this.state.clickOnImageCount}
                className="counter"
                clickedClass="counter"
                clickedStatus=""
                clickFunction={this.clickOnImage}>
              </ButtonWithLabelAndCounter>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
