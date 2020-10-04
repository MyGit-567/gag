import React from 'react';
import LikeDisLike from './LikeDisLike'

var listOfImages = [];

class App extends React.Component {
    importAll(r) {
        return r.keys().map(r);
    }

    componentWillMount() {
        listOfImages = this.importAll(require.context('../public/uploads', false, /\.(png|jpe?g|svg|ico)$/));
    }

    render() {
        return (
          <div>
            <div className='container text-left mt-4'>
                <h4 className='display-4 text-center mb-4'>
                <i className='fab fa-react' /> All Memes </h4>
            </div>
            { listOfImages.map((image, index) =>  {
                return ( 
                    <div className="img-display">
                        <h3>{image.title}</h3>
                        <a href={image}>
                        <img className="img" key={index} src={image} alt="info" /> 
                        </a>
                        <LikeDisLike />
                    </div>
                );
            })}
          </div>
        )
    }
}

export default App;