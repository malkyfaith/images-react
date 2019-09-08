import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: [],
        isLoading: false
    }
    render() {
        return (<React.Fragment>
            <div className="ui container" style={{ padding: '20px', border: '1px solid lightgrey' }}>
                {this.state.isLoading ? <div className="ui active inline loader"></div> : ''}
                <SearchBar onSearch={this.onSearch} />
                <ImageList data={this.state.images}/>
            </div>
        </React.Fragment>)
    }
    onSearch = async (key) => {
        this.setState({isLoading: true})
        const response = await unsplash.get('/search/photos', {
            params: {
                query: key
            }
        });
        this.setState({
            images: response.data.results,
            isLoading: false

        })
    }
}


// import React, { useState } from 'react';
// import SearchBar from './SearchBar';
// import unsplash from '../api/unsplash';
// import ImageList from './ImageList';

// const App = () => {
//     const [images, setImages] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     const onSearch = async (key) => {
//         setIsLoading(true)
//         const response = await unsplash.get('/search/photos', {
//             params: {
//                 query: key
//             }
//         });
//         setImages(response.data.results);
//         setIsLoading(false)
//     }

//     return (
//         <div className="ui container" style={{ padding: '20px', border: '1px solid lightgrey' }}>
//             {isLoading ? <div className="ui active inline loader"></div> : ''}
//             <SearchBar onSearch={onSearch} />
//             <ImageList data={images} />
//         </div>
//     );
// }

export default App;



