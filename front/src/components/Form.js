import React from 'react';

const Form = () => {
    return (
        <div className="form-component">
            <div className="form">
                <form action="">
                    <input type="text" placeholder='Recherche' id='search-input'/>
                    <input type="submit" value="" />
                </form>
            </div>
        </div>
    );
};

export default Form;