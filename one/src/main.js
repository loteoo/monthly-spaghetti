import ReactDOM from 'react-dom'

// Import best-practices css defaults
import 'sanitize.css'
import 'sanitize.css/typography.css'
import 'sanitize.css/forms.css'

// Global styling
import './global.css'

// import root App component
import App from './App'

// Initialize the app on the #app div
ReactDOM.render(<App />, document.getElementById('app'))
