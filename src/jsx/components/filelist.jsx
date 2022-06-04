import React from 'react';
import "../../css/components/fileList.scss"

const DriveFilesList = () => {

    const drive = [{"Title":"examplefile.odt","Size" : "0.0Gb"},{"Title":"examplefile1.odt","Size" : "0.0Gb"},{"Title":"examplefile2.odt","Size" : "0.0Gb"},{"Title":"examplefile3.odt","Size" : "0.0Gb"}]

    return (
        <div className="fileslist" id='fileslist'>
            <div className="headlist">
                <p className="drivetitle">🔒 Your files list : </p>
                <div className='sep'/>
            </div>
            {drive.map((file, i) => 
                <div className="fileblock" key={i}>
                    <p className="filetitle" key={i+file.Title}>Title: {file.Title}</p>
                    <p className="filesize" key={i+file.Size}>Size: {file.Size}</p>
                    <button className="delete" key={i+"delete"}><i className="fa-solid fa-trash"></i></button>
                    <button className="link" key={i+"link"}><i className="fa-solid fa-link"></i></button>

                </div>
            )}
        </div>
    );
};

export default DriveFilesList;