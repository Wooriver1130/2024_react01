import React from 'react';
import Book from './Book';

function Library(props) {
    return (
        <div className="App">
            <Book name="책1" numOfPage="123" /><hr />
            <Book name="책2" numOfPage="456" /><hr />
            <Book name="책3" numOfPage="789   " /><hr />
        </div>
    );
}

export default Library;