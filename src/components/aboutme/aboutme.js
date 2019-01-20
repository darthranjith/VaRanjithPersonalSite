import React, { Component } from 'react';

class Aboutme extends Component {
    componentDidMount = () => {
        let rotate_words = document.getElementsByClassName('rotate-words');
        if (rotate_words.length) {
            for (var index = 0, length = rotate_words.length; index < length; index++) {
                var currentElement = rotate_words[index];
                var totalWords = currentElement.querySelectorAll('span').length;
                var next_word_index = 0;
                currentElement.querySelectorAll('span')[0].classList.add('active');
                setInterval(() => {
                    next_word_index = next_word_index<totalWords-1?++next_word_index:0;
                    currentElement.querySelector('.active').classList.add('rotate-out');
                    currentElement.querySelector('.active').classList.remove('active');
                    currentElement.querySelectorAll('span')[next_word_index].classList.add('rotate-in');
                    currentElement.querySelectorAll('span')[next_word_index].classList.add('active');
                    currentElement.querySelectorAll('span')[next_word_index].classList.remove('rotate-out');
                    
                }, 3000);
            }
        }
    }

    render() {
        return (
            <div>
                <h2 className="section-title">
                    <span><i className="icon-guest"></i>A LITTLE ABOUT ME</span>
                </h2>
                <div className="intro">
                    <h2>
                        Hello. I am <span className="rotate-words">
                            <span>a Fullstack Developer.</span>
                            <span>a Freelancer.</span>
                            <span>an Inventor.</span>
                            <span>a ReactJS fan.</span>
                            <span>a Coffee lover.</span>
                        </span>
                        <br />
                        I live in Bangalore, Karnataka.
                        <br />
                        I Work for <strong>L&T</strong>
                        <br />
                    </h2>

                </div>
            </div>
        );
    }
}

export default Aboutme;