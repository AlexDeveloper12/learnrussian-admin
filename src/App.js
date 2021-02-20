import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Calls from './API/Calls';
import axios from 'axios';
import "@fontsource/roboto";
import Swal from 'sweetalert2';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import PhrasesData from './components/PhrasesData';
import NavigationBar from './components/NavigatorBar';
import PhrasesGridContainer from './components/PhrasesGridContainer';
import AddPhraseModal from './components/AddPhraseModal';
import Loader from './components/Loader';

function App() {

  const [pronunciation, setPronunciation] = useState('');
  const [english, setEnglish] = useState('');
  const [russian, setRussian] = useState('');
  const [phrases, setPhrases] = useState([]);
  const [soundFileURL, setSoundFileURL] = useState('');
  const [greeting, setGreeting] = useState(false);
  const [general, setGeneral] = useState(false);
  const [language, setLanguage] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [searchData, setSearchData] = useState(phrases);


  const styles = {
    container: {
      marginTop: '5%',
      padding: '2%',
      marginLeft: '2%'
    }
  }

  const AddPhrase = () => {
    let errorString = '';

    const myData = JSON.stringify({
      pronunciation: pronunciation,
      english: english,
      russian: russian
    });

    if (pronunciation.length === 0) {
      errorString += 'Please enter a pronunciation value\n';
    }

    if (english.length === 0) {
      errorString += 'Please enter an English value\n';
    }

    if (russian.length === 0) {
      errorString += 'Please enter a Russian value\n';
    }

    if (errorString === '') {
      //if no errors then add phrase
      // Swal.fire({
      //   title: 'Great!',
      //   text: 'Phrase has been added!',
      //   icon: 'success'
      // });
      alert(myData)

    } else {
      //if errors then show the sweet alert
      // Swal.fire(        
      //   title: 'Error',
      //   text: errorString,
      //   icon: "error"
      // });
      alert(myData)
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
        console.log(response.data);
        setPhrases(response.data.message);
        setLoadingData(false);
        setSearchData(response.data.message);
      })
      .catch(error => {
        console.log('GetPhrases error: ' + error);
      })

  }

  useEffect(() => {
    GetPhrases();
  }, [])

  const customHandlerChange = (event) => {
    console.log(event);
    switch (event.target.name) {
      case 'pronunciation':
        setPronunciation(event.target.value);
        break;
      case 'english':
        setEnglish(event.target.value);
        break;
      case 'russian':
        setRussian(event.target.value);
        break;
      case 'soundfile':
        setSoundFileURL(event.target.value);
        break;
      default:
        break;
    }
  }

  const searchDataHandler = (event) => {
    //setting the entered data to lower case
    let value = event.target.value.toLowerCase();
  
    let result = []; //creating empty result array
    //setting resul equal to a filter of the phrases data 
    //and returning data that has data.BasicPhrasesDescription
    // value equal to the value entered into input box
    //we then set search data equal to this
    
    result = phrases.filter((data) => {
      return data.BasicPhrasesDescription.search(value) != -1;
    });

    setSearchData(result)

  }



  const toggleModal = () => {
    setAddModal(!addModal);
  }

  return (

    <div className="App">
      <div style={styles.container}>
        <NavigationBar />
        <Grid container spacing={10} justify="center">
          {loadingData ? <Loader loading={loadingData} /> : <PhrasesGridContainer
            phrasesData={searchData}
            toggleModal={toggleModal}
            changeHandler={customHandlerChange}
            addPhrase={AddPhrase}
            searchHandler={searchDataHandler}
          />}

        </Grid>

      </div>

      <AddPhraseModal
        open={addModal}
        pronunciation={pronunciation}
        english={english}
        russian={russian}
      />


    </div>
  );
}

export default App;
