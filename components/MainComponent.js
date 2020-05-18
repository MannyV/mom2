import React, { Component } from 'react';
import TeamPage from './TeamComponent';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/calendar' render={() => <TheCalendar events={this.props.events.events} /> } />
                        <Route exact path='/todolist' component={TodoList}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/contact' component={Contact}/>
                        <Route exact path='/team' component={TeamPage}/>
                       
                        <Redirect to='/home' />
                    </Switch>
                <Footer />

            </div>
        )
    } 
}

export default Main;