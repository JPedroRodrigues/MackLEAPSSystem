import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button1 from './DataButtons1';
import Button2 from './DataButtons2';
import PublicationList from './PublicationList';
import publications from './PublicationsData';
import UserList from './UsersList'; 
import users from './UserData';
import CollaboratorList from './CollaboratorsList'; 
import collaborators from './CollaboratorsData';

function App() {
  const [activeSection, setActiveSection] = useState('publicationList');
  const [typeOrdenation, setTypeOrdenation] = useState(0);
  const [filterActive, setFilterActive] = useState(false);


  function JavaScriptCode() {
    useEffect(() => {
      const btn01 = document.getElementById('btnContentId1');
      const btn02 = document.getElementById('btnContentId2');
      const btn03 = document.getElementById('btnContentId3');
      const btn04 = document.getElementById('btnContentId4');
      const btn05 = document.getElementById('btnContentId5');
      const btn06 = document.getElementById('btnContentId6');

      const buttons1 = document.querySelectorAll('.btnContent-1');
      const buttons2 = document.querySelectorAll('.btnContent-2');

      const rightContainer = document.getElementById('rightContainer');
      const scrollableSpace = document.querySelector('.scrollable-space');

      rightContainer.addEventListener('scroll', () => {
        scrollableSpace.style.bottom = -rightContainer.scrollTop + 'px';
      });

      btn01.addEventListener('click', function () {
        rightContainer.scrollTop = 0;
        setActiveSection('publicationList');
        toggleButtonState(btn01, btn02, btn03);
        toggleButtonOpacity(btn01, btn02, btn03);
        setFilterActive(false);
      });
    
      btn02.addEventListener('click', function () {
        rightContainer.scrollTop = 0;
        setActiveSection('usersList');
        toggleButtonState(btn02, btn01, btn03);
        toggleButtonOpacity(btn02, btn01, btn03);
        setFilterActive(false);
      });
    
      btn03.addEventListener('click', function () {
        rightContainer.scrollTop = 0;
        setActiveSection('collaboratorsList');
        toggleButtonState(btn03, btn01, btn02);
        toggleButtonOpacity(btn03, btn01, btn02);
        setFilterActive(false);
      });

      btn04.addEventListener('click', function() {
        rightContainer.scrollTop = 0;
        toggleButtonOpacity(btn04, btn05, btn06);
        setTypeOrdenation(1);
        setFilterActive(true);
      });

      btn05.addEventListener('click', function() {
        rightContainer.scrollTop = 0;
        toggleButtonOpacity(btn05, btn04, btn06);
        setTypeOrdenation(2);
        setFilterActive(true);
      });

      btn06.addEventListener('click', function() {
        rightContainer.scrollTop = 0;
        toggleButtonOpacity(btn06, btn04, btn05);
        setTypeOrdenation(3);
        setFilterActive(true);
      });

      function handleButtonClick(button, buttons, bgColor, textColor) {
        buttons.forEach(btn => {
          btn.style.backgroundColor = '';
          btn.querySelector('.paragraphContent').style.color = '';
        });
        if (button.style.backgroundColor !== bgColor) {
          button.style.backgroundColor = bgColor;
          button.querySelector('.paragraphContent').style.color = textColor;
        }
      }

      function resetButtonsColor(buttons) {
        buttons.forEach(button => {
            button.style.backgroundColor = '';
            button.style.opacity = '0.7';
            button.querySelector('.paragraphContent').style.color = '';
        });
      }

      buttons1.forEach(button => {
        button.addEventListener('click', () => {
          handleButtonClick(button, buttons1, '#FFF', '#e1001e');
          resetButtonsColor(buttons2);
        });
      });

      buttons2.forEach(button => {
        button.addEventListener('click', () => {
          handleButtonClick(button, buttons2, '#e1001e', '#FFF');
        });
      });

    function toggleButtonState(activeButton, inactiveButton1, inactiveButton2) {
      activeButton.classList.add('active');
      inactiveButton1.classList.remove('active');
      inactiveButton2.classList.remove('active');
      activeButton.classList.remove('inactive');
      inactiveButton1.classList.add('inactive');
      inactiveButton2.classList.add('inactive');
    }

    function toggleButtonOpacity(activeButton, inactiveButton1, inactiveButton2){
      activeButton.style.opacity = '1';
      inactiveButton1.style.opacity = '0.7';
      inactiveButton2.style.opacity = '0.7';
    }

    function checkScroll(contentId) {
      const container = document.getElementById('rightContainer');
      const content = document.getElementById(contentId);

      if (!container || !content) {
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const buttons = content.querySelectorAll('.btnContent-3');

      buttons.forEach((button) => {
        const buttonRect = button.getBoundingClientRect();
        if (buttonRect.top < containerRect.top || buttonRect.bottom > containerRect.bottom) {
          button.classList.add('fade-on-scroll');
        } else {
          button.classList.remove('fade-on-scroll');
        }
      });
    }

    const container = document.getElementById('rightContainer');
    if (container) {
      container.addEventListener('scroll', () => checkScroll('rightContainerContent-1'));
      container.addEventListener('scroll', () => checkScroll('rightContainerContent-2'));
      container.addEventListener('scroll', () => checkScroll('rightContainerContent-3'));
    }

    window.addEventListener('load', () => {
      checkScroll('rightContainerContent-1');
      checkScroll('rightContainerContent-2');
      checkScroll('rightContainerContent-3');
    });
  }, []);

    return null; 
  }
  return (
      <div className='mainContent'>
          <MainTitle />
          <MainContainer activeSection={activeSection} typeOrdenation={typeOrdenation} filterActive={filterActive} />
          <JavaScriptCode />
      </div>
  );
};

function MainTitle() {
  return (
    <header className='Title'>
        <h1 id='tittleFont'>RESULTADOS DE PESQUISA</h1>
    </header>
  );
};

function MainContainer({ activeSection, typeOrdenation, filterActive}) {
  return (
    <div className='mainContainer'>
      <LeftContainer />
      <RightContainer activeSection={activeSection} typeOrdenation={typeOrdenation} filterActive={filterActive} />
    </div>
  );
};

function LeftContainer() {
  return (
    <div id="leftContainer">
      <LeftContainerContent1 />
      <LeftContainerContent2 />
      <LeftContainerContent3 />
      </div>
  );
};

function LeftContainerContent1() {
  return (
    <div id="leftContainerContent-1">
      <ContainerTitle title="FILTROS" />
    </div>
  );
};

function ContainerTitle({ title }) {
  return (
    <div id="containerTitle">
      <h2 id='leftFont'>{title}</h2>
    </div>
  );
};

function LeftContainerContent2() {
  return (
    <Button1 />
  );
};

function LeftContainerContent3() {
  return (
    <Button2 />
  );
};

function RightContainer({ activeSection, typeOrdenation, filterActive}){
  return (
    <div id="rightContainer" className="scrollable-container">
      {activeSection === 'publicationList' && <PublicationList publications={publications} typeOrdenation={typeOrdenation} filterActive={filterActive} />}
      {activeSection === 'usersList' && <UserList users={users} typeOrdenation={typeOrdenation} filterActive={filterActive}/>}
      {activeSection === 'collaboratorsList' && <CollaboratorList collaborators={collaborators} typeOrdenation={typeOrdenation} filterActive={filterActive} />}
      <div className="scrollable-space"></div>
      <div className="spaceEnd"></div>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

