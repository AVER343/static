import PropTypes from 'prop-types';

import IntroComponent from './intro'
import Work from './work';
import About from './about';
import Contact from './contact';
class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <IntroComponent {...this.props} close={close} />
        <Work  {...this.props} close={close} />


        <About  {...this.props} close={close} />
        <Contact  {...this.props} close={close} />

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main