import React from 'react'
import User from './User'
import WhatsHappening from './WhatsHappening'

function Wrapper() {
    let wrapper = {
        display: 'grid',
        gridTemplateColumns: '2fr 3fr 2fr'
    }
    let border = {
        borderColor: 'lightgrey',
        borderStyle: 'solid'
    }
    let user = {
      borderStyle: 'solid',
      borderColor: 'lightgrey',
      width: '300',
      marginLeft: '20'

    };

    let centerColumn = {
        
    }

    return (
        <div style={wrapper} >
            <div style={user}>
                <User></User>
            </div>
            <div style={centerColumn}>
                <WhatsHappening></WhatsHappening>
            </div>

        </div>
    )
}

export default Wrapper