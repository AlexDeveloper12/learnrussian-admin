import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Calls from './API/Calls';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'fontsource-roboto';
import NavigationBar from './components/NavigatorBar/NavigatorBar';
import PhrasesGridContainer from './components/PhrasesGridContainer/PhrasesGridContainer';
import Loader from './components/Loader/Loader';
import UpdatePhraseModal from './components/UpdatePhraseModal/UpdatePhraseModal';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { Brightness3Outlined, Brightness7Outlined, Add } from '@material-ui/icons';
import AddPhraseModal from './components/AddPhraseModal/AddPhraseModal';
import SearchPhrases from './components/SearchPhrases/SearchPhrases';


require('dotenv').config()

export const AppContext = createContext();

export const light = {
  palette: {
    type: 'light'
  },
}

export const dark = {
  palette: {
    type: 'dark'
  }
};


function App() {

  const [pronunciation, setPronunciation] = useState('');
  const [russian, setRussian] = useState('');
  const [phrases, setPhrases] = useState([]);
  const [soundFileURL, setSoundFileURL] = useState('');
  const [sortOrder, setSortOrder] = useState(0);
  const [greeting, setGreeting] = useState(false);
  const [general, setGeneral] = useState(false);
  const [language, setLanguage] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
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

  const [theme, setTheme] = useState(true);

  const [addModal, setAddModal] = useState(false);


  const icon = !theme ? <Brightness7Outlined /> : <Brightness3Outlined />

  const addIcon = <Add />;

  const appliedTheme = createMuiTheme(theme ? light : dark);

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
          setPronunciation('');
          setSortOrder();
          setSoundFileURL('');
          setRussian('');
          setCheckedObject({
            greeting: false,
            general: false,
            language: false
          });

          setAddModal(false);

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

    setSearchData(result);
    setGeneral(false);
    setGreeting(false);
    setLanguage(false);
    //when a user begins to search for a phrase we need to uncheck the radio buttons above

  }

  //RADIO BUTTON FILTERS

  const filterByPhraseType = (event) => {

    let value = event.target.value;
    console.log(event.target.checked);

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

    setUpdateModal(!updateModal);
    setUpdatePronun(item.Pronunciation);
    setUpdateRuss(item.BasicPhrasesDescription);
    setUpdateSoundURL(item.SoundFileName);
    setUpdateSortOrder(item.SortOrder);
    setPhraseID(item.BasicPhrasesID);
  }

  const deleteItem = (item) => {

    const { BasicPhrasesID } = item;

    const headerInfo = {
      'Content-Type': 'application/json'
    };

    axios({
      method: 'DELETE',
      url: `${Calls.basicphrase}/${BasicPhrasesID}`,
      headers: headerInfo
    })
      .then(response => {
        //reload 
        if (response.status === 200) {
          Swal.fire({
            title: 'Deleted',
            text: response.data.message,
            icon: "success"
          });
          GetPhrases(); //show sweet alert and then reload phrases
          //can maybe do a fade in fade out animation?
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Error deleting the phrase!',
            icon: "error"
          })
        }

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

          setUpdateModal(!updateModal);
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

  const toggleTheme = () => {
    setTheme(!theme)
  }

  const toggleAddModal = () => {
    setAddModal(!addModal);
  }

  return (
    <ThemeProvider theme={appliedTheme}>
      <div className="App">
        <div style={styles.container}>
          <NavigationBar
            icon={icon}
            toggleTheme={toggleTheme}
            toggleModal={toggleAddModal}
            addIcon={addIcon}
          />

          <AppContext.Provider
            value={{ deleteItem: deleteItem, phrasesCount: numOfPhrases, updateItem: updateItem, filterByPhraseType: filterByPhraseType, selectedFilter: selectedFilter }} >
            <Grid container justify="center" style={{ marginBottom: 45 }}>
              <Grid item>
                <SearchPhrases
                  changeHandler={searchDataHandler} />
              </Grid>
            </Grid>



            <Grid container spacing={10} justify="center">
              {loadingData ? <Loader loading={loadingData} /> : <PhrasesGridContainer
                phrasesData={searchData}
                toggleModal={toggleModal}
                changeHandler={customHandlerChange}
                deleteMethod={deleteItem}
              />}

            </Grid>
            {updateModal && <UpdatePhraseModal
              open={updateModal}
              toggleModal={toggleModal}
              russian={updateRuss}
              pronunciation={updatePronun}
              soundFileURL={updateSoundURL}
              changeHandler={customHandlerChange}
              sortOrder={updateSortOrder}
            />}

            {addModal && <AddPhraseModal
              open={addModal}
              pronunciation={pronunciation}
              russian={russian}
              soundFileURL={soundFileURL}
              sortOrder={sortOrder}
              add={AddPhrase}
              cbHandler={toggleCheckboxes}
              checkBoxObject={checkedObject}
              phraseChangeHandler={customHandlerChange}
              toggleAddModal={toggleAddModal}
            />}

          </AppContext.Provider>

        </div>
      </div>
    </ThemeProvider>
  );
}


const styles = {
  container: {
    marginTop: '5%',
    padding: '3%',
    marginLeft: '2%'
  }
}

export default App;
