import { DataView } from 'primereact/dataview';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility
import { Card } from 'primereact/card';
import { TrackFrame } from './components/TrackFrame';
import { setlist, surpriseSongs } from './data/setlist';
import { Chart } from 'primereact/chart';
import React, { useState, useEffect } from 'react';
import { Setlist } from './types/Setlist';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';  // Import the carousel styles

const albumCovers = [
  { era: 'debut', cover: 'albumcovers/debut.png' },
  { era: 'fearless', cover: 'albumcovers/fearless.png' },
  { era: 'speakNow', cover: 'albumcovers/speaknow.png' },
  { era: 'red', cover: 'albumcovers/red.png' },
  { era: '1989', cover: 'albumcovers/1989.png' },
  { era: 'reputation', cover: 'albumcovers/reputation.png' },
  { era: 'lover', cover: 'albumcovers/lover.png' },
  { era: 'folklore', cover: 'albumcovers/folklore.png' },
  { era: 'evermore', cover: 'albumcovers/evermore.png' },
  { era: 'midnights', cover: 'albumcovers/midnights.png' },
];

// Color data for each era
const colorData = {
  debut: '#adffc2',
  fearless: '#fff3ad',
  speakNow: 'plum',
  red: '#FF6666',
  '1989': 'lightblue',
  reputation: '#818589',
  lover: 'lightpink',
  folklore: '#D3D3D3',
  evermore: '#C4A484',
  midnights: '#acace6',
  misc: '#013220',
};

export const Eras = () => {
  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <div className="col md:col-8 fadeinleft animation-duration-500 animation-iteration ">
      <h1 style={{fontFamily: "era", textAlign: "center"}}>TAYLOR SWIFT: THE ERAS TOUR</h1>
      <h1 style={{fontFamily: "era", textAlign: "center"}}>Surprise Song Tracker</h1>
    </ div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={100}
        useKeyboardArrows={true}

      >
        <div>
          <img src={"albumcovers/debut.png"} width={400} height={400} />
          <Card style={{ backgroundColor: colorData.debut }}>
            <h1 style={{ fontFamily: 'Debut', textAlign: 'center' }}>Taylor Swift</h1>
            <DataView value={setlist.debut} itemTemplate={TrackFrame} />
          </Card>
        </div>

		<div>
          <img src={"albumcovers/fearless.png"} width={400} height={400} />
          <Card style={{ backgroundColor: colorData.fearless }}>
            <h1 style={{ fontFamily: 'fearless', textAlign: 'center' }}>Fearless</h1>
            <DataView value={setlist.fearless} itemTemplate={TrackFrame} />
          </Card>
        </div>

        <div>
          <img src={"albumcovers/speaknow.png"} width={400} height={400} />
          <Card style={{ backgroundColor: colorData.speakNow }}>
            <h1 style={{ backgroundColor: colorData.speakNow, fontFamily: 'Speak-Now', textAlign: 'center' }}>
              Speak Now
            </h1>
            <DataView style={{ backgroundColor: colorData.speakNow }} value={setlist.speakNow} itemTemplate={TrackFrame} />
          </Card>
        </div>

		<div>
          <img src={"albumcovers/red.png"} width={400} height={400} />
          <Card style={{ backgroundColor: colorData.red }}>
            <h1 style={{ fontFamily: 'Impact, fantasy', textAlign: 'center' }}>RED</h1>
            <DataView value={setlist.red} itemTemplate={TrackFrame} />
          </Card>
        </div>
		

        <div>
          <img src={"albumcovers/1989.png"} width={400} height={400} />
          <Card style={{ backgroundColor: colorData['1989'] }}>
            <h1 style={{ fontFamily: 'nine', textAlign: 'center' }}>1989</h1>
            <DataView value={setlist['1989']} itemTemplate={TrackFrame} />
          </Card>
        </div>

		        

        <div>
          <img src={"albumcovers/reputation.png"} width={400} height={400} />
          <Card style={{ backgroundColor: colorData.reputation }}>
            <h1 style={{ fontFamily: 'reputation', color: 'black', textAlign: 'center' }}>reputation</h1>
            <DataView value={setlist.reputation} itemTemplate={TrackFrame} />
          </Card>
        </div>

		

        <div>
          <img src={"albumcovers/lover.png"} width={400} height={400} />
          <Card style={{ backgroundColor: colorData.lover }}>
            <h1 style={{ fontFamily: 'Lover', textAlign: 'center' }}>Lover</h1>
            <DataView value={setlist.lover} itemTemplate={TrackFrame} />
          </Card>
        </div>


        <div>
          <img src={"albumcovers/folklore.png"} width={400} height={400} />
          <Card style={{ backgroundColor: colorData.folklore }}>
            <h1 style={{ fontFamily: 'folklore', textAlign: 'center' }}>folklore</h1>
            <DataView value={setlist.folklore} itemTemplate={TrackFrame} />
          </Card>
        </div>



        <div>
          <img src={"albumcovers/evermore.png"} width={400} height={400} />
          <Card style={{ backgroundColor: colorData.evermore }}>
            <h1 style={{ fontFamily: 'folklore', textAlign: 'center' }}>evermore</h1>
            <DataView value={setlist.evermore} itemTemplate={TrackFrame} />
          </Card>
        </div>

        <div>
          <img src={"albumcovers/midnights.png"} width={400} height={400} />
          <Card style={{ backgroundColor: colorData.midnights }}>
            <h1 style={{ fontFamily: 'Neue Haas Grotesk Display Pro', textAlign: 'center', color: '' }}>Midnights</h1>
            <DataView className="bg-purple-600" value={setlist.midnights} itemTemplate={TrackFrame} />
          </Card>
        </div>


        <div>
          <img src={"/albumcovers/logo.png"} width={400} height={400} />
          <Card style={{ backgroundColor: colorData.misc }}>
            <h1 style={{ fontFamily: '', textAlign: 'center', color: 'white' }}>Miscellaneous</h1>
            <DataView className="bg-purple-600" value={setlist.misc} itemTemplate={TrackFrame} />
          </Card>
        </div>

        <div>
          <img src={"albumcovers/midnights.png"} width={400} height={400} />
          <Card style={{ backgroundColor: colorData.midnights }}>
            {/* <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" /> */}
            <h1 style={{ fontFamily: 'Midnights', textAlign: 'center' }}> Analytics coming soon!</h1>
          </Card>
        </div>
      </Carousel>
      <footer style={{ marginTop: '2rem' }}>
        Made by <a href="https://github.com/bunceandbean">bunceandbean</a>
        <br />
        Beta v2.1
      </footer>
    </div>
  );
}

export default Eras;