import './career-content.css'
import '../globals.css'

export default function CareerContent(){
    return(
        <div id="timeline">
            <div className="timeline-component">
                <div className="timeline-date timeline-date-right">August, 2017</div>
            </div>
            <div className="timeline-mid">
                <div className="timeline-point"></div>
            </div>
            <div className="timeline-component timeline-component-bg">
                <h2 className="timeline-title">Lærling hos GK Norge</h2>
                <p className="timeline-paragraph">
                    Ble ansatt som lærling hos GK Kulde i Trondheim.
                </p>
            </div>
            <div className="timeline-component timeline-component-bg">
                <h2 className="timeline-title">Fagbrev som kuldemontør</h2>
                <p className="timeline-paragraph">
                    Sommeren 2019 besto jeg fagprøven og ble fulltidsansatt som kuldemontør
                    hos GK Kulde. Mine arbeidsoppgaver besto i all hovedsak av service, nymontasje- og feilsøking på kjøleanlegg.
                </p>
            </div>
            <div className="timeline-mid">
                <div className="timeline-point"></div>
            </div>
            <div className="timeline-component">
                <div className="timeline-date">Mai, 2019</div>
            </div>
            <div className="timeline-component">
                <div className="timeline-date timeline-date-right">August, 2020</div>
            </div>
            <div className="timeline-mid">
                <div className="timeline-point"></div>
            </div>
            <div className="timeline-component timeline-component-bg">
                <h2 className="timeline-title">Forkurs</h2>
                <p className="timeline-paragraph">
                    Høsten 2020 valgte jeg studier fremfor videre arbeid i GK Kulde for ytterlige utvikling.
                    Da begynte jeg som forkursstudent hos NTNU i Ålesund.
                </p>
            </div>
            <div className="timeline-component timeline-component-bg">
                <h2 className="timeline-title">Rema 1000</h2>
                <p className="timeline-paragraph">
                    I avslutningen av forkursåret, begynte jeg å jobbe deltid hos Rema 1000 Gåseid, og
                    jeg har siden da fortsatt å jobbe der gjennom hele min bachelorgrad.
                </p>
            </div>
            <div className="timeline-mid">
                <div className="timeline-point"></div>
            </div>
            <div className="timeline-component">
                <div className="timeline-date timeline-date">Mai, 2021</div>
            </div>
            <div className="timeline-component timeline-component-btm">
                <div className="timeline-date-right">August, 2021</div>
            </div>
            <div className="timeline-mid">
                <div className="timeline-point"></div>
                <div className="timeline-point timeline-point-btm"></div>
            </div>
            <div className="timeline-component timeline-component-btm timeline-component-bg">
                <h2 className="timeline-title">DatainGENIør</h2>
                <p className="timeline-paragraph">
                    Ett år senere fikk jeg plass som dataingeniørstudent hos NTNU i Ålesund,
                    og er nå i ferd med å avslutte studieperioden min.
                </p>
            </div>
        </div>
    )
}