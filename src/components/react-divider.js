import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    style:React.PropTypes.object
  };

  static defaultProps = {
    style:{}
  };

  render(){
    return (
      <div
        style={this.props.style}
        className={classNames('react-divider',this.props.cssClass)}>
        {this.props.children}
      </div>
    );
  }
}
