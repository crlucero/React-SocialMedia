import React from 'react'
import PropTypes from 'prop-types'

function Feed(props) {
    let feedList = {
        display: 'grid',
        gridTemplateColumns: '1fr 6fr',
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderWidth: '1.5'
    }
    let profileIcon = {
        borderStyle: 'solid',
        borderColor: 'tan',
        height: '40',
        width: '40',
        backgroundColor: 'tan',
        margin: '20'


    }
    let text = {
        textAlign: 'left'
    }
    let userName = {
        fontWeight: 'bold'
    }

    return (
      <div style={feedList}>
        <div>
          <div style={profileIcon} />
        </div>
        <div>
          <p style={userName}>Lorem Ipsum</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>

        </div>
        <div>
            <p style={text}>{props.text}</p>
        </div>
      </div>
    );
}

Feed.propTypes = {
    text: PropTypes.string,
    color: PropTypes.color
}

export default Feed;