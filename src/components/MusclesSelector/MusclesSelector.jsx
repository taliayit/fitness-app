import React, { useEffect } from 'react';
import { useState } from "react";
import ImageMapper from 'react-image-mapper';
import bodyImg from '../../assets/images/body_sm.png';
import './MusclesSelector.css'

function MusclesSelector({onMusclesSelected}) {
    const images = require.context('../../assets/images/muscles', true);
    const [selectedMuscles, setSelectedMuscles] = useState([]);
    const [hoveredArea, setHoveredArea] = useState("");

    useEffect(() => {
        onMusclesSelected(selectedMuscles)
    }, [selectedMuscles]);

    const areasMap = { 
        name: "body-map",
        areas: [
            {name: "4", shape:"poly", coords: [118,124,144,131,157,130,177,123,184,128,199,161,169,173,155,169,147,176,140,171,128,174,98,159]},
            {name: "2", shape:"poly", coords: [104,122,113,130,101,156,74,166,74,144,84,128]},
            {name: "2", shape:"poly", coords: [183,128,191,121,208,125,221,140,223,166,195,156]},
            {name: "2", shape:"poly", coords: [488,119,508,131,513,138,519,158,505,158,494,152,475,136,479,126]},
            {name: "2", shape:"poly", coords: [397,118,406,126,410,137,401,142,390,152,383,156,375,158,366,158,369,140,381,126]},
            {name: "3", shape:"poly", coords: [169,175,191,168,193,191,190,220,174,199]},
            {name: "3", shape:"poly", coords: [104,167,125,175,121,200,107,218,102,192]},
            {name: "14", shape:"poly", coords: [175,205,176,224,171,237,172,258,160,287,178,272,191,249,188,220]},
            {name: "14", shape:"poly", coords: [121,204,108,222,105,249,119,273,136,287,124,257,124,237,120,225]},
            {name: "14", shape:"poly", coords: [399,223,406,231,396,238]},
            {name: "14", shape:"poly", coords: [485,224,487,238,477,230]},
            {name: "6", shape:"poly", coords: [148,180,155,170,168,176,173,202,175,220,168,236,171,240,167,266,148,291,129,270,125,241,129,236,121,221,123,201,127,176,142,170]},
            {name: "1", shape:"poly", coords: [199,157,198,177,202,197,211,207,224,223,225,206,230,198,231,184,222,167]},
            {name: "1", shape:"poly", coords: [96,158,75,166,65,180,65,197,71,206,71,223,92,199,98,177]},
            {name: "9", shape:"poly", coords: [167,110,189,120,183,127,176,124,153,129]},
            {name: "9", shape:"poly", coords: [129,111,142,130,122,124,113,126,105,120]},
            {name: "9", shape:"poly", coords: [401,119,409,127,415,148,442,191,471,146,476,127,483,119,453,117,442,138,433,117]},
            {name: "10", shape:"poly", coords: [155,293,165,286,185,267,191,255,201,280,207,320,207,335,195,386,193,412,177,392,173,403,173,423,162,403,162,374,163,356,157,332]},
            {name: "10", shape:"poly", coords: [104,254,118,275,143,293,143,319,135,354,135,387,126,423,121,389,105,411,103,385,89,338,91,299]},
            {name: "7", shape:"poly", coords: [176,389,195,418,202,442,201,470,197,493,191,508,175,528,178,506,175,489,167,467,168,451,173,434]},
            {name: "7", shape:"poly", coords: [121,390,125,424,125,435,129,457,127,468,117,504,123,530,101,505,95,466,95,439,101,417]},
            {name: "7", shape:"poly", coords: [475,394,465,410,466,429,460,457,471,500,468,518,476,515,485,526,485,504,497,462,496,432]},
            {name: "7", shape:"poly", coords: [409,393,418,409,418,428,425,453,412,503,416,519,406,513,399,528,399,501,387,460,388,432]},
            {name: "13", shape:"poly", coords: [229,203,240,220,243,233,243,243,255,280,235,254,238,291,220,253,213,235,211,223,207,217,208,208,225,225]},
            {name: "13", shape:"poly", coords: [87,207,90,212,85,224,83,231,59,288,61,252,40,278,51,243,55,224,65,205,71,226]},
            {name: "13", shape:"poly", coords: [355,199,360,211,369,216,377,211,377,217,371,231,347,283,333,279,325,280,339,243,345,217]},
            {name: "13", shape:"poly", coords: [529,199,540,217,542,231,544,242,560,279,553,279,540,285,515,238,515,229,507,216,509,209,516,215,526,210]},
            {name: "12", shape:"poly", coords: [407,139,394,155,394,191,402,217,410,229,423,234,436,268,442,278,449,269,463,233,475,229,483,218,490,190,491,155,477,137,444,197]},
            {name: "5", shape:"poly", coords: [97,165,86,206,95,194,98,183]},
            {name: "5", shape:"poly", coords: [199,165,197,180,200,193,209,207]},
            {name: "5", shape:"poly", coords: [366,160,359,178,362,184,357,196,359,209,374,211,390,185,391,154,383,159]},
            {name: "5", shape:"poly", coords: [493,154,494,183,509,210,526,210,528,197,524,184,525,176,518,159,504,159]},
            {name: "8", shape:"poly", coords: [407,234,396,241,391,271,403,282,403,312,434,297,443,287,451,299,481,312,481,282,493,271,487,238,474,232,468,237,443,288,416,237]},
            {name: "11", shape:"poly", coords: [402,291,400,316,436,300,437,376,422,428,420,408,407,391,395,414,395,388,387,317,389,277,399,281]},
            {name: "11", shape:"poly", coords: [482,296,484,281,495,275,498,313,490,388,489,416,476,388,464,412,463,429,448,377,448,301,486,316]}
        ]
    }
    function enterArea(area) {
        setHoveredArea(images(`./${area.name}.png`).default);
    }

    function leaveArea(area) {
        if(!selectedMuscles.includes(area.name))
            setHoveredArea('');
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

                <ImageMapper
                    src={bodyImg}
                    map={areasMap}
                    active={false}
                    onMouseEnter={area => enterArea(area)}
                    onMouseLeave={area => leaveArea(area)}
                    onClick={clickArea}
                />
                
                {selectedMuscles.includes("1") ? <img id="area-1" src={images('./1.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("2") ? <img id="area-2" src={images('./2.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("3") ? <img id="area-3" src={images('./3.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("4") ? <img id="area-4" src={images('./4.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("5") ? <img id="area-5" src={images('./5.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("6") ? <img id="area-6" src={images('./6.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("7") ? <img id="area-7" src={images('./7.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("8") ? <img id="area-8" src={images('./8.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("9") ? <img id="area-9" src={images('./9.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("10") ? <img id="area-10" src={images('./10.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("11") ? <img id="area-11" src={images('./11.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("12") ? <img id="area-12" src={images('./12.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("13") ? <img id="area-13" src={images('./13.png').default} alt="muscle"/> : null}
                {selectedMuscles.includes("14") ? <img id="area-14" src={images('./14.png').default} alt="muscle"/> : null}

                {hoveredArea ? <img id="area-hovered" src={hoveredArea} alt="muscle"/> : null}

            </div>
        </>
    );
}

export default MusclesSelector;