import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Calls from './API/Calls';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'fontsource-roboto';
import NavigationBar from './components/NavigatorBar';
import PhrasesGridContainer from './components/PhrasesGridContainer';
import Loader from './components/Loader';
import UpdatePhraseModal from './components/UpdatePhraseModal';

require('dotenv').config()

export const AppContext = createContext();


function App() {

  const [pronunciation, setPronunciation] = useState('');
  const [russian, setRussian] = useState('');
  const [phrases, setPhrases] = useState([]);
  const [soundFileURL, setSoundFileURL] = useState('');
  const [sortOrder, setSortOrder] = useState(0);
  const [greeting, setGreeting] = useState(false);
  const [general, setGeneral] = useState(false);
  const [language, setLanguage] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [searchData, setSearchData] = useState(phrases);
  const [checkedObject, setCheckedObject] = useState({
    greeting: false,
    general: false,
    language: false
  });
  const [numOfPhrases, setNumOfPhrases] = useState(0);

  const [updatePronun, setUpdatePronun] = useState('');
  const [updateRuss, setUpdateRuss] = useState('');
  const [updateSoundURL, setUpdateSoundURL] = useState('');
  const [updateSortOrder, setUpdateSortOrder] = useState(0);
  const [phraseID, setPhraseID] = useState(0);

  const [selectedFilter, setSelectedFilter] = useState('');


  const styles = {
    container: {
      marginTop: '5%',
      padding: '3%',
      marginLeft: '2%'
    }
  }

  const AddPhrase = () => {
    let errorString = '';

    if (pronunciation.length === 0) { //if pronunciation empty
      errorString += 'Please enter a pronunciation value<br/>';
    }

    if (russian.length === 0) { //if russian/english phrase empty
      errorString += 'Please enter a Russian value<br/>';
    }

    if (sortOrder.length === 0) {
      errorString += 'Please enter a sort order value<br/>';
    }

    if (/[a-zA-Z]/.test(sortOrder)) { //if sort order contains a string value
      errorString += 'Please ensure the sort order value is a number only<br/>';
    }

    //if all of the checkboxes are unchecked

    if (checkedObject['general'] === false && checkedObject['greeting'] === false && checkedObject['language'] === false) {
      errorString += 'Please ensure you check one of the 3 checkboxes<br/>';
    }

    if (errorString === '') {

      const myData = JSON.stringify({
        pronunciation: pronunciation,
        description: russian,
        soundFileName: soundFileURL,
        isGreetingPhrase: greeting,
        isGeneralPhrase: general,
        isLanguagePhrase: language,
        sortOrder: sortOrder

      });
      const headerInfo = {
        'Content-Type': 'application/json'
      };


      axios({
        method: 'POST',
        url: Calls.addbasicphrase,
        data: myData,
        headers: headerInfo
      })
        .then(responseData => {
          //if no errors then add phrase
          Swal.fire({
            title: 'Great!',
            text: responseData.data.message,
            icon: 'success'
          });
          GetPhrases();

        })
        .catch(error => {

          console.log('Error posting basic phrase: ' + error);
          Swal.fire({
            title: 'Unsuccessful!',
            text: error.message,
            icon: 'error'
          });
        })

    } else {

      Swal.fire({
        title: 'Unsuccessful!',
        icon: 'error',
        html: errorString
      });
    }

  }

  const GetPhrases = () => {
    axios({
      method: 'GET',
      url: Calls.phrases,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {


        setPhrases(response.data.message);
        setLoadingData(false);
        setSearchData(response.data.message);
        setNumOfPhrases(response.data.message.length);
        console.log(response.data.message[0].isGeneralPhrase.data[0]);

      })
      .catch(error => {
        console.log('GetPhrases error: ' + error);
      })

  }

  useEffect(() => {
    GetPhrases();
  }, [])

  const customHandlerChange = (event) => {
    let value = event.target.value;
    console.log(event.target.value);
    console.log(event.target.name);
    switch (event.target.name) {
      case 'pronunciation':
        setPronunciation(value);
        break;
      case 'russian':
        setRussian(value);
        break;
      case 'sortorder':
        setSortOrder(value);
        break;
      case 'soundfile':
        setSoundFileURL(value);
        break;
      case 'updatepronunciation':
        setUpdatePronun(value)
        break;
      case 'updaterussian':
        setUpdateRuss(value);
        break;
      case 'updatesoundfile':
        setUpdateSoundURL(value);
        break;
      case 'updatesortorder':
        setUpdateSortOrder(value);
        break;
      default:
        break;
    }
  }

  const searchDataHandler = (event) => {
    //setting the entered data to lower case
    let value = event.target.value;

    let result = []; //creating empty result array
    //setting resul equal to a filter of the phrases data 
    //and returning data that has data.BasicPhrasesDescription
    // value equal to the value entered into input box
    //we then set search data equal to this

    result = phrases.filter((data) => {

      return data.BasicPhrasesDescription.toLowerCase().search(value) != -1;


    });

    setSearchData(result)

  }

  //RADIO BUTTON FILTERS

  const filterByPhraseType = (event) => {

    let value = event.target.value;

    let filterResult = phrases.filter((data) => {
      let filterValueArray = []
      switch (value) {
        case 'greeting':
          filterValueArray = data.isGreetingPhrase.data[0] === 1
          break;
        case 'general':
          filterValueArray = data.isGeneralPhrase.data[0] === 1
          break;
        case 'language':
          filterValueArray = data.isLanguagePhrase.data[0] === 1
          break;
      }

      return filterValueArray
    });

    console.log(filterResult);

    setSelectedFilter(event.target.value);
    setSearchData(filterResult);




  }

  //TOGGLE CHECKBOXES

  const toggleCheckboxes = (event) => {
    let greeting = false;
    let general = false;
    let language = false;
    console.log(event.target.checked);
    console.log('toggleCheckboxes');
    switch (event.target.name) {
      case 'greetingphrase':
        greeting = true;
        break;
      case 'generalphrase':
        general = true;
        break;
      case 'languagephrase':
        language = true;
        break;
    }

    setGreeting(greeting);
    setGeneral(general);
    setLanguage(language);
    setCheckedObject(prevState => ({
      ...prevState,
      greeting: greeting,
      general: general,
      language: language
    }));

  }

  //TOGGLE MODAL

  const toggleModal = (item) => {
    setAddModal(!addModal);
    setUpdatePronun(item.Pronunciation);
    setUpdateRuss(item.BasicPhrasesDescription);
    setUpdateSoundURL(item.SoundFileName);
    setUpdateSortOrder(item.SortOrder);
    setPhraseID(item.BasicPhrasesID);

  }

  const deleteItem = (itemID) => {

    const headerInfo = {
      'Content-Type': 'application/json'
    };

    axios({
      method: 'DELETE',
      url: `${Calls.phrases}/${itemID}`,
      headers: headerInfo
    })
      .then(response => {
        //reload 

      })
      .catch(error => {
        console.log('deleteItem error: ' + error);
      })
  }

  const updateItem = (item) => {
    const myData = JSON.stringify({
      Pronunciation: updatePronun,
      BasicPhrasesDescription: updateRuss,
      soundFileURL: updateSoundURL,
      sortOrder: updateSortOrder
    });

    //send as json data

    const headerInfo = {
      'Content-Type': 'application/json'
    };

    axios({
      method: 'PUT',
      url: `${Calls.basicphrase}/${phraseID}`,
      data: myData,
      headers: headerInfo
    })
      .then(response => {

        if (response.status === 200) {

          setAddModal(!addModal);
          Swal.fire({
            title: 'Update!',
            text: 'Phrase successfully updated!',
            icon: 'success'
          });

          GetPhrases(); //retrieve phrases after we have updated them to see changes
        }


      })
      .catch(error => {
        console.log('updateItem: ' + error)
      })

  }

  return (

    <div className="App">
      <div style={styles.container}>
        <NavigationBar />
        <AppContext.Provider value={{ deleteItem: deleteItem, phrasesCount: numOfPhrases, updateItem: updateItem, filterByPhraseType: filterByPhraseType, selectedFilter: selectedFilter }} >
          <Grid container spacing={10} justify="center">
            {loadingData ? <Loader loading={loadingData} /> : <PhrasesGridContainer
              phrasesData={searchData}
              toggleModal={toggleModal}
              changeHandler={customHandlerChange}
              addPhrase={AddPhrase}
              searchHandler={searchDataHandler}
              checkBoxHandler={toggleCheckboxes}
              checkBoxValues={checkedObject}
            />}

          </Grid>
          {addModal ? <UpdatePhraseModal
            open={addModal}
            toggleModal={toggleModal}
            russian={updateRuss}
            pronunciation={updatePronun}
            soundFileURL={updateSoundURL}
            changeHandler={customHandlerChange}
            sortOrder={updateSortOrder}
          /> : null}

        </AppContext.Provider>

      </div>





    </div>
  );
}

export default App;
