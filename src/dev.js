import './dev.scss';
import ReactDivider from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-divider">
        <ReactDivider>我是有底线的....</ReactDivider>
        <ReactDivider>有形，无线的分隔线</ReactDivider>
        <ReactDivider>无语</ReactDivider>
        <ReactDivider>但还是很好看的分隔线</ReactDivider>
        <ReactDivider>我能自动扩展</ReactDivider>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
