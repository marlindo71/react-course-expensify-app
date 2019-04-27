import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>asd</h1>
        <p>asdasd: {props.info}</p>
        {console.log(props)}
    </div>
);

const withAdmin = (WrappedComponent) => {
    return (props) => (
        <div>
            <h1>dasda</h1>
            <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo = withAdmin(Info);

ReactDOM.render(<AdminInfo isAdmin = {true} info="marlon" />, document.getElementById('app'));