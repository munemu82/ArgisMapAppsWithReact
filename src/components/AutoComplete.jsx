import React, {useState} from 'react';
//import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Typeahead } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';

//import options from './data';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import options from './data';

const SEARCH_URI = 'https://api.github.com/search/users';

const AutoComplete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState([]);
  //const [options, setOptions] = useState(options);

 /* const handleSearch = (query) => {
    setIsLoading(true);
    fetch(`${SEARCH_URI}?q=${query}+in:login&page=1&per_page=50`)
      .then((resp) => resp.json())
      .then(({ items }) => {
        /*const options = items.map((i) => ({
          avatar_url: i.avatar_url,
          id: i.id,
          login: i.login,
        }));

        setOptions(items);
        setIsLoading(false);
      });
  };
*/
  const filterBy = () => true;

  return (
    <Typeahead
      id="basic-example"
      onChange={setSelected}
      options={options}
      placeholder="Choose a state..."
      selected={selected}
      
    />
  );
};

export default AutoComplete;
