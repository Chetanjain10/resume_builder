import React from 'react'
import {skinCodes} from '../../constants/typeCodes'
import * as actionTypes from '../../actions/actionTypes'
import {connect} from 'react-redux'
import * as documentActions from './../../actions/documentActions'
import {useHistory} from 'react-router-dom'
function GettingStarted(props){

}

const mapStateToProps=(state)=>{
    return {
        document :state.document
    }
}

export default connect()(GettingStarted);
