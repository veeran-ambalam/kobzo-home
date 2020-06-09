import React from 'react'
import * as Icon from 'react-feather'

class GoTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0,
            thePosition: false,
            scroll: false,
        }
    };

    componentDidMount() {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                this.setState({ thePosition: true })
            } else {
                this.setState({ thePosition: false })
            }
        });
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
        if(this.state.scroll === true){
            window.scrollTo(0,0);
            this.setState({ scroll: false });
        }
      }

    scrollToTop = () => {
        console.log("scrollToTop")
        this.setState({ scroll: true });
    }

    renderGoTopIcon = () => {
        if (this.state.thePosition){
            return (
                <div className="go-top" onClick={this.scrollToTop.bind(this)} >
                    <Icon.ArrowUp />
                </div>
            )
        }
    }

    render(){
        return (
            <React.Fragment>
                {this.renderGoTopIcon()}
            </React.Fragment>
        )
    }
}

export default GoTop;
