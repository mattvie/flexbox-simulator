export default function FlexExamples() {
    return (
        <body className="flex-page-body">
            <div className="container">
                <div class="container-title">No flex</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            <div className="container display-flex">
                <div class="container-title">display: flex</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            {/* Justify Content */}
            <div className="container justify-content-center">
                <div class="container-title">justify-content: center</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            <div className="container justify-content-flex-start">
                <div class="container-title">justify-content: flex-start</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            <div className="container justify-content-flex-end">
                <div class="container-title">justify-content: flex-end</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            <div className="container justify-content-space-between">
                <div class="container-title">justify-content: space-between</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            <div className="container justify-content-space-around">
                <div class="container-title">justify-content: space-around</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            <div className="container justify-content-space-evenly">
                <div class="container-title">justify-content: space-evenly</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            {/* Align Items */}
            <div className="container align-items-flex-start">
                <div class="container-title">align-items: flex-start</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            <div className="container align-items-flex-end">
                <div class="container-title">align-items: flex-end</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            <div className="container align-items-center">
                <div class="container-title">align-items: center</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            {/* <div className="container align-items-baseline">
                <div class="container-title">align-items: baseline</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div> */}

            <div className="container align-items-stretch">
                <div class="container-title">align-items: stretch</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            <div className="container align-items-stretch">
                <div class="container-title">align-items: stretch (with lots of boxes)</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div><div className="box" />
                <div className="box" />
                <div className="box"></div><div className="box" />
                <div className="box" />
                <div className="box"></div><div className="box" />
                <div className="box" />
                <div className="box"></div><div className="box" />
                <div className="box" />
                <div className="box"></div><div className="box" />
                <div className="box" />
                <div className="box"></div><div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            {/* Justify Content and Align Items */}
            <div className="container justify-content-center align-items-center">
                <div class="container-title">justify-content: center + align-items: center</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
            </div>

            {/* Flex Direction */}
            <div className="container flex-direction-row">
                <div class="container-title">flex-direction: row (default)</div>
                <div className="box"></div>
                <div className="box red"></div>
                <div className="box green"></div>
            </div>

            <div className="container flex-direction-row-reverse">
                <div class="container-title">flex-direction: row-reverse</div>
                <div className="box"></div>
                <div className="box red"></div>
                <div className="box green"></div>
            </div>

            <div className="container flex-direction-column">
                <div class="container-title">flex-direction: column</div>
                <div className="box"></div>
                <div className="box red"></div>
                <div className="box green"></div>
            </div>

            <div className="container flex-direction-column-reverse">
                <div class="container-title">flex-direction: column-reverse</div>
                <div className="box"></div>
                <div className="box red"></div>
                <div className="box green"></div>
            </div>
        </body>
    )
}