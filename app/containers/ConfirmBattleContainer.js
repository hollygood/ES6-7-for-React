import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import { getPlayersInfo } from '../utils/githubHelpers';

const ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState () {
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    componentDidMount () {
        const { query } = this.props.location;

        //use .bind(this)
        //or use var that = this;
        //fetch info from github and update state
        getPlayersInfo([query.playerOne, query.playerTwo])
            .then( (players) => {
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0], players[1]]
                })
            })
    },
    handleInitiateBattle () {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    },
    render () {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={this.handleInitiateBattle}
                playersInfo={this.state.playersInfo}
            />
        );
    }
});

export default ConfirmBattleContainer;