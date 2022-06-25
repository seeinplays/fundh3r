import { createGlobalStyle } from 'styled-components'
import avertaFont from '@gnosis.pm/safe-react-components'
import avertaBoldFont from '@gnosis.pm/safe-react-components'

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }

    body {
       height: 100%;
       margin: 0px;
       padding: 0px;
    }

    #root {
        height: 100%;
    }

    @font-face {
        font-family: 'Averta';
        src: local('Averta'), url(${avertaFont}) format('woff2')        
    }

    @font-face {
        font-family: 'Averta';
        src: local('Averta Bold'), url(${avertaBoldFont}) format('woff');
        font-weight: bold;
    }
`

export default GlobalStyle