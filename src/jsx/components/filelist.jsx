import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/components/fileList.scss"

const DriveFilesList = () => {

    const drive = [{"Title":"examplefile.odt","Size" : "0.0Gb"},{"Title":"examplefile1.odt","Size" : "0.0Gb"},{"Title":"examplefile2.odt","Size" : "0.0Gb"},{"Title":"examplefile3.odt","Size" : "0.0Gb"}]

    return (
        <div className="fileslist" id='fileslist'>
            {drive.map((file, i) => 
                <div className="fileblock" key={i}>
                    <p className="fileinfo" key={i}>Title: {file.Title} {file.Size}</p>
                </div>
            )}
        </div>
    );
};

export default DriveFilesList;