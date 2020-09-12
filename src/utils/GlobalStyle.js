import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body {
        height: 100vh;
        width: 100%;
    }

    #root {
        width: 100%;
        height:100%;
    }

    .mx-auto {
        margin: 0px auto
    }
`