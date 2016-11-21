import React, { PropTypes } from 'react';
import { space } from '../styles';
import { Link } from 'react-router';
import UserDetailsWrapper from './UserDetailsWrapper';
import UserDetails from './UserDetails';
import MainContainer from './MainContainer';
import Loading from './Loading';


function puke(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
    return props.isLoading === true
        ? <Loading text="Waiting"/>
        : <MainContainer>
            <h1>Confirm Players</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Player One'>
                     <UserDetails info={props.playersInfo[0]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Player Two'>
                    <UserDetails info={props.playersInfo[1]} />
                </UserDetailsWrapper>
            </div>
            <div className='col-sm-8 col-sm-offset-2'>
                <div className='col-sm-12' style={space}>
                    <button type="button" onClick={props.onInitiateBattle} className="btn btn-lg btn-success">
                        Initiate Battle!
                    </button>
                </div>
                <div className='col-sm-12' style={space}>
                    <Link to='/playerOne'>
                        <button type="button" className="btn btn-lg btn-danger">
                            Reselect Players
                        </button>
                    </Link>
                </div>
            </div>
        </MainContainer>
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
};

export default ConfirmBattle;