//thanks to davey struss, tho i did get most solved on my own, used his css mostly




class Team extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            shots: 0,
            score: 0
        }
        this.shotSound = new Audio("./assets/audio/CAR-Door.mp3")
        this.scoreSound = new Audio("./assets/audio/Swish.mp3")
    }
// thanks to davey struss for the timeout, helps with sound transition
    shotHandler = () => {
        let score = this.state.score
        this.shotSound.play()

        if (Math.random() > 0.5) {
            score += 1
            setTimeout(() => {
                this.scoreSound.play()
            }, 500)

        }

        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))
    }
// thnaks to davey struss, my precentage works right now
    render() {
        let shotPercentageDiv
        if (this.state.shots) {
            const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)

            shotPercentageDiv = (
                <div>
                    <strong>Shooting %:{shotPercentage}</strong>
                </div>
            )
        }
//thanks again to davey, i  would have used a different class name for identity
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>


                <div className="identity">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>

                <div>
                    <strong>Shots:</strong> {this.state.shots}
                </div>

                <div>
                    <strong>Score:</strong> {this.state.score}
                </div>

                {shotPercentageDiv}

                <button onClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }
}
//worked this out but chnaged to match davey css
function Game(props) {
    return (

        <div className="Game">
            <h1>Welcome to {props.venue}</h1>
            <div className="stats">
                <Team
                    name={props.visitingTeam.name}
                    logo={props.visitingTeam.logoSrc}
                />


                <div className="versus">
                    <h1>VS</h1>
                </div>

                <Team
                    name={props.homeTeam.name}
                    logo={props.homeTeam.logoSrc}
                />
            </div>
        </div>
    )
}



// this section was my coding which im glad i figured out without help but since i used davey's css matched it up

function App(props) {

    const warriors = {
        name: 'Warriors',
        logoSrc: './assets/images/warriors.jpeg'
    }

    const allblacks = {
        name: 'AllBlacks',
        logoSrc: './assets/images/Fern.png'
    }




    const blackcaps = {
        name: 'BlackCaps',
        logoSrc: './assets/images/cricket.jpeg'
    }

    const kiwi = {
        name: 'Kiwi',
        logoSrc: './assets/images/kiwi.jpeg'
    }

    return (
        <div className="App">
            <Game
                venue="Auckland Arena"
                homeTeam={warriors}
                visitingTeam={allblacks}
            />

            <Game
                venue="Wellington Bowl"
                homeTeam={kiwi}
                visitingTeam={blackcaps}
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')

)
