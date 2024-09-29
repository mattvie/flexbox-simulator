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

            {/* Order */}
            <div className="container flex-direction-row">
                <div class="container-title">order</div>
                <div className="box" style={{ order: 0 }}>0</div>
                <div className="box" style={{ order: 1 }}>1</div>
                <div className="box" style={{ order: 3 }}>3</div>
                <div className="box" style={{ order: -2 }}>-2</div>
                <div className="box" style={{ order: 0 }}>0</div>
                <div className="box" style={{ order: 0 }}>0</div>
            </div>

            {/* Align Self */}
            <div className="container justify-content-center flex-wrap-nowrap">
                <div class="container-title">align-self: center</div>
                <div className="box" />
                <div className="box align-self-center" />
                <div className="box"></div>
            </div>

            {/* Flex Wrap */}
            <div className="container justify-content-center flex-wrap-nowrap">
                <div class="container-title">flex-wrap: nowrap</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
            </div>

            <div className="container justify-content-center flex-wrap-wrap">
                <div class="container-title">flex-wrap: wrap</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
            </div>

            <div className="container justify-content-center flex-wrap-wrap-reverse">
                <div class="container-title">flex-wrap: wrap-reverse</div>
                <div className="box" />
                <div className="box" />
                <div className="box"></div>
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
            </div>

            {/* Align Content */}
            <div className="container justify-content-center flex-wrap-wrap align-content-flex-start">
                <div className="container-title">align-content: flex-start</div>
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
            </div>

            <div className="container justify-content-center flex-wrap-wrap align-content-flex-end">
                <div className="container-title">align-content: flex-end</div>
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
            </div>

            <div className="container justify-content-center flex-wrap-wrap align-content-center">
                <div className="container-title">align-content: center</div>
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
            </div>

            <div className="container justify-content-center flex-wrap-wrap align-content-space-between">
                <div className="container-title">align-content: space-between</div>
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
            </div>

            <div className="container justify-content-center flex-wrap-wrap align-content-space-around">
                <div className="container-title">align-content: space-around</div>
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
            </div>

            <div className="container justify-content-center flex-wrap-wrap align-content-space-evenly">
                <div className="container-title">align-content: space-evenly</div>
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
            </div>

            <div className="container justify-content-center flex-wrap-wrap align-content-stretch">
                <div className="container-title">align-content: stretch</div>
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
                <div className="box" /><div className="box" /><div className="box" /><div className="box" />
            </div>

        </body>
    )
}