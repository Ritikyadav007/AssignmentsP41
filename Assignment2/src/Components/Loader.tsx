import React, { PureComponent } from 'react'
import './Loader.css'

export default class extends PureComponent {
    render() {
        return (
            <div><div className='spinner'>
                <div className='bounce1'></div>
                <div className='bounce2'></div>
                <div className='bounce3'></div>
            </div></div>
        )
    }
}
