import { BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react'

import Logon from './assets/pages/logon'
import Register from './assets/pages/Register'
import Profiles from './assets/pages/profiles'
import Newincident from './assets/pages/NewIncidents'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon}/>
            <Route path="/register" component={Register}/>
            <Route path="/profiles" component={Profiles}/>
            <Route path="/incidents/new" component={Newincident}/>
        </Switch>
        </BrowserRouter>
    )
}













