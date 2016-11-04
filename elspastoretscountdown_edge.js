/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cortinasola',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '101.6%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cortinasola.png",'0px','0px']
                        },
                        {
                            id: 'terra',
                            type: 'image',
                            rect: ['0px', 'auto', '100%', '99px', 'auto', '0px'],
                            fill: ["rgba(0,0,0,0)",im+"terra.png",'0px','0px']
                        },
                        {
                            id: 'cortinaright',
                            type: 'image',
                            rect: ['auto', '-45px', '140px', '1445px', '-1px', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cortina12.png",'0px','0px'],
                            transform: [[],[],[],['-1','0.93763']]
                        },
                        {
                            id: 'cortinaleft',
                            type: 'image',
                            rect: ['-20px', '0px', '180px', '1445px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cortina12.png",'0px','0px'],
                            transform: [[],[],[],['0.77639']]
                        },
                        {
                            id: 'titol',
                            type: 'image',
                            rect: ['0px', '648px', '100%', '325px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"titol.png",'50%','0px','646.02px','325px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            sizeRange: ['600px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(48,13,8,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid7",
                            "opacity",
                            681,
                            1319,
                            "linear",
                            "${titol}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "top",
                            0,
                            2000,
                            "easeInOutQuad",
                            "${titol}",
                            '648px',
                            '123px'
                        ]
                    ]
                }
            },
            "caixes": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '584px', '218px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("elspastoretscountdown_edgeActions.js");
})("EDGE-4557940");
