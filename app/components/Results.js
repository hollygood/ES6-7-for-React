import React, { PropTypes } from 'react';
import { space } from '../styles';
import { Link } from 'react-router';

import UserDetailsWrapper from './UserDetailsWrapper';
import UserDetails from './UserDetails';
import MainContainer from './MainContainer';
import Loading from './Loading';

//you can now have components that are just normal functions if those
// components only have a render method and optional props.

function StartOver() {
    return (
        <div className="col-sm-12" style={space}>
            <Link to="playerOne">
                <button type="button" className="btn btn-lg btn-danger">Start Over</button>
            </Link>
        </div>
    )
}

function Results(props) {

    if (props.isLoading === true) {
        return (
            <Loading />
        )
    }

    if (props.scores[0] === props[1]) {
        return (
            <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver />
            </MainContainer>
        )
    }

    const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    const losingIndex = winningIndex === 0 ? 1 : 0;

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header='Winner'>
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>

                <UserDetailsWrapper header='Loser'>
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
                </UserDetailsWrapper>

            </div>
            <StartOver />
        </MainContainer>
    )
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};

export default Results;