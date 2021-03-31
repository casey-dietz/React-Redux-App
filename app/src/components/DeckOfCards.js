import React, {useEffect} from "react"
import { connect } from "react-redux"

import { drawCard } from '../actions'

const DeckOfCards = (props, { card, isFetching, error }) => {
    useEffect(() => {
        props.drawCard()
    }, [props.drawCard]);

    if (props.error) {
        return <h2>We got an error: {error} </h2>
    }

    if (props.isFetching) {
        return <h2> Fetching a card for you!</h2>
    }

    return (
      <>
        <h2>You pulled a: {props.card}</h2>
        <button onClick={() => props.drawCard()}>Draw Card</button>
      </>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        card: state.value,
        error: state.error
    }
}

const mapDispatchToProps = {drawCard}

export default connect(mapStateToProps, mapDispatchToProps)(DeckOfCards)