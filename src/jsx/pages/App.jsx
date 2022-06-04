import '../../css/pages/App.scss'
import DriveFilesList from '../components/filelist';
import HeaderInfo from '../components/header';

function App() {
  return (
    <div className="App">
      <div className="header">
        <HeaderInfo />
      </div>
      <div className="drivefileslist">
        <DriveFilesList/>
      </div>
    </div>
  )
}

export default App;
