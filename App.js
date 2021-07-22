import React, { useState } from 'react';
import './App.css';
import SidebarEdit from './Components/SidebarEdit'
import './Components/SidebarEdit.css'
import Navbar from './Components/Navbar'
import ImageCard from './Components/ImageCard'
import EditedImage from './Components/ShowImage'

function App() {

  const [editOptionData, setEditOptionData] = useState([
    {
      propertyName: "Blurr",
      min: 0,
      max: 100,
      value: 0,
      valueSlideBy: (176 / 100) * 0
    },
    {
      propertyName: "Brightness",
      min: 0,
      max: 200,
      value: 100,
      valueSlideBy: (176 / 200) * 100
    },
    {
      propertyName: "Contrast",
      min: 0,
      max: 200,
      value: 100,
      valueSlideBy: (176 / 200) * 100
    },
    {
      propertyName: "Grayscale",
      min: 0,
      max: 100,
      value: 0,
      valueSlideBy: (176 / 100) * 0
    },
    {
      propertyName: "Hue-rotate",
      min: 0,
      max: 360,
      value: 0,
      valueSlideBy: (176 / 360) * 0
    },
    {
      propertyName: "Invert",
      min: 0,
      max: 100,
      value: 0,
      valueSlideBy: (176 / 100) * 0
    },
    {
      propertyName: "Opacity",
      min: 0,
      max: 100,
      value: 100,
      valueSlideBy: (176 / 100) * 100
    },
    {
      propertyName: "Saturate",
      min: 0,
      max: 200,
      value: 100,
      valueSlideBy: (176 / 200) * 100
    },
    {
      propertyName: "Sepia",
      min: 0,
      max: 100,
      value: 0,
      valueSlideBy: (176 / 100) * 0
    }
  ]);

  const [savedImagesData, setSavedImagesData] = useState([
    {
      id: 0,
      image: 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284__340.jpg',
      blurr: 0,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      hue_rotate: 0,
      invert: 0,
      opacity: 100,
      saturate: 100,
      sepia: 0
    },
    {
      id: 1,
      image: 'https://cdn.pixabay.com/photo/2021/07/10/17/51/woman-6401957__340.jpg',
      blurr: 0,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      hue_rotate: 0,
      invert: 0,
      opacity: 100,
      saturate: 100,
      sepia: 0
    },
    {
      id: 2,
      image: 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284__340.jpg',
      blurr: 0,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      hue_rotate: 0,
      invert: 0,
      opacity: 100,
      saturate: 100,
      sepia: 0
    },
    {
      id: 3,
      image: 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284__340.jpg',
      blurr: 0,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      hue_rotate: 0,
      invert: 0,
      opacity: 100,
      saturate: 100,
      sepia: 0
    },
    {
      id: 4,
      image: 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284__340.jpg',
      blurr: 0,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      hue_rotate: 0,
      invert: 0,
      opacity: 100,
      saturate: 100,
      sepia: 0
    }
  ]);

  const [showWhichImage, setShowWhichImage] = useState(null)
  const [editSection, setEditSection] = useState(true)

  const imageStyle = {
    filter: `blur(${editOptionData[0].value}px) brightness(${editOptionData[1].value}%) contrast(${editOptionData[2].value}%) grayscale(${editOptionData[3].value}%) hue-rotate(${editOptionData[4].value}deg) invert(${editOptionData[5].value}%) opacity(${editOptionData[6].value}%) saturate(${editOptionData[7].value}%) sepia(${editOptionData[8].value}%)`
  }

  const [iconsStyle, setIconsStyle] = useState({
    display: 'none'
  });

  const [toSaveImageData,setToSaveImageData]=useState([
    {
      id: null,
      image: null,
      blurr: 0,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      hue_rotate: 0,
      invert: 0,
      opacity: 100,
      saturate: 100,
      sepia: 0
    }
  ]);

  const editValueChangeHandler = (event, position) => {
    const editOptionData_copy = [...editOptionData];
    editOptionData_copy[position].value = event.target.value;
    setEditOptionData(editOptionData_copy);
  }

  const dataResetValues = () => {
    const editOptionData_copy = [...editOptionData];
    editOptionData_copy[0].value = 0;
    editOptionData_copy[1].value = 100;
    editOptionData_copy[2].value = 100;
    editOptionData_copy[3].value = 0;
    editOptionData_copy[4].value = 0;
    editOptionData_copy[5].value = 0;
    editOptionData_copy[6].value = 100;
    editOptionData_copy[7].value = 100;
    editOptionData_copy[8].value = 0;
    setEditOptionData(editOptionData_copy);
  }

  const[ imagetoedit,setImagetoedit]=useState("https://cdn.pixabay.com/photo/2017/11/10/05/46/group-2935518__340.png")

  const loadFileHandler = event => {
    dataResetValues();
    setIconsStyle({ display: 'block' });
    const saveImage = URL.createObjectURL(event.target.files[0])
    setImagetoedit( saveImage);
    setToSaveImageData([
      {
        id: savedImagesData.length,
        image: saveImage,
        blurr: 0,
        brightness: 100,
        contrast: 100,
        grayscale: 0,
        hue_rotate: 0,
        invert: 0,
        opacity: 100,
        saturate: 100,
        sepia: 0
      }
    ]);
  }

  const applyFilter1 = () => {
    dataResetValues();
    const editOptionData_copy = [...editOptionData];
    editOptionData_copy[1].value = 117;
    editOptionData_copy[2].value = 120;
    editOptionData_copy[3].value = 100;
    setEditOptionData(editOptionData_copy);
  }
  const applyFilter2 = () => {
    dataResetValues();
    const editOptionData_copy = [...editOptionData];
    editOptionData_copy[1].value = 106;
    editOptionData_copy[2].value = 127;
    editOptionData_copy[7].value = 125;
    setEditOptionData(editOptionData_copy);
  }
  const applyFilter3 = () => {
    dataResetValues();
    const editOptionData_copy = [...editOptionData];
    editOptionData_copy[1].value = 95;
    editOptionData_copy[2].value = 70;
    editOptionData_copy[8].value = 39;
    setEditOptionData(editOptionData_copy);
  }
  const applyFilter4 = () => {
    dataResetValues();
    const editOptionData_copy = [...editOptionData];
    editOptionData_copy[2].value = 115;
    editOptionData_copy[4].value = 35;
    setEditOptionData(editOptionData_copy);
  }
  const applyFilter5 = () => {
    dataResetValues();
    const editOptionData_copy = [...editOptionData];
    editOptionData_copy[1].value = 125;
    editOptionData_copy[6].value = 79;
    editOptionData_copy[7].value = 111;
    setEditOptionData(editOptionData_copy);
  }
  const applyFilter6 = () => {
    dataResetValues();
    const editOptionData_copy = [...editOptionData];
    editOptionData_copy[3].value = 76;
    editOptionData_copy[4].value = 278;
    editOptionData_copy[7].value = 0;
    editOptionData_copy[8].value = 80;
    setEditOptionData(editOptionData_copy);
  }
  const applyFilter7 = () => {
    dataResetValues();
    const editOptionData_copy = [...editOptionData];
    editOptionData_copy[1].value = 117;
    editOptionData_copy[2].value = 121;
    editOptionData_copy[7].value = 128;
    setEditOptionData(editOptionData_copy);
  }
  const applyFilter8 = () => {
    dataResetValues();
    const editOptionData_copy = [...editOptionData];
    editOptionData_copy[1].value = 121;
    editOptionData_copy[2].value = 125;
    editOptionData_copy[5].value = 18;
    setEditOptionData(editOptionData_copy);
  }

  const closeOpenedImage = () => {
    dataResetValues();
    setIconsStyle({ display: 'none' });
    const image = document.getElementById('edit_image');
    image.src = "https://cdn.pixabay.com/photo/2017/11/10/05/46/group-2935518__340.png";
  }

  const saveEditedImage = () =>{
    const savedImagesData_copy=[...savedImagesData]
    const toSaveImageData_copy=[...toSaveImageData]
    toSaveImageData_copy[0].blurr=editOptionData[0].value;
    toSaveImageData_copy[0].brightness=editOptionData[1].value;
    toSaveImageData_copy[0].contrast=editOptionData[2].value;
    toSaveImageData_copy[0].grayscale=editOptionData[3].value;
    toSaveImageData_copy[0].hue_rotate=editOptionData[4].value;
    toSaveImageData_copy[0].invert=editOptionData[5].value;
    toSaveImageData_copy[0].opacity=editOptionData[6].value;
    toSaveImageData_copy[0].saturate=editOptionData[7].value;
    toSaveImageData_copy[0].sepia=editOptionData[8].value;
    savedImagesData_copy.unshift(toSaveImageData_copy[0])
    setSavedImagesData(savedImagesData_copy)
  }

  const deleteImageHandler = position => {
    const savedImagesData_copy = [...savedImagesData];
    savedImagesData_copy.splice(position, 1);
    setSavedImagesData(savedImagesData_copy);
  }

  const [viewImageStyle, setViewImageStyle] = useState([
    {
      blurr: 0,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      hue_rotate: 0,
      invert: 0,
      opacity: 100,
      saturate: 100,
      sepia: 0
    }
  ]);

  const viewImageHandler = position => {
    setShowWhichImage(savedImagesData[position].image);
    const viewImageStyle_copy=[...viewImageStyle];
    viewImageStyle[0].blurr=savedImagesData[position].blurr;
    viewImageStyle[0].brightness=savedImagesData[position].brightness;
    viewImageStyle[0].contrast=savedImagesData[position].contrast;
    viewImageStyle[0].grayscale=savedImagesData[position].grayscale;
    viewImageStyle[0].hue_rotate=savedImagesData[position].hue_rotate;
    viewImageStyle[0].invert=savedImagesData[position].invert;
    viewImageStyle[0].opacity=savedImagesData[position].opacity;
    viewImageStyle[0].saturate=savedImagesData[position].saturate;
    viewImageStyle[0].sepia=savedImagesData[position].sepia;
    setViewImageStyle(viewImageStyle_copy)
  }
  const backSavedImages = () => setShowWhichImage(null);

  const showEditedImageMarkup = <EditedImage
    image={showWhichImage}
    style={viewImageStyle[0]}
    back={backSavedImages}
  />

  const onClickStartEditingHandler = () =>{
    dataResetValues();
    setIconsStyle({display:'none'});
    setEditSection(true);
    setImagetoedit("https://cdn.pixabay.com/photo/2017/11/10/05/46/group-2935518__340.png")
  }
  const onClickMyGalleryHandler = () =>{
    setShowWhichImage(null); 
    setEditSection(false);
  }

  const editOptionMarkup = editOptionData.map((edit, index) =>
    <SidebarEdit
      key={index}
      propertyName={edit.propertyName}
      minValue={edit.min}
      maxValue={edit.max}
      editValue={edit.value}
      slideBy={parseFloat(176 / (edit.max)) * edit.value}
      onEditRangeChange={(event) => editValueChangeHandler(event, index)}
    />
  );

  const savedImagesMarkup = savedImagesData.map((card, index) =>
    <ImageCard
      key={card.id}
      image={card.image}
      style={{
        blurr: card.blurr,
        brightness: card.brightness,
        contrast: card.contrast,
        grayscale: card.grayscale,
        hue_rotate: card.hue_rotate,
        invert: card.invert,
        opacity: card.opacity,
        saturate: card.opacity,
        sepia: card.sepia
      }}
      deleteImage={() => deleteImageHandler(index)}
      viewImage={() => viewImageHandler(index)}
      />
  )

  const editSectionMarkup =
    <div className="edit_section_container">
      <div>
        <div className="editItem">
          <div className="editOption">
            <p>Filters</p>
          </div>
          <div>
            <img src='https://cdn.pixabay.com/photo/2012/10/30/15/55/valley-63564__340.jpg' className="filter_img filter1" alt='filter' onClick={applyFilter1} />
            <img src='https://cdn.pixabay.com/photo/2012/10/30/15/55/valley-63564__340.jpg' className="filter_img filter2" alt='filter' onClick={applyFilter2} />
            <img src='https://cdn.pixabay.com/photo/2012/10/30/15/55/valley-63564__340.jpg' className="filter_img filter3" alt='filter' onClick={applyFilter3} />
            <img src='https://cdn.pixabay.com/photo/2012/10/30/15/55/valley-63564__340.jpg' className="filter_img filter4" alt='filter' onClick={applyFilter4} />
            <img src='https://cdn.pixabay.com/photo/2012/10/30/15/55/valley-63564__340.jpg' className="filter_img filter5" alt='filter' onClick={applyFilter5} />
            <img src='https://cdn.pixabay.com/photo/2012/10/30/15/55/valley-63564__340.jpg' className="filter_img filter6" alt='filter' onClick={applyFilter6} />
            <img src='https://cdn.pixabay.com/photo/2012/10/30/15/55/valley-63564__340.jpg' className="filter_img filter7" alt='filter' onClick={applyFilter7} />
            <img src='https://cdn.pixabay.com/photo/2012/10/30/15/55/valley-63564__340.jpg' className="filter_img filter8" alt='filter' onClick={applyFilter8} />
          </div>
        </div>
        {editOptionMarkup}
      </div>

      <div className="image_section">
        <div>
          <label id="add_image" htmlFor="upload_image">Upload Image</label>
          <input type="file" id="upload_image" accept="image/*" onChange={(event) => loadFileHandler(event)}></input>
        </div>

        <div>
          <i style={iconsStyle} onClick={closeOpenedImage} className="fas fa-window-close icon close_icon"></i>
          <i style={iconsStyle} onClick={saveEditedImage} className="far fa-save icon save_icon"></i>
          <img style={imageStyle} id="edit_image" src={imagetoedit} alt="Upload_Image" />
        </div>
      </div>
    </div>;

  const page = () => {
    return (
      showWhichImage === null ? <div className='ImageCardContainer'>
        {savedImagesMarkup}
      </div> : showEditedImageMarkup)
  }

  return (
    <div className="App">
      <Navbar
        edit={onClickStartEditingHandler}
        gallery={onClickMyGalleryHandler} />

      {editSection ? editSectionMarkup : page()}

    </div>
  );
}

export default App;