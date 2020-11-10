import React from 'react';

function MainLayout (props) {
  return (
    <div className={props.layoutClass}>
        <header className={props.headerClass}>
            {props.header} 
        </header>
        <main className={props.mainClass}>
            <div className={props.mainLeftClass}>
                {props.mainLeft}
            </div>
            <div className={props.mainCenterClass}>
                {props.mainCenter}
            </div>
            <div className={props.mainRightClass}>
                {props.mainRight}
            </div>
        </main>  
        <footer className={props.footerClass}>
            {props.footer}
        </footer>
    </div>
  )
}

export default MainLayout