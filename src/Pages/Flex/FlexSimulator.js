import { useState } from 'react';

export default function FlexSimulator() {

    // Number of boxes on the container
    const [numberOfBoxes, setNumberOfBoxes] = useState(0);

    // States for flex properties
    const [display, setDisplay] = useState('flex');
    const [justifyContent, setJustifyContent] = useState('flex-start');
    const [alignItems, setAlignItems] = useState('stretch');
    const [flexDirection, setFlexDirection] = useState('row');

    const boxes = Array.from({ length: numberOfBoxes }, (_, index) => (
        <div key={index} className="box">{index + 1}</div>
    ));

    // Function to add a box
    const addBox = () => {
        if (numberOfBoxes < 15) {
            setNumberOfBoxes(numberOfBoxes + 1);
        }
    };

    // Function to remove a box
    const removeBox = () => {
        if (numberOfBoxes > 0) {
            setNumberOfBoxes(numberOfBoxes - 1);
        }
    };

    return (
        <>
            <div class="controls">
                {/* Controls */}
                <button className="properties" onClick={addBox}>+</button>
                <button className="properties" onClick={removeBox}>-</button>

                <label className="properties">
                    Display:
                    <select value={display} onChange={(e) => setDisplay(e.target.value)}>
                        <option value="flex">flex</option>
                        <option value="inline-flex">inline-flex</option>
                        <option value="block">block</option>
                        <option value="inline-block">inline-block</option>
                    </select>
                </label>

                <label className="properties">
                    Justify Content:
                    <select value={justifyContent} onChange={(e) => setJustifyContent(e.target.value)}>
                        <option value="flex-start">flex-start</option>
                        <option value="center">center</option>
                        <option value="flex-end">flex-end</option>
                        <option value="space-between">space-between</option>
                        <option value="space-around">space-around</option>
                        <option value="space-evenly">space-evenly</option>
                    </select>
                </label>

                <label className="properties">
                    Align Items:
                    <select value={alignItems} onChange={(e) => setAlignItems(e.target.value)}>
                        <option value="stretch">stretch</option>
                        <option value="flex-start">flex-start</option>
                        <option value="center">center</option>
                        <option value="flex-end">flex-end</option>
                        <option value="baseline">baseline</option>
                    </select>
                </label>

                <label className="properties">
                    Flex Direction:
                    <select value={flexDirection} onChange={(e) => setFlexDirection(e.target.value)}>
                        <option value="row">row</option>
                        <option value="row-reverse">row-reverse</option>
                        <option value="column">column</option>
                        <option value="column-reverse">column-reverse</option>
                    </select>
                </label>
            </div>

            <div className="big container"
                style={{
                    display: display,
                    justifyContent: justifyContent,
                    alignItems: alignItems,
                    flexDirection: flexDirection,
                }}>

                {boxes}

            </div>
        </>
    );
}