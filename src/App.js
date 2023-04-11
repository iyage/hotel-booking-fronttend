import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import List from "./pages/List";
import NotFound from "./pages/NotFound";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaTimes } from "react-icons/fa";

const Modal = styled.div`
  height: 100%;
  width: 100%;
  z-index: 999999999999999;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  left: 0;
`
const ModalContainer = styled.div`
width: 82%;
padding: 0px 50px 0px 50px;
margin: auto;
`
const CloseModal = styled.p`
text-align: end;
padding: 5px 10px 0px 10px;
font-size: 20px;
color: white;
`
const galleryImage = 
[
{url:"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
{url:"https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
{url:"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
{url:"https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
{url:"https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
{url:"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
]


function App() {
  const [toggleModal,setToggleModal] = useState(false)
  function handleToggleModal()
{
  setToggleModal(!toggleModal)
}
 const baseChidren = galleryImage.map((imgUrl)=>{
  return(
    <img src={imgUrl.url} alt=''/>
  )
 })
const [galleryIndex,setGalleryIndex] = useState(0)

  return (
    <div style={{position:'relative'}}>
     {toggleModal&& <Modal>
      <CloseModal><FaTimes style={{cursor:'pointer'}} onClick={handleToggleModal}/></CloseModal>
      <ModalContainer>
      <Carousel  galleryImage={galleryImage}
      centerMode={true}
      centerSlidePercentage={95}
      selectedItem={galleryIndex}
      >
            {baseChidren}
            </Carousel>
            </ModalContainer>
        
      </Modal>}
  <NavBar/>
     <Header/>
    <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/hotels" element={<List/>}/>
  <Route path="/hotel/:id" element={<Hotel  handleToggleModal={handleToggleModal}  setGalleryIndex={setGalleryIndex} galleryImage={ galleryImage}/>}/>
  <Route path="*" element={<NotFound/>}></Route>
        </Routes>
       <Footer/>
    </div>
  );
}

export default App;
