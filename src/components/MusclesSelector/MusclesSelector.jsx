import React, { useEffect } from 'react';
import { useState } from "react";
import ImageMapper from 'react-image-mapper';
import body_front from '../../assets/images/body_front.png';
import body_back from '../../assets/images/body_back.png';
import { useMediaQuery } from 'react-responsive'
import './MusclesSelector.css'

function MusclesSelector({onMusclesSelected}) {
    const imagesFront = require.context('../../assets/images/muscles/front', true);
    const imagesBack = require.context('../../assets/images/muscles/back', true);
    const [selectedMuscles, setSelectedMuscles] = useState([]);
    const [hoveredFrontArea, setHoveredFrontArea] = useState("");
    const [hoveredBackArea, setHoveredBackArea] = useState("");
    const smallDevice = useMediaQuery({ maxWidth: 768 })

    useEffect(() => {
        onMusclesSelected(selectedMuscles)
    }, [selectedMuscles]);

    const areasBack = { 
        name: "body-back",
        areas: [
            {name: "2", shape:"poly", isBack: true, coords: [102,120,111,125,115,135,92,156,74,158,81,133]},
            {name: "2", shape:"poly", isBack: true, coords: [184,135,187,125,198,121,219,133,226,158,207,156]},
            {name: "5", shape:"poly", isBack: true, coords: [201,154,207,159,226,161,232,173,232,183,234,199,233,209,216,211,201,181]},
            {name: "5", shape:"poly", isBack: true, coords: [98,153,91,159,73,160,67,175,68,183,65,193,67,209,82,211,98,185]},
            {name: "7", shape:"poly", isBack: true, coords: [183,395,174,410,174,431,166,455,180,501,176,519,186,516,192,527,192,513,207,451,199,423]},
            {name: "7", shape:"poly", isBack: true, coords: [116,394,101,420,93,451,108,513,105,527,115,515,124,518,120,506,132,456,125,431,125,409]},
            {name: "8", shape:"poly", isBack: true, coords: [111,282,110,312,142,298,150,287,160,299,189,312,188,283,202,271,196,243,184,232,175,235,164,265,150,286,136,266,124,235,116,232,104,243,98,270]},
            {name: "9", shape:"poly", isBack: true, coords: [108,120,122,116,142,119,150,138,158,119,176,115,191,121,184,124,177,150,150,190,122,149,116,126]},
            {name: "11", shape:"poly", isBack: true, coords: [97,273,108,282,108,315,142,301,144,368,130,427,127,408,116,389,103,411,103,386,93,323]},
            {name: "11", shape:"poly", isBack: true, coords: [156,300,192,315,190,284,203,274,206,323,197,383,196,413,184,390,173,409,170,427,155,369]},
            {name: "12", shape:"poly", isBack: true, coords: [115,137,100,156,104,202,115,228,129,233,150,281,171,233,184,228,195,206,199,155,182,136,179,151,149,197,120,150]},
            {name: "13", shape:"poly", isBack: true, coords: [214,211,222,216,232,211,237,201,246,216,263,278,247,283,227,244]},
            {name: "13", shape:"poly", isBack: true, coords: [86,210,78,215,64,212,62,202,53,220,36,278,51,283,71,247]},
            {name: "14", shape:"poly", isBack: true, coords: [192,224,185,230,195,238]},
            {name: "14", shape:"poly", isBack: true, coords: [107,224,113,230,105,237]}
        ]
    }

    const areasFront = { 
        name: "body-front",
        areas: [
            {name: "4", shape:"poly", isFront: true, coords: [118,124,144,131,157,130,177,123,184,128,199,161,169,173,155,169,147,176,140,171,128,174,98,159]},
            {name: "2", shape:"poly", isFront: true, coords: [104,122,113,130,101,156,74,166,74,144,84,128]},
            {name: "2", shape:"poly", isFront: true, coords: [183,128,191,121,208,125,221,140,223,166,195,156]},
            {name: "3", shape:"poly", isFront: true, coords: [169,175,191,168,193,191,190,220,174,199]},
            {name: "3", shape:"poly", isFront: true, coords: [104,167,125,175,121,200,107,218,102,192]},
            {name: "14", shape:"poly", isFront: true, coords: [175,205,176,224,171,237,172,258,160,287,178,272,191,249,188,220]},
            {name: "14", shape:"poly", isFront: true, coords: [121,204,108,222,105,249,119,273,136,287,124,257,124,237,120,225]},
            {name: "6", shape:"poly", isFront: true, coords: [148,180,155,170,168,176,173,202,175,220,168,236,171,240,167,266,148,291,129,270,125,241,129,236,121,221,123,201,127,176,142,170]},
            {name: "1", shape:"poly", isFront: true, coords: [199,157,198,177,202,197,211,207,224,223,225,206,230,198,231,184,222,167]},
            {name: "1", shape:"poly", isFront: true, coords: [96,158,75,166,65,180,65,197,71,206,71,223,92,199,98,177]},
            {name: "9", shape:"poly", isFront: true, coords: [167,110,189,120,183,127,176,124,153,129]},
            {name: "9", shape:"poly", isFront: true, coords: [129,111,142,130,122,124,113,126,105,120]},
            {name: "10", shape:"poly", isFront: true, coords: [155,293,165,286,185,267,191,255,201,280,207,320,207,335,195,386,193,412,177,392,173,403,173,423,162,403,162,374,163,356,157,332]},
            {name: "10", shape:"poly", isFront: true, coords: [104,254,118,275,143,293,143,319,135,354,135,387,126,423,121,389,105,411,103,385,89,338,91,299]},
            {name: "7", shape:"poly", isFront: true, coords: [176,389,195,418,202,442,201,470,197,493,191,508,175,528,178,506,175,489,167,467,168,451,173,434]},
            {name: "7", shape:"poly", isFront: true, coords: [121,390,125,424,125,435,129,457,127,468,117,504,123,530,101,505,95,466,95,439,101,417]},
            {name: "13", shape:"poly", isFront: true, coords: [229,203,240,220,243,233,243,243,255,280,235,254,238,291,220,253,213,235,211,223,207,217,208,208,225,225]},
            {name: "13", shape:"poly", isFront: true, coords: [87,207,90,212,85,224,83,231,59,288,61,252,40,278,51,243,55,224,65,205,71,226]},
            {name: "5", shape:"poly", isFront: true, coords: [97,165,86,206,95,194,98,183]},
            {name: "5", shape:"poly", isFront: true, coords: [199,165,197,180,200,193,209,207]},
        ]
    }
    function findArea(area, side) {
        if(side === "front") {
            return areasFront.areas.find(a => a.name === area.name);    
        }
        else if(side === "back") {
            return areasBack.areas.find(a => a.name === area.name);    
        }
    }

    function enterArea(area) {
        console.log(findArea(area, "front"))
        if(findArea(area, "front"))
            setHoveredFrontArea(imagesFront(`./${area.name}.png`).default);
        if(findArea(area, "back"))
            setHoveredBackArea(imagesBack(`./${area.name}.png`).default);
    }

    function leaveArea(area) {
        if(!selectedMuscles.includes(area.name)) {
            if(findArea(area, "front"))
                setHoveredFrontArea("");
            if(findArea(area, "back"))
                setHoveredBackArea("");
        }
    }

    function clickArea(area) {
        if(selectedMuscles.includes(area.name)) {
            setSelectedMuscles(selectedMuscles.filter(val => val !== area.name));
        }
        else {
            setSelectedMuscles(selectedMuscles.concat(area.name));
        }
    }

    return (
        <>
            <div className="c-muscle-selector">
                <div className="map-wrapper">
                    <ImageMapper
                        src={body_front}
                        map={areasFront}
                        active={false}
                        onMouseEnter={area => enterArea(area)}
                        onMouseLeave={area => leaveArea(area)}
                        onClick={clickArea}
                    />
                    <ImageMapper
                        src={body_back}
                        map={areasBack}
                        active={false}
                        onMouseEnter={area => enterArea(area)}
                        onMouseLeave={area => leaveArea(area)}
                        onClick={clickArea}
                    />
                </div>
                {selectedMuscles.includes("1") && <img className="area-front-1" src={imagesFront('./1.png').default} alt="muscle"/>}
                {selectedMuscles.includes("2") && <img className="area-front-2" src={imagesFront('./2.png').default} alt="muscle"/>}
                {selectedMuscles.includes("2") && <img className="area-back-2" src={imagesBack('./2.png').default} alt="muscle"/>}
                {selectedMuscles.includes("3") && <img className="area-front-3" src={imagesFront('./3.png').default} alt="muscle"/>}
                {selectedMuscles.includes("4") && <img className="area-front-4" src={imagesFront('./4.png').default} alt="muscle"/>}
                {selectedMuscles.includes("5") && <img className="area-front-5" src={imagesFront('./5.png').default} alt="muscle"/>}
                {selectedMuscles.includes("5") && <img className="area-back-5" src={imagesBack('./5.png').default} alt="muscle"/>}
                {selectedMuscles.includes("6") && <img className="area-front-6" src={imagesFront('./6.png').default} alt="muscle"/>}
                {selectedMuscles.includes("7") && <img className="area-front-7" src={imagesFront('./7.png').default} alt="muscle"/>}
                {selectedMuscles.includes("7") && <img className="area-back-7" src={imagesBack('./7.png').default} alt="muscle"/>}
                {selectedMuscles.includes("8") && <img className="area-back-8" src={imagesBack('./8.png').default} alt="muscle"/>}
                {selectedMuscles.includes("9") && <img className="area-front-9" src={imagesFront('./9.png').default} alt="muscle"/>}
                {selectedMuscles.includes("9") && <img className="area-back-9" src={imagesBack('./9.png').default} alt="muscle"/>}
                {selectedMuscles.includes("10") && <img className="area-front-10" src={imagesFront('./10.png').default} alt="muscle"/>}
                {selectedMuscles.includes("11") && <img className="area-back-11" src={imagesBack('./11.png').default} alt="muscle"/>}
                {selectedMuscles.includes("12") && <img className="area-back-12" src={imagesBack('./12.png').default} alt="muscle"/>}
                {selectedMuscles.includes("13") && <img className="area-front-13" src={imagesFront('./13.png').default} alt="muscle"/>}
                {selectedMuscles.includes("13") && <img className="area-back-13" src={imagesBack('./13.png').default} alt="muscle"/>}
                {selectedMuscles.includes("14") && <img className="area-front-14" src={imagesFront('./14.png').default} alt="muscle"/>}
                {selectedMuscles.includes("14") && <img className="area-back-14" src={imagesBack('./14.png').default} alt="muscle"/>}

                {(hoveredFrontArea && !smallDevice) &&
                    <img class="area-front-hovered" src={hoveredFrontArea} alt="muscle"/>}
                {(hoveredBackArea && !smallDevice) &&
                    <img class="area-back-hovered" src={hoveredBackArea} alt="muscle"/>}

            </div>
        </>
    );
}

export default MusclesSelector;